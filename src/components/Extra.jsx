import React from 'react';
import { motion } from 'framer-motion';

const Extra = () => {
  const images = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    url: `https://picsum.photos/seed/${i + 900}/1200/800`,
    title: `VOL_0${i + 1}`,
    color: ['#00f2ff', '#7000ff', '#ff0055', '#39ff14'][i % 4],
    width: i % 3 === 0 ? '550px' : '350px' // Mixes large and small for professional look
  }));

  // We double the array to create a seamless infinite loop effect
  const duplicatedImages = [...images, ...images];

  return (
    <div style={container}>
      {/* 1. CAMERA UI OVERLAY (Professional HUD) */}
      <div style={hudOverlay}>
        <div style={topInfo}>
          <div style={statusGroup}>
            <div style={redDot} />
            <span style={monoText}>AUTO_PLAY ON</span>
          </div>
          <span style={centerLogo}>PHANTOM_ARCHIVE.SYS</span>
          <span style={monoText}>24FPS / RAW</span>
        </div>
        <div style={cornerDecor} />
      </div>

      {/* 2. THE AUTO-MOVING REEL */}
      <div style={reelContainer}>
        <motion.div 
          style={track}
          animate={{ x: [0, -5000] }} // Adjust based on total width
          transition={{ 
            duration: 50, 
            repeat: Infinity, 
            ease: "linear",
            pauseOnHover: true // Professional touch: stops when you look at an image
          }}
        >
          {duplicatedImages.map((img, i) => (
            <motion.div 
              key={i} 
              style={{...frame, minWidth: img.width}}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <div style={sprocketTop} />
              
              <div style={imageBox}>
                {/* Glow effect matching the image theme */}
                <div style={{...neonGlow, backgroundColor: img.color}} />
                
                <img src={img.url} alt="reel" style={imgStyle} />
                
                {/* Metadata Panel */}
                <div style={label}>
                  <div style={{...colorTag, backgroundColor: img.color}} />
                  <span style={labelTitle}>{img.title}</span>
                </div>
              </div>

              <div style={sprocketBottom} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 3. CENTER SCANNER (Professional Aesthetic) */}
      <div style={scannerCenter} />
      <div style={vignette} />
    </div>
  );
};

// --- STYLES ---

const container = {
  backgroundColor: '#000',
  height: '100vh',
  width: '100vw',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  fontFamily: '"JetBrains Mono", monospace',
};

const reelContainer = {
  width: '100%',
  overflow: 'visible',
  display: 'flex',
  alignItems: 'center',
};

const track = {
  display: 'flex',
  gap: '40px',
  paddingLeft: '20px',
};

const frame = {
  position: 'relative',
  height: '400px',
  background: '#111',
  padding: '10px 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  cursor: 'pointer',
  border: '1px solid rgba(255,255,255,0.05)',
  transition: 'border 0.3s ease',
};

const imageBox = {
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
};

const imgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: 2,
  position: 'relative',
};

const neonGlow = {
  position: 'absolute',
  inset: 0,
  filter: 'blur(50px)',
  opacity: 0.25,
  zIndex: 1,
};

const sprocketTop = {
  height: '20px',
  width: '100%',
  background: 'repeating-linear-gradient(90deg, #000 0, #000 20px, #222 20px, #222 40px)',
  marginBottom: '5px'
};

const sprocketBottom = { ...sprocketTop, marginBottom: 0, marginTop: '5px' };

const hudOverlay = {
  position: 'fixed',
  inset: 0,
  zIndex: 10,
  pointerEvents: 'none',
  padding: '40px'
};

const topInfo = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#fff',
  borderBottom: '1px solid rgba(255,255,255,0.1)',
  paddingBottom: '15px'
};

const statusGroup = { display: 'flex', alignItems: 'center', gap: '10px' };
const redDot = { width: '8px', height: '8px', background: '#f00', borderRadius: '50%', boxShadow: '0 0 10px #f00' };
const monoText = { fontSize: '11px', letterSpacing: '2px', opacity: 0.5 };
const centerLogo = { letterSpacing: '8px', fontWeight: '900', fontSize: '14px' };

const label = {
  position: 'absolute',
  bottom: '20px',
  left: '20px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  zIndex: 3,
  background: 'rgba(0,0,0,0.7)',
  padding: '5px 12px',
  backdropFilter: 'blur(5px)'
};

const colorTag = { width: '4px', height: '15px' };
const labelTitle = { color: '#fff', fontSize: '10px', fontWeight: 'bold' };

const scannerCenter = {
  position: 'fixed',
  left: '50%',
  width: '1px',
  height: '60%',
  background: 'rgba(0,242,255,0.3)',
  boxShadow: '0 0 20px rgba(0,242,255,0.5)',
  zIndex: 5,
  pointerEvents: 'none'
};

const vignette = {
  position: 'fixed',
  inset: 0,
  background: 'radial-gradient(circle, transparent 30%, #000 100%)',
  zIndex: 4,
  pointerEvents: 'none'
};

const cornerDecor = {
  position: 'absolute',
  bottom: '40px',
  right: '40px',
  width: '100px',
  height: '100px',
  borderRight: '1px solid rgba(255,255,255,0.2)',
  borderBottom: '1px solid rgba(255,255,255,0.2)'
};

export default Extra;