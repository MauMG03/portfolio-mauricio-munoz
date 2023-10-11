import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { MathUtils } from "three";

const Computer = (props) => {
    const computerRef = useRef(null); 
    const computerModel = useGLTF("/assets/models/computer/computer.glb");
    
    const {animations} = computerModel;
    const {actions} = useAnimations(animations,computerRef);
    const [active, setActive] = useState(false);
    const { camera } = useThree();
    
    const handleClick = () => {
        const action = actions["Take 001"];
        if(action.isRunning()){
            action.stop();
            camera.position.set(2, 0, 5);
            setActive(false);
        } else {
            action.play();
            camera.position.set(1.2, 0.1255, 3.831);
            setActive(true);
        }
    }

    return(
        <mesh castShadow 
              ref={computerRef} 
              scale={4} 
              position={[2.2,0.4,0.3]} 
              rotation-y={-Math.PI*0.02}
              onClick={handleClick}
              {...props}
        >
            <primitive object={computerModel.scene}/>
        </mesh>
    );
};

export default Computer
useGLTF.preload("/assets/models/computer/computer.glb");