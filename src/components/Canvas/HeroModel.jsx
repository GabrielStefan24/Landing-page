import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import useMediaQuery from "../../utils/useMediaQuery";

const HeroModel = () => {
  const foldPhone = useMediaQuery("(max-width: 280px)");
  const isBelowXSmallScreens = useMediaQuery("(max-width: 520px)");
  const isBelowSmallScreens = useMediaQuery("(max-width: 640px)");
  const isBelowMediumScreens = useMediaQuery("(max-width:1024px");
  const model = useGLTF("./astronaut/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.12} groundColor="white"></hemisphereLight>
      <pointLight intensity={0.4}></pointLight>
      <primitive
        object={model.scene}
        scale={
          isBelowXSmallScreens
            ? 1
            : isBelowSmallScreens
            ? 1.2
            : isBelowMediumScreens
            ? 1.2
            : 1.5
        }
        position={
          foldPhone
            ? [0, -2.8, -0.9]
            : isBelowSmallScreens
            ? [0, -2.4, -0.9]
            : [0, -3, -0.5]
        }
        rotation={[0, -0.1, -0.1]}
      />
    </mesh>
  );
};
const HeroModelCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const canvasParentDiv =
      document.querySelector("canvas").parentElement.parentElement;
    canvasParentDiv.style.touchAction = "auto";
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      onCreated={({ gl }) => {
        gl.domElement.style.touchAction = "auto";
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <HeroModel />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default HeroModelCanvas;

