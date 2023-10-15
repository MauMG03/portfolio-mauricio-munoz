import { Text } from "@react-three/drei";
import { useCameraContext, useCameraToggleContext } from "../../../Context/CameraContext";
import { useRotationContext, useRotationToggleContext } from "../../../Context/RotationContext";
import CustomText3D from "../Welcome/Text/CustomText3d";

const ContactInfo = () => {
    const cameraPosition = useCameraContext();
    const setCameraPosition = useCameraToggleContext();

    const rotationPosition = useRotationContext();
    const setRotationPosition = useRotationToggleContext();
    
    const handleBack = () => {
        setCameraPosition([2, 0, 5])
        setRotationPosition([0,0.35]);
    }
    
    return(
        <>
            <CustomText3D text={"back"} onClick={handleBack} scale={1.2} position={[-7,1.2, 4]} rotation={[0,Math.PI/2 -0.6,0]}/>
            <Text rotation-y={Math.PI/2} position={[-5,1,5.2]} scale={0.13}>
                {"Contact by email:\n\n" +
                "• mauricio.munoz.gutierrez@correounivalle.edu.co\n\n" +
                "• mauri03194@gmail.com\n\n\n"+
                "Or by phone:\n" +
                "+57 318 8021758"}
            </Text>
        </>
    )
}

export default ContactInfo;