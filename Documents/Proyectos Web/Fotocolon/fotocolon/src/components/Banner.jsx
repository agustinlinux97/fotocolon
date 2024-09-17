import React from 'react';
import bannerImage from '../assets/banner.jpg';

const Banner = () => {
  return (
    <div style={styles.banner}>
      <img src={bannerImage} alt="Banner Fotocopiadora Colón" style={styles.bannerImage} />
      <div style={styles.text}>
        <h2>Bienvenido a Fotocopiadora Colón</h2>
        <p>Servicios de calidad a precios accesibles</p>
      </div>
    </div>
  );
};

const styles = {
  banner: {
    position: 'relative',
    width: '100%',
    height: '400px',
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  text: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textAlign: 'center',
  }
};

export default Banner;
