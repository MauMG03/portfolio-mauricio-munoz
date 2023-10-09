import { Canvas } from "@react-three/fiber"
import Experience from "./World/Experience.jsx"
import Info from "./Info/Info.jsx"
import "./styles.css"
import { Loader } from "@react-three/drei"

const App = () => {
    return (
        <>
            <Info name={"Mauricio Munoz"} biography={"Student of System Engineering"}/>
                <Canvas
                    shadows
                    camera={{ position: [2, 0, 5] }}
                >
                    <Experience />
                </Canvas>
            <Loader/>
        </>
    )
}
export default App