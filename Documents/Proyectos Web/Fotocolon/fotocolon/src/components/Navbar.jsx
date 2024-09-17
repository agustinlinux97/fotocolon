import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h1>Fotocopiadora Colón</h1>
      <ul style={styles.navList}>
        <li><a href="#productos" style={styles.navLink}>Productos</a></li>
        <li><a href="#servicios" style={styles.navLink}>Servicios</a></li>
        <li><a href="#contacto" style={styles.navLink}>Contacto</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#282c34',
    color: 'white',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
  }
};

export default Navbar;
