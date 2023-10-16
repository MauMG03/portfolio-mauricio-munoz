import { Float, Text } from "@react-three/drei";
import { useCameraContext, useCameraToggleContext } from "../../../Context/CameraContext";
import { useRotationContext, useRotationToggleContext } from "../../../Context/RotationContext";
import CustomText3D from "../Welcome/Text/CustomText3d";
import { ReactLogo } from "./Models/ReactLogo";
import { JSLogo } from "./Models/JSLogo";
import { PythonLogo } from "./Models/PythonLogo";

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
            <Text rotation-y={Math.PI} position={[0.83, 0.6, 12]} scale={0.13}>
                {
                "Personal Skills: \n\n" +
                "• Teamwork        • Leadership       • Analytical Thinking\n\n" +
                "• Flexibility          • Adaptability      • Problem Solving\n\n\n\n" +
                "Technologies and tools:\n\n" +
                "• Programming languages: Python, Java, C++, JavaScript, Scala.\n\n" +
                "• Frameworks: Node.js, Express, Django.\n\n" +
                "• Web development: React.js, Next.js.\n\n" + 
                "• Other: Git, Docker."}
            </Text>
            <Float
                speed={2} // Animation speed
                rotationIntensity={0.1} // XYZ rotation intensity
                floatIntensity={0.7} // Up/down float intensity
            >
                <ReactLogo scale={0.08} position={[-1.5,0,12]}/>
                <JSLogo scale={0.015} rotation={[0,Math.PI/2*3,Math.PI/2]} position={[-0.8,0.3,12]}/>
                <PythonLogo scale={0.06} rotation-x={Math.PI} rotation-y={0.5} position={[-0.7,-0.5,12]}/>
            </Float>
        </>
    )
}

export default Skills;