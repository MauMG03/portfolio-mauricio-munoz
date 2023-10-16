import { useState } from "react"
import Environments from "../../Staging/Environments"
import Lights from "../../Staging/Lights"
import Room from "../../Staging/Room"
import Desk from "./Models/Desk"
import Computer from "./Models/Computer"
import ClickMe from "./Text/ClickMe"
import Controls from "../../Controls/Controls"
import { useFrame } from "@react-three/fiber"
import CustomText3D from "./Text/CustomText3d"
import { MathUtils } from "three"
import { useCameraContext, useCameraToggleContext } from "../../../Context/CameraContext"
import { useRotationContext, useRotationToggleContext } from "../../../Context/RotationContext"

const Welcome = () => {
    const [active, setActive] = useState(false);

    const cameraPosition = useCameraContext();
    const setCameraPosition = useCameraToggleContext();

    const rotationPosition = useRotationContext();
    const setRotationPosition = useRotationToggleContext();

    const handleClickAM = () => {
        setCameraPosition([1.5, 0.547, 6.578])
        setRotationPosition([0.03, -1.55]);
    }

    const handleSkills = () => {
        setCameraPosition([1, 0.4, 9])
        setRotationPosition([0, Math.PI]);
    }

    const handleCI = () => {
        setCameraPosition([-1, 0.4, 7.2])
        setRotationPosition([0.01, 1.55]);
    }

    useFrame((state) => {
        const x = state.camera.position.x;
        const y = state.camera.position.y;
        const z = state.camera.position.z;

        state.camera.rotation.x = rotationPosition[0];
        state.camera.rotation.y = rotationPosition[1];

        state.camera.position.x = MathUtils.lerp(x, cameraPosition[0], 0.1);
        state.camera.position.y = MathUtils.lerp(y, cameraPosition[1], 0.1);
        state.camera.position.z = MathUtils.lerp(z, cameraPosition[2], 0.1);

        if (x >= 1.1 && x <= 1.3 &&
            y >= 0.11 && y <= 0.13 &&
            z >= 3.7 && z <= 3.9) {
            setActive(true);

        } else {
            setActive(false);
        }
    })

    return (
        <>
            <Controls />
            <ambientLight intensity={0.5} />
            {/* <Perf position={"top-right"}/> */} 
            <Environments />
            <Lights />
            <Room position={[0.5, -1.5, 7]} />
            <Desk scale={0.015} position={[1.4, -1.5, 3]} />
            <Computer rotate={[0, 100, 0]} scale={1.375} position={[1.3, 0.12, 3.1]} />
            {!active && <ClickMe size={0.2} />}
            {active && <CustomText3D text={"About Me"} rotation={[0, 0.3, 0]} position={[-0.75, 0, 0]} onClick={handleClickAM} />}
            {active && <CustomText3D text={"Skills"} rotation={[0, 0.3, 0]} position={[-0.8, -0.35, 0]} onClick={handleSkills} />}
            {active && <CustomText3D text={"Contact info"} position={[0.75, 0.25, 0]} onClick={handleCI} />}
        </>
    )
}

export default Welcome;