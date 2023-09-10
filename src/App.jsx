import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import Info from "./Info/Info.jsx"
import "./styles.css"

const App = () => {
    return (
        <>
            <Info name={"Mauricio Munoz"} biography={"Web 3D Developer"}/>
            <Canvas
                camera={{ position: [2, 0, 5] }}
            >
                <Experience />
            </Canvas>
        </>
    )
}
export default App