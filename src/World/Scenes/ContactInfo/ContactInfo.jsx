import { Text } from "@react-three/drei";
import { useCameraToggleContext } from "../../../Context/CameraContext";
import { useRotationToggleContext } from "../../../Context/RotationContext";
import CustomText3D from "../Welcome/Text/CustomText3d";
import { Car } from "./Models/Car";
import { RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";

const ContactInfo = () => {
    const carBodyRef = useRef(null);
    const setCameraPosition = useCameraToggleContext();

    const [claxonSound] = useState(() => new Audio("/assets/sounds/claxon.wav"));

    const setRotationPosition = useRotationToggleContext();

    const handleBack = () => {
        setCameraPosition([2, 0, 5])
        setRotationPosition([0, 0.35]);
    }

    const handleCar = () => {    
        carBodyRef.current.applyImpulse({ x: 0, y: 8, z: 0 }, true);
        claxonSound.currentTime = 0;
        claxonSound.play();
    }


    return (
        <>
            <CustomText3D text={"back"} onClick={handleBack} scale={1.2} position={[-7, 1.2, 4]} rotation={[0, Math.PI / 2 - 0.6, 0]} />
            <Text rotation-y={Math.PI / 2} position={[-5, 1, 5.2]} scale={0.13}>
                {"Contact by email:\n\n" +
                    "• mauricio.munoz.gutierrez@correounivalle.edu.co\n\n" +
                    "• mauri03194@gmail.com\n\n\n" +
                    "Or by phone:\n" +
                    "+57 318 8021758"}
            </Text>
            <RigidBody ref={carBodyRef} colliders={'hull'}>
                <Car onClick={handleCar} scale={0.85} rotation-y={0.45} position={[-4, -1, 5.8]} />
            </RigidBody>
        </>
    )
}

export default ContactInfo;