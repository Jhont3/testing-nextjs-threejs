"use client"
import { CanvasCube } from '../../components/';


export default function Home() {

  return <div className=" font-[family-name:var(--font-geist-sans)] min-w-[100vw] min-h-[100vh] p-2">
    <h1>asdas</h1>

    <section className='w-full flex justify-center flex-wrap'>
      <CanvasCube/>
      <CanvasCube/>
      <CanvasCube/>
      <CanvasCube/>
      <CanvasCube/>
      <CanvasCube/>
    </section>
  </div>;
}
