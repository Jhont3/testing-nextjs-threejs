import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const CanvasLoader = () => {

    const {progress} = useProgress()

    return (
        <Html 
            as='div'
            center
            className='flex flex-col justify-center items-center '
        >
            CanvasLoader
            <p className='font-bold text-3xl text-black'>{progress !== 0 ? `${progress.toFixed(2)}%` : 'Loading...'}</p>
        </Html>
    )
}

export default CanvasLoader