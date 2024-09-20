"use client"
// import * as THREE from 'three';
// import { useEffect } from 'react';
import { CanvasCube } from '../../components/';


export default function Home() {
  // useEffect(() => {

  //   const scene = new THREE.Scene();
  //   scene.background = new THREE.Color('#F0F0F0');

  //   const camera = new THREE.PerspectiveCamera(
  //     75,
  //     window.innerWidth / window.innerHeight,
  //     0.1,
  //     1000
  //   );
  //   camera.position.z = 5;

  //   const geometry = new THREE.BoxGeometry();
  //   const material = new THREE.MeshLambertMaterial({
  //     color: '#468585',
  //     emissive: '#468585',
  //   });

  //   const cube = new THREE.Mesh(geometry, material);
  //   scene.add(cube);

  //   const light = new THREE.DirectionalLight(0x9cdba6, 10);
  //   light.position.set(1, 1, 1);
  //   scene.add(light);

  //   const renderer = new THREE.WebGLRenderer();
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   document.body.appendChild(renderer.domElement);

  //   const animate = () => {
  //     requestAnimationFrame(animate);
  //     cube.rotation.x += 0.01;
  //     cube.rotation.y += 0.01;
  //     renderer.render(scene, camera);
  //   };

  //   animate();

  //   return () => {
  //     document.body.removeChild(renderer.domElement);
  //   };
  // }, []);

  return <div className=" font-[family-name:var(--font-geist-sans)] min-w-[100vw] min-h-[100vh] p-2">
    <h1>asdas</h1>

    <section className='w-full flex justify-center'>
      <CanvasCube/>
    </section>
  </div>;
}
