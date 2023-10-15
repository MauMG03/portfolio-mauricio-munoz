import { Text } from "@react-three/drei";
import { useCameraContext, useCameraToggleContext } from "../../../Context/CameraContext";
import { useRotationContext, useRotationToggleContext } from "../../../Context/RotationContext";
import CustomText3D from "../Welcome/Text/CustomText3d";

const AboutMe = () => {
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
            <CustomText3D text={"back"} onClick={handleBack} scale={1.2} position={[7.6,1, 9.2]} rotation={[0,3*Math.PI/2 - 0.5,0]}/>
            <Text color={"white"} scale={0.15} position={[5.6,0.7, 6.6]} rotation-y={Math.PI*3/2}>
                {"I'm a technical at electricity and electronics,\n" + 
                "I'm currently at the end of my third year as a student\n" +
                "of systems engineering at Universidad del Valle in\n" + 
                "Cali, Colombia, where in each semester I've been recognize\n" + 
                "for my academic performance. I'm a person who is always\n" +
                "looking for new challenges and opportunities to learn new things.\n\n" + 
                "I worked as a monitor on courses related to programming\n" + 
                "paradigms and anlasys and design of algorithms. I'm also\n" +
                "a research intern at PROMUEVA project where I work on areas\n" +
                "related to data analysis and sentiment analysis.\n\n" + 
                "As a hobbies i like to watch sports, do exercise and learn\n" +
                "new languages."}
            </Text>
        </>
    )
}

export default AboutMe;