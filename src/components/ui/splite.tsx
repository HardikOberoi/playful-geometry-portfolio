
'use client';

import { Suspense, lazy, useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
  scene: string;
  className?: string;
  priority?: boolean;
}

export function SplineScene({ scene, className, priority }: SplineSceneProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (priority) {
      // Eagerly load the scene
      const preloadScene = new Image();
      preloadScene.src = scene;
      preloadScene.onload = () => setIsLoading(false);
    }
  }, [scene, priority]);

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  );
}
