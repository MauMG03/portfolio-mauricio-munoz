import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Computer = () => {
    const computerRef = useRef(null);
    
    const computerModel = useGLTF("/assets/models/computer/computer.glb");
    const {animations} = computerModel;

    const {actions} = useAnimations(animations,computerRef);

    useEffect(() => {
        const action = actions["Take 001"];
        action.play();
    }, [])

    return(
        <mesh castShadow ref={computerRef} scale={4} position={[2.2,0.4,0.3]} rotation-y={-Math.PI*0.02}>
            <primitive object={computerModel.scene}/>
        </mesh>
    );
};

export default Computer
useGLTF.preload("/assets/models/computer/computer.glb");