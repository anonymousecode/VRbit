import React, { useEffect, useState } from 'react';

export default function Earth() {
  const [aframeReady, setAframeReady] = useState(false);

  useEffect(() => {
    // Check if A-Frame is already loaded
    if (window.AFRAME) {
      setAframeReady(true);
    } else {
      const script = document.createElement('script');
      script.src = 'https://aframe.io/releases/1.2.0/aframe.min.js';
      script.async = true;

      script.onload = () => {
        setAframeReady(true);
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  if (!aframeReady) return <p>Loading 3D scene...</p>;

  return (
    <div>
      <a-scene cursor="rayOrigin: mouse" raycaster="objects: .continent">
        <a-entity
          camera
          look-controls
          wasd-controls="acceleration: 50"
          position="0 2 7"
        ></a-entity>

        <a-sphere
          id="earth"
          position="0 1 -3"
          radius="4"
          src="/images/earth-texture.jpg"
          rotation="0 0 0"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 35000; easing: linear"
        ></a-sphere>

        <a-light type="ambient" intensity="0.6"></a-light>
        <a-light type="directional" position="5 5 5" intensity="0.5"></a-light>

        <a-sky src="/images/milkyway.jpg"></a-sky>
      </a-scene>
    </div>
  );
}
