import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import Computer from "./World/Computer";
import Desk from "./World/Desk";
import { Light } from "three";
import Lights from "./World/Lights";
import Environments from "./World/Environments";
import { Perf } from "r3f-perf";
import Room from "./World/Room";
import ClickMe from "./World/ClickMe";

const Experience = () => {
    return(
        <>
            <OrbitControls target={[0,0,0]}/>
            <ambientLight intensity={0.5} />
            {/* <Perf position={"top-right"}/> */}
            <Suspense fallback={null}>
                <Environments/>
                <Lights/>
                <Room position={[0.5,-1.5,7]}/>
                <Desk scale={0.015} position={[1.4,-1.5,3]}/>
                <Computer rotate={[0,100,0]} scale={1.375} position={[1.3,0.12,3.1]}/>
                <ClickMe size={0.2}/>
            </Suspense>
        </>
    );
}

export default Experience;