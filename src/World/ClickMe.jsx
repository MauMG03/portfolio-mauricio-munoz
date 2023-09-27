import { Center, Float, Text3D } from "@react-three/drei";

const ClickMe = (props) => {
    return (
        <>
            <Float
                speed={2} // Animation speed
                rotationIntensity={1.5} // XYZ rotation intensity
                floatIntensity={2} // Up/down float intensity
            >
                <Center position-y={1.25} position-z={2.5} position-x={1.25}>
                    <Text3D
                        font="/assets/fonts/SedgwickAveDisplay-Regular.json"
                        bevelEnabled
                        bevelSize={0.005}
                        bevelThickness={0.01}
                        height={0.1}
                        lineHeight={0.5}
                        letterSpacing={0.05}
                        size={0.25}
                    >
                        {`    Click Me!`}
                        <meshNormalMaterial />
                    </Text3D>
                </Center>
            </Float>
        </>
    );
}

export default ClickMe;