import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Computer from "./World/Computer";

const Experience = () => {
    return(
        <>
            <OrbitControls makeDefault/>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <Computer rotate={[0,100,0]}/>
        </>
    );
}

export default Experience;