import { useCameraContext, useCameraToggleContext } from "../../../Context/CameraContext";
import { useRotationContext, useRotationToggleContext } from "../../../Context/RotationContext";
import CustomText3D from "../Welcome/Text/CustomText3d";

const Skills = () => {
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
            <CustomText3D text={"back"} onClick={handleBack} scale={1.2} position={[-2.3, 1.3, 14.5]} rotation={[0,Math.PI-0.6,0]}/>
        </>
    )
}

export default Skills;