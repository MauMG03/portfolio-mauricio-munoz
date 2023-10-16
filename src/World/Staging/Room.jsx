import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Room(props) {
  const { nodes, materials } = useGLTF("/assets/models/room/room.glb");
  return (
    <RigidBody type="fixed" colliders={"trimesh"}>
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
    </RigidBody>
  );
}

export default Room;
useGLTF.preload("/assets/models/room/room.glb");