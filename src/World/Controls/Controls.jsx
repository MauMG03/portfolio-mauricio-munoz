import { OrbitControls } from "@react-three/drei";
import { useState } from "react";

const Controls = () => {
    return (
        <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            //rotateSpeed={0.5}
            //maxPolarAngle={Math.PI / 2}
            //minPolarAngle={Math.PI / 3}
            //maxAzimuthAngle={Math.PI / 4}
            //minAzimuthAngle={-Math.PI / 4}
            target={[0, 0, 0]}
        />
    )
}

export default Controls;