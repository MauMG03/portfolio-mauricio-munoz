import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Computer = (props) => {
    const computerRef = useRef(null);
    
    const computerModel = useGLTF("/assets/models/computer/computer.glb");
    const {animations} = computerModel;

    const {actions} = useAnimations(animations,computerRef);

    const handleClick = () => {
        const action = actions["Take 001"];
        if(action.isRunning()){
            action.stop();
        } else {action.play();}
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