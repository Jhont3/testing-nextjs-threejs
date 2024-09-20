/* Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: pahtic (https://sketchfab.com/pahtic)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/the-red-car-c6a12a37a1054a60aece60cfda7d5db4
Title: the-red-car */

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_9: THREE.Mesh
    Object_12: THREE.Mesh
    Object_16: THREE.Mesh
    Object_19: THREE.Mesh
    Object_24: THREE.Mesh
    Object_27: THREE.Mesh
    Object_30: THREE.Mesh
  }
  materials: {
    material_0: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials, animations } = useGLTF('/models/the-red-car.glb') as GLTFResult
  const { actions, names } = useAnimations(animations, group)

  useEffect(() => {
    if (actions && actions[names[0]]) {
      actions[names[0]].play()
    }
  }, [actions, names])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={5.043}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="_20">
                <group name="root_19" position={[-0.022, 0.652, -0.007]} rotation={[0, -Math.PI / 2, 0]}>
                  <group name="allwheel_10" position={[-0.166, -0.652, -0.181]}>
                    <group name="FLRwheel_4" position={[-0.483, 0.25, 0.188]}>
                      <group name="LFwheel_1" position={[0, 0, 0.452]}>
                        <group name="cylinder_0" position={[0, 0, -0.105]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Object_9" castShadow receiveShadow geometry={nodes.Object_9.geometry} material={materials.material_0} />
                        </group>
                      </group>
                      <group name="RFwheel_3" position={[0, 0, -0.507]}>
                        <group name="cylinder_2" position={[0, 0, 0.105]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Object_12" castShadow receiveShadow geometry={nodes.Object_12.geometry} material={materials.material_0} />
                        </group>
                      </group>
                    </group>
                    <group name="BLRwheel_9" position={[-0.022, 0, 0]}>
                      <group name="LRwheel_6" position={[0.892, 0.25, 0.64]}>
                        <group name="cylinder_5" position={[0, 0, -0.105]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Object_16" castShadow receiveShadow geometry={nodes.Object_16.geometry} material={materials.material_0} />
                        </group>
                      </group>
                      <group name="RRwheel_8" position={[0.892, 0.25, -0.32]}>
                        <group name="cylinder_7" position={[0, 0, 0.105]} rotation={[Math.PI / 2, 0, 0]}>
                          <mesh name="Object_19" castShadow receiveShadow geometry={nodes.Object_19.geometry} material={materials.material_0} />
                        </group>
                      </group>
                    </group>
                  </group>
                  <group name="bodysome_18" position={[0.022, 0.036, 0.007]}>
                    <group name="some_15" position={[-0.188, 0.063, 0]}>
                      <group name="Lsome_12" position={[-0.064, -0.008, 0.493]}>
                        <group name="cuboid_11" position={[0.018, 0.008, 0.198]}>
                          <mesh name="Object_24" castShadow receiveShadow geometry={nodes.Object_24.geometry} material={materials.material_0} />
                        </group>
                      </group>
                      <group name="Rsome_14" position={[-0.064, -0.008, -0.548]}>
                        <group name="cuboid_13" position={[0.018, 0.008, -0.198]} rotation={[-Math.PI, 0, -Math.PI]}>
                          <mesh name="Object_27" castShadow receiveShadow geometry={nodes.Object_27.geometry} material={materials.material_0} />
                        </group>
                      </group>
                    </group>
                    <group name="bone_17" position={[0.208, -0.091, -0.028]}>
                      <group name="cuboid_16">
                        <mesh name="Object_30" castShadow receiveShadow geometry={nodes.Object_30.geometry} material={materials.material_0} />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/the-red-car.glb')
