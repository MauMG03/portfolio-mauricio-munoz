import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Room(props) {
  const { nodes, materials } = useGLTF("/assets/models/room/room.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ConfRoom_lambert1_0.geometry}
          material={materials.lambert1}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

export default Room;
useGLTF.preload("/assets/models/room/room.glb");