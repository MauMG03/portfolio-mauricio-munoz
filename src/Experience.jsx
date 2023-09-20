import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Computer from "./World/Computer";
import Desk from "./World/Desk";

const Experience = () => {
    return(
        <>
            <OrbitControls makeDefault/>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <Desk/>
            <Computer rotate={[0,100,0]}/>
            <mesh position-y={-4.8} position-x={2} rotation-x={-Math.PI / 2} >
                <planeGeometry attach="geometry" args={[25, 25]}/>
                <meshStandardMaterial attach="material" color="grey" />
            </mesh>
        </>
    );
}

export default Experience;