import { OrbitControls, ScrollControls } from "@react-three/drei";
import { useState } from "react";

const Controls = () => {
    return (
        <>
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
                target={[0, 0, 0]}
            />
        </>
    )
}

export default Controls;