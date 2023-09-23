/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 queen.glb 
Author: Amine Hosseini (https://sketchfab.com/suburbandigital)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/chess-piece-queen-e1bd054f088e4c928740c4989a4a3a41
Title: Chess Piece Queen
*/

import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import gsap from 'gsap'
import { useFrame } from '@react-three/fiber'
export const FLOOR_HEIGHT = 3
export const NB_FLOORS = 3

export function Model(props) {
  const { nodes, materials } = useGLTF('/queen.glb')
  
  const ref = useRef()
  const tl = useRef()
  const scroll = useScroll()

  useFrame((state,delta)=>{
    tl.current.seek(scroll.offset * tl.current.duration())
  })

  useLayoutEffect(()=>{
    tl.current = gsap.timeline({defaults:{duration:1,ease:'power1.inOut'}})

    tl.current
    .to(ref.current.rotation, {y:-0.5},.5)
    .to(ref.current.position,{x:5,z:2.5},.5)

    .to(ref.current.rotation, {y:-1.5},2)
    .to(ref.current.position,{x:20,y:0,z:-15},2)

    .to(ref.current.rotation, {y:-1.5},3)
    .to(ref.current.position,{x:20,y:0,z:-15},3)
  },[])

  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh geometry={nodes.queen_copy19_lambert4_0.geometry} material={materials.lambert4} position={[10,-6.5,13]} rotation={[-Math.PI / 2, 0, 0]} scale={2} />
    </group>
  )
}

useGLTF.preload('/queen.glb')
