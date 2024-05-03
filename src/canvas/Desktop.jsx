import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Preload } from "@react-three/drei";
import CanvasLoader from "../components/Loader";

function Model() {
  const computer = useGLTF("./desktop/scene.gltf");
  const [mobileview, setMobileview ] = useState(false);
  useEffect(()=>{
    const device = window.matchMedia("(max-width: 600px)");
    setMobileview(device.matches);

    const handleDevice = (event) => {
      setIsMobile(event.matches);
    };

    device.addEventListener("change", handleDevice);
    return () => {
      device.removeEventListener("change", handleDevice);
    };
  },[]);
  return (
    <mesh className="border-2 border-red-400">
      <hemisphereLight intensity={1} groundColor={"black"} />
      <pointLight intensity={1} />
      <spotLight position={[-20,50,10]}
      intensity={0.25}
      shadows
      angle={0.12}
      penumbra={1}
       />
      <primitive
        object={computer.scene}
        scale={mobileview ? 0.3 : 0.75}
        position={mobileview ? [0, -1.5, -0.5] : [0, -3.45, -1.25]}
      />
    </mesh>
  );
}

const DesktopCanvas = () => {
  return (
      <Canvas
        frameloop="demand"
        shadows
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: [20, 3, 5], fov: 25}}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Model />
        </Suspense>
        <Preload all />
      </Canvas>
  );
};
export default DesktopCanvas;