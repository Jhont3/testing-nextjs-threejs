import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model1(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/blackCat.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions) {
      actions.die?.play()
    } 
  }, [])
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Torso" position={[0.082, -0.052, -0.033]} />
        <group name="Head" position={[0.047, 0.584, -0.051]} />
        <group name="RShoulder" position={[-0.307, 0.009, -0.03]} />
        <group name="LShoulder" position={[0.465, -0.094, -0.131]} />
        <group name="die" position={[-0.082, 0.983, 0.021]} rotation={[-0.021, 0.087, -0.027]}>
          <skinnedMesh
            name="Mesh_0001"
            geometry={nodes.Mesh_0001.geometry}
            material={materials['Material_0.001']}
            skeleton={nodes.Mesh_0001.skeleton}
          />
          <primitive object={nodes.Bone} />
          <primitive object={nodes.Bone003} />
          <primitive object={nodes.neutral_bone} />
        </group>
        <group name="LeftArm001" position={[0.51, -0.389, 0.027]} />
        <group name="RightArm001" position={[-0.376, -0.326, 0.153]} />
        <group name="RightFoot001" position={[-0.208, -0.97, -0.02]} />
        <group name="LeftFoot001" position={[0.222, -0.993, -0.02]} />
        <group name="Torso002" position={[0.082, -0.052, -0.033]} />
        <group name="Head003" position={[0.047, 0.584, -0.051]} />
        <group name="RShoulder003" position={[-0.307, 0.009, -0.03]} />
        <group name="LShoulder003" position={[0.465, -0.094, -0.131]} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/blackCat.glb')
