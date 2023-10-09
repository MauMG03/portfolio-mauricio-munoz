import { Suspense } from "react"
import Environments from "../../Staging/Environments"
import Lights from "../../Staging/Lights"
import Room from "../../Staging/Room"
import Desk from "./Models/Desk"
import Computer from "./Models/Computer"
import ClickMe from "./Text/ClickMe"
import Controls from "../../Controls/Controls"

const Welcome = () =>{
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
                <ClickMe size={0.2}/>
            </Suspense>
        </>
    )
}

export default Welcome;