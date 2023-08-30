import { createRoot } from "react-dom/client";
import Experience from "./Experience";
import { Canvas } from "@react-three/fiber";
import "./styles.css";

const root = createRoot(document.getElementById("root"));

root.render(
    <Canvas
        camera={{ position: [2, 0, 5] }}>
        <Experience />
    </Canvas>
)