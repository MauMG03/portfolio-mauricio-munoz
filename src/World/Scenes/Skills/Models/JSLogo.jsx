
import React from "react";
import { useGLTF } from "@react-three/drei";

export function JSLogo(props) {
  const { nodes, materials } = useGLTF("/assets/models/logos/jslogo.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.mat_3220964}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/logos/jslogo.glb");
