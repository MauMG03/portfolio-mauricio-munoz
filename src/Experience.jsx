import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Experience = () => {
    const torusRef = useRef(null);
    const boxRef = useRef(null);
    const sphereRef = useRef(null);
    const coneRef = useRef(null);
    var x = 0;
    var y = 0;

    useFrame((state,delta) => {
        x += delta
        let moveX = Math.cos(Math.PI * x)

        y += delta
        let moveY = Math.sin(Math.PI * y)
        
        boxRef.current.position.x += moveX*0.1;
        sphereRef.current.position.x += moveX*0.1;
        coneRef.current.position.x += moveX*0.1;
        torusRef.current.position.x += moveX*0.1;

        boxRef.current.position.y += moveY*0.1;
        sphereRef.current.position.y += moveY*0.1;
        coneRef.current.position.y += moveY*0.1;
        torusRef.current.position.y += moveY*0.1;
    });

    return(
        <>
            <OrbitControls makeDefault/>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <mesh ref={boxRef} position={[0,0,0]}>
                <boxGeometry args={[1,1,1]}/>    
                <meshStandardMaterial color="yellow"/>
            </mesh>

            <mesh ref={coneRef} position={[-1,0,0]}>
                <coneGeometry args={[0.5,1.5]}/>    
                <meshMatcapMaterial color="green"/>
            </mesh>

            <mesh ref={torusRef} position={[0,-1,0]}>
                <torusGeometry args={[3.5, 0.5, 10, 100]}/>    
                <meshNormalMaterial/>
            </mesh>

            <mesh ref={sphereRef} position={[1,0,0]}>
                <sphereGeometry args={[0.5,64,20]}/>    
                <meshToonMaterial color="red"/>
            </mesh>
        </>
    );
}

export default Experience;