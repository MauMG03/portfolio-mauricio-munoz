import { Center, Float, Text3D } from "@react-three/drei";

const CustomText3D = (props) => {
    const { text } = props
    
    return (
        <group {...props}>
            <mesh> 
            <Float
                speed={1.5} // Animation speed
                rotationIntensity={0.2} // XYZ rotation intensity
                floatIntensity={0.2} // Up/down float intensity
            >
                <Center position={[0.7 ,0.4,2.5]}>
                    <Text3D 
                        font="/assets/fonts/SedgwickAveDisplay-Regular.json"
                        bevelEnabled
                        bevelSize={0.005}
                        bevelThickness={0.01}
                        height={0.1}
                        lineHeight={0.5}
                        letterSpacing={0.05}
                        size={0.05}
                        depth={0.02}
                    >
                        {text}
                        <meshNormalMaterial/>
                    </Text3D>
                </Center>
            </Float>
            </mesh>
        </group>
    );
}

export default CustomText3D;