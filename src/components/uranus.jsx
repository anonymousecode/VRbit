import React, { useEffect, useState } from 'react';

export default function Uranus() {
  const [aframeReady, setAframeReady] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
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
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Fullscreen A-Frame Scene */}
      <a-scene
        embedded
        cursor="rayOrigin: mouse"
        raycaster="objects: .continent"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
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
          src="/images/uranus-texture.jpg"
          rotation="0 0 0"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 8000; easing: linear"
        ></a-sphere>

        <a-light type="ambient" intensity="0.6"></a-light>
        <a-light type="directional" position="5 5 5" intensity="0.5"></a-light>

        <a-sky src="/images/milkyway.jpg"></a-sky>
      </a-scene>

      {/* Info Button */}
      <button
        onClick={() => setShowInfo(true)}
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          zIndex: 10,
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          fontSize: '18px',
          cursor: 'pointer',
          boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
        }}
        title="About Earth"
      >
        i
      </button>

      {/* Fullscreen Info Overlay - No Scroll */}
      {showInfo && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            color: 'white',
            zIndex: 20,
            padding: '2rem',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <button
            onClick={() => setShowInfo(false)}
            style={{
              position: 'absolute',
              top: 20,
              right: 50,
              fontSize: '32px',
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer'
            }}
            title="Close"
          >
            &times;
          </button>

          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About Uranus</h1>
            <p style={{ maxWidth: '700px', textAlign: 'center', fontSize: '1.3rem' }}>
            Uranus is the seventh planet from the Sun and is unique for its tilted axis, causing extreme seasons where its poles experience 42 years of sunlight and 42 years of darkness.
            It is an ice giant, primarily made of hydrogen, helium, and water, ammonia, and methane ice.
            Uranus is known for its faint rings and numerous moons, and is the only planet that rotates on its side.
            </p>
            <ul style={{ marginTop: '2rem', fontSize: '1.1rem', listStyle: 'none' }}>
            <li><strong>Diameter:</strong> 50,724 km</li>
            <li><strong>Distance from Sun:</strong> 2.871 billion km</li>
            <li><strong>Orbital Period:</strong> 84 Earth years</li>
            <li><strong>Satellites:</strong> 27 known moons (including Miranda, Ariel, Umbriel)</li>
            </ul>


        </div>
      )}
    </div>
  );
}
