import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import Computer from "./Scenes/Welcome/Models/Computer";
import Desk from "./Scenes/Welcome/Models/Desk";
import { Light } from "three";
import Lights from "./Staging/Lights";
import Environments from "./Staging/Environments";
import { Perf } from "r3f-perf";
import Room from "./Staging/Room";
import ClickMe from "./Scenes/Welcome/Text/ClickMe";
import Welcome from "./Scenes/Welcome/Welcome";

const Experience = () => {
    return(
        <>
            <Welcome/>
        </>
    );
}

export default Experience;