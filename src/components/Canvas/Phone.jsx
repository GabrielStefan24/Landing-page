import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import useMediaQuery from "../../utils/useMediaQuery";

const Phone = () => {
  const foldPhone = useMediaQuery("(max-width: 280px)");
  const isBelowXSmallScreens = useMediaQuery("(max-width: 520px)");
  const isBelowSmallScreens = useMediaQuery("(max-width: 640px)");
  const isBelowMediumScreens = useMediaQuery("(max-width:1024px");
  const model = useGLTF("./phone/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.12} groundColor="white"></hemisphereLight>
      <pointLight intensity={0.4}></pointLight>
      <primitive
        object={model.scene}
        scale={
          isBelowXSmallScreens
            ? 0.8
            : isBelowSmallScreens
            ? 1
            : isBelowMediumScreens
            ? 1.2
            : 2
        }
        position={
          foldPhone
            ? [0, -1, -0.9]
            : isBelowSmallScreens
            ? [0, -0.2, -0.9]
            : [0, -0.5, -0.3]
        }
        rotation={[0, -0.1, 0]}
      />
    </mesh>
  );
};
const PhoneCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [10, 5, 5], fov: 15 }}
      gl={{ preserveDrawingBuffer: true }}
      className="flex-1"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Phone />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default PhoneCanvas;
