'use client'

import React, { useRef, useEffect, useState } from 'react'
import { Application } from '@splinetool/runtime'

export default function SplineAnimation({ sceneUrl }) {
  const canvasRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const canvas = canvasRef.current
    let app

    async function loadScene() {
      setIsLoading(true)
      app = new Application(canvas)
      try {
        await app.load(sceneUrl)
        setIsLoading(false)
      } catch (error) {
        console.error('Error loading Spline scene:', error)
        setIsLoading(false)
      }
    }

    if (canvas) {
      loadScene()
    }

    return () => {
      if (app) {
        app.dispose()
      }
    }
  }, [sceneUrl])

  return (
    <div className="h-full w-full relative">
      {isLoading && (
        <div className="absolute inset-0 flex justify-center items-center bg-black text-white text-2xl">
          Loading 3D scene...
        </div>
      )}
      <canvas
        ref={canvasRef}
        className={`w-full h-full transition-opacity duration-1000 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  )
}