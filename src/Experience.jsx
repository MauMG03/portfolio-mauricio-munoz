import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Experience = () => {
    const torusRef = useRef(null);

    useFrame((state,delta) => {
        torusRef.current.rotation.x += delta
    });
    return(
        <>
            <OrbitControls makeDefault/>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <mesh position={[0,0,0]}>
                <boxGeometry args={[1,1,1]}/>    
                <meshStandardMaterial color="yellow"/>
            </mesh>

            <mesh position={[-1,0,0]}>
                <coneGeometry args={[0.5,1.5]}/>    
                <meshMatcapMaterial color="green"/>
            </mesh>

            <mesh ref={torusRef} position={[0,-1,0]}>
                <torusGeometry args={[4, 1, 30, 100]}/>    
                <meshNormalMaterial/>
            </mesh>

            <mesh position={[1,0,0]}>
                <sphereGeometry args={[0.5,64,20]}/>    
                <meshToonMaterial color="red"/>
            </mesh>
        </>
    );
}

export default Experience;