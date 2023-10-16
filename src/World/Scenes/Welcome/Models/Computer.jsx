import { useAnimations, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useCameraToggleContext } from "../../../../Context/CameraContext";

const Computer = (props) => {
    const computerRef = useRef(null); 
    const computerModel = useGLTF("/assets/models/computer/computer.glb");
    
    const {animations} = computerModel;
    const {actions} = useAnimations(animations,computerRef);

    const setCameraPosition = useCameraToggleContext();
    
    const handleClick = () => {
        const action = actions["Take 001"];
        if(action.isRunning()){
            action.stop();
            setCameraPosition([2, 0, 5]);
        } else {
            action.play();
            setCameraPosition([1.2, 0.1255, 3.831]);
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