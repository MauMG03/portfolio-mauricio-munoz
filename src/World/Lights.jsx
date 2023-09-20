import { SpotLight, useHelper } from "@react-three/drei";
import { useRef } from "react";
import { SpotLightHelper } from "three";

const Lights = () => {
    const spotLightRef = useRef();

    //useHelper(spotLightRef,SpotLightHelper);
    
    return (
        <>
            <spotLight
            ref={spotLightRef}
            castShadow
            position={[-3, 4, 2]}
            angle={Math.PI / 4}
            intensity={200}
            color={"white"}
            penumbra={1}
  			distance={14}
        />      
        </>
    );
};

export default Lights;