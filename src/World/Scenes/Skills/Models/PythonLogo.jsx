import React from "react";
import { useGLTF } from "@react-three/drei";

export function PythonLogo(props) {
  const { nodes, materials } = useGLTF("/assets/models/logos/pythonlogo.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.material}
        position={[-0.002, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.501}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials[".001"]}
        position={[-0.002, 0, 0]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={2.501}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/logos/pythonlogo.glb");