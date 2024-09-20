import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import { RotatingCube } from "./RotatingCube";
import { Suspense } from "react";
import CanvasLoader from "../common/CanvasLoader";
import { Model } from "./RedCar";

export const CanvasCube = () => {
  return (
    <div className="w-80">

        <Canvas >

            <Suspense fallback={<CanvasLoader/>}>
            
            <PerspectiveCamera makeDefault position={[0,0,30]}/>
            <Model />

            <OrbitControls enableZoom enablePan enableRotate />
            <directionalLight
                position={[1, 1, 1]}
                intensity={10}
                color={0x9cdba6}
                />
            <ambientLight intensity={0.5} />
            <color attach="background" args={["#F0F0F0"]} />
            {/* <RotatingCube /> */}

            </Suspense>
        </Canvas>
        
    </div>
  );
};
