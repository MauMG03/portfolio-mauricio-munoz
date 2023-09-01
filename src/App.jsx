import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import Info from "./Info"
import "./styles.css"

const App = () => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: '1fr', width: '100vw', height: '100vh' }}>
            <div className="info">
                <Info name="Mauricio Munoz" bio="3D web developer"/>
            </div>
            <Canvas
                camera={{ position: [2, 0, 5] }}
            >
                <Experience />
            </Canvas>
            
        </div>
    )
}
export default App