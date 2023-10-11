import { Suspense, useRef, useState } from "react"
import Environments from "../../Staging/Environments"
import Lights from "../../Staging/Lights"
import Room from "../../Staging/Room"
import Desk from "./Models/Desk"
import Computer from "./Models/Computer"
import ClickMe from "./Text/ClickMe"
import Controls from "../../Controls/Controls"
import { useFrame } from "@react-three/fiber"
import CustomText3D from "./Text/CustomText3d"

const Welcome = () =>{
    const [ active, setActive ] = useState(false); 
    const clickMeRef = useRef(null);

    useFrame((state) => {
        const x = state.camera.position.x;
        const y = state.camera.position.y;
        const z = state.camera.position.z;

        if(x >= 1.1 && x <= 1.3 &&
            y >= 0.11 && y <= 0.13 && 
            z >= 3.7 && z <= 3.9){
           setActive(true);
            
        } else {
            setActive(false);
        }
    })
    
    return(
        <>
            <Controls/>
            <ambientLight intensity={0.5} />
            {/* <Perf position={"top-right"}/> */}
            <Suspense fallback={null}>
                <Environments/>
                <Lights/>
                <Room position={[0.5,-1.5,7]}/>
                <Desk scale={0.015} position={[1.4,-1.5,3]}/>
                <Computer rotate={[0,100,0]} scale={1.375} position={[1.3,0.12,3.1]}/>
                {!active && <ClickMe size={0.2}/>}
                {active && <CustomText3D text={"About Me"} onClick={() => console.log("About me")}/>}
                {active && <CustomText3D text={"Skills"} position={[0.1,-0.35,0]} onClick={() => console.log("skilss")}/>}
                {active && <CustomText3D text={"Contact info"} position={[0.75,0.25,0]} onClick={() => console.log("contact info")}/>}
            </Suspense>
        </>
    )
}

export default Welcome;