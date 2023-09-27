import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export function Desk(props) {
  const { nodes, materials } = useGLTF("assets/models/desk/desk.glb");
  const PATH = "assets/textures/wood/"

  const propsTextures = useTexture({
    map: PATH + "woodColor.jpg",
    normalMap: PATH + "woodNormal.jpg",
    roughnessMap: PATH + "woodRoughness.jpg",
    aoMap: PATH + "woodAO.jpg",
  })

  return (
    <group dispose={null}>
        <mesh scale={0.05}
            castShadow
            geometry={nodes["Desk_Material_#7_0"].geometry}
            rotation={[-Math.PI / 2, 0, 1.5]}
            position={[2,-4.8,-0.2]}
            {...props}
        >
            <meshStandardMaterial {...propsTextures} />
        </mesh>
    </group>
  );
}

export default Desk
useGLTF.preload("assets/models/desk/desk.glb");
