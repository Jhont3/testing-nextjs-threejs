import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { RotatingCube } from "./RotatingCube"

export const CanvasCube = () => {
    return (
        <Canvas className="h-96 w-96 flex justify-center items-center">
            
            <OrbitControls enableZoom enablePan enableRotate/>
            <directionalLight position={[1,1,1]} intensity={10} color={0x9CDBA6} />
            <color attach="background" args={['#F0F0F0']} />

            <RotatingCube/>
        </Canvas>
    )
}
