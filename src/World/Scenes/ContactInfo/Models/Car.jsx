import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Car(props) {
  const { nodes, materials } = useGLTF("/assets/models/car/car.glb");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube001.geometry} material={materials.Plate} />
      <mesh geometry={nodes.Cube_1.geometry} material={materials.Car} />
      <mesh geometry={nodes.Cube_2.geometry} material={materials.Window} />
      <mesh geometry={nodes.Cube_3.geometry} material={materials.Indicators} />
      <mesh geometry={nodes.Cube_4.geometry} material={materials.Light} />
      <mesh geometry={nodes.Cylinder001_1.geometry} material={materials.Tire} />
      <mesh
        geometry={nodes.Cylinder001_2.geometry}
        material={materials.Chrome}
      />
      <mesh geometry={nodes.Cylinder005.geometry} material={materials.Tire} />
      <mesh
        geometry={nodes.Cylinder005_1.geometry}
        material={materials.Chrome}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/car/car.glb");
