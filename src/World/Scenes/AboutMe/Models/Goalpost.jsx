import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

export function Goalpost(props) {
    const { nodes, materials } = useGLTF("/assets/models/goalpost/goalpost.glb");
    const [play, setPlay] = useState(false);
    const [goalSound] = useState(() => new Audio("/assets/sounds/goal.wav"));

    useEffect(() => {
        if (play) {
            goalSound.currentTime = 0;
            goalSound.play();
        }
    }, [play]);

    return (
        <RigidBody onCollisionEnter={() => setPlay(!play)} onCollisionLeave={() => setPlay(!play)} colliders={false} type="fixed">
            <CuboidCollider args={[0.05, 0.45, 0.75]} position={[5.5,-1,9.05]} rotation={[0,-0.7,0]}/>
            <CuboidCollider args={[0.05, 0.35, 0.75]} position={[5.6,-1,8.25]} rotation={[0,0.9,0]}/>
            <CuboidCollider args={[0.05, 0.35, 0.75]} position={[4.8,-1,9.4]} rotation={[0,0.9,0]}/>
            <CuboidCollider args={[0.7, 0.01, 0.4]} position={[4.9,-0.6,8.6]} rotation={[0,0.9,0]}/>
            <group {...props} dispose={null}>
                <group rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                        geometry={nodes.Cube_None_0.geometry}
                        material={materials.None}
                    />
                    <mesh
                        geometry={nodes.Cube_None_0_1.geometry}
                        material={materials.None}
                    />
                </group>
                <mesh
                    geometry={nodes.Cylinder_Cylinder_001_metalpipe_0.geometry}
                    material={materials.metalpipe}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_001_Cylinder_002_None_0.geometry}
                    material={materials.None}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_002_Cylinder_003_None_0.geometry}
                    material={materials.None}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    geometry={nodes.Cylinder_003_Cylinder_004_None_0.geometry}
                    material={materials.None}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
            </group>
        </RigidBody>
    );
}

useGLTF.preload("assets/models/goalpost/goalpost.glb");