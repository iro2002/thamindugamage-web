import React from 'react';
import { motion } from 'framer-motion';

// 1. Move data outside the component to prevent re-calculations on every render
const IMAGES = Array.from({ length: 12 }, (_, i) => ({ // Reduced count for memory
  id: i,
  url: `https://picsum.photos/seed/${i + 900}/600/400`, // Lower res for better performance
  title: `VOL_0${i + 1}`,
  color: ['#00f2ff', '#7000ff', '#ff0055', '#39ff14'][i % 4],
  width: i % 3 === 0 ? 400 : 250 // Numbers instead of strings for easier math
}));

const DUPLICATED_IMAGES = [...IMAGES, ...IMAGES];

const Extra = () => {
  return (
    <div style={container}>
      

      <div style={reelContainer}>
        <motion.div 
          style={track}
          animate={{ x: [0, -2500] }} // Adjusted for shorter array
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {DUPLICATED_IMAGES.map((img, i) => (
            <div key={i} style={{...frame, minWidth: img.width}}>
              <div style={sprocket} />
              
              <div style={imageBox}>
                {/* Removed the heavy blur filter 'neonGlow' as it causes massive GPU lag */}
                <img 
                  src={img.url} 
                  alt="reel" 
                  style={imgStyle} 
                  loading="lazy" // Critical for memory
                />
                
                <div style={label}>
                  <div style={{...colorTag, backgroundColor: img.color}} />
                  <span style={labelTitle}>{img.title}</span>
                </div>
              </div>

              <div style={sprocket} />
            </div>
          ))}
        </motion.div>
      </div>

      <div style={vignette} />
    </div>
  );
};

// --- OPTIMIZED STYLES ---

const container = {
  backgroundColor: '#050505',
  height: '100vh',
  width: '100vw',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'monospace',
};

const reelContainer = {
  width: '100%',
  display: 'flex',
  perspective: '1000px', // Adds depth without cost
};

const track = {
  display: 'flex',
  gap: '20px',
  willChange: 'transform', // Tells the browser to use the GPU
};

const frame = {
  height: '320px', // Slightly smaller
  background: '#111',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  border: '1px solid #222',
};

const imageBox = {
  position: 'relative',
  flexGrow: 1,
  overflow: 'hidden',
  background: '#000',
};

const imgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  opacity: 0.8, // Faster to render than complex filters
};

const sprocket = {
  height: '12px',
  width: '100%',
  background: 'repeating-linear-gradient(90deg, #000 0, #000 10px, #333 10px, #333 20px)',
};

const hudOverlay = {
  position: 'fixed',
  top: 0, left: 0, right: 0,
  zIndex: 10,
  padding: '20px',
  pointerEvents: 'none'
};

const topInfo = {
  display: 'flex',
  justifyContent: 'space-between',
  color: '#fff',
  fontSize: '10px',
  letterSpacing: '1px',
  borderBottom: '1px solid rgba(255,255,255,0.1)',
  paddingBottom: '10px'
};

const redDotInline = {
  display: 'inline-block',
  width: '6px',
  height: '6px',
  background: '#f00',
  borderRadius: '50%',
  marginRight: '5px'
};

const monoText = { opacity: 0.6 };
const centerLogo = { fontWeight: 'bold' };

const label = {
  position: 'absolute',
  bottom: '10px',
  left: '10px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  background: 'rgba(0,0,0,0.8)',
  padding: '4px 8px',
};

const colorTag = { width: '2px', height: '10px' };
const labelTitle = { color: '#fff', fontSize: '9px' };

const vignette = {
  position: 'fixed',
  inset: 0,
  background: 'radial-gradient(circle, transparent 50%, #000 120%)',
  pointerEvents: 'none',
  zIndex: 5
};

export default Extra;