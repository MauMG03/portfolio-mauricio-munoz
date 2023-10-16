import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";


export function Soccerball(props) {
    const { nodes, materials } = useGLTF("/assets/models/soccerball/soccerball.glb");

    return (
        <group ref={props.ballRef} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    geometry={nodes.Object_2.geometry}
                    material={materials.Black_s}
                />
                <mesh
                    geometry={nodes.Object_3.geometry}
                    material={materials.White_s}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/assets/models/soccerball/soccerball.glb");
