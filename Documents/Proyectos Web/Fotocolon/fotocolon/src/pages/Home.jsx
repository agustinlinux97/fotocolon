import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';

import '../styles/Home.css';

const products = [
  { name: 'Impresora Canon', description: 'Impresora multifuncional.', price: 120, image: 'https://via.placeholder.com/150' },
  { name: 'Papel A4', description: 'Resma de papel A4 500 hojas.', price: 5, image: 'https://via.placeholder.com/150' },
  { name: 'Cartucho HP', description: 'Cartucho de tinta negra.', price: 30, image: 'https://via.placeholder.com/150' },
];

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      
      {/* Sección de Productos */}
      <section id="productos" className="section">
        <h2>Nuestros Productos</h2>
        <div className="products-grid">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>

      {/* Sección de Servicios */}
      <section id="servicios" className="section">
        <h2>Servicios</h2>
        <p>Ofrecemos fotocopias, impresiones, y más servicios de alta calidad.</p>
      </section>

      {/* Sección de Contacto */}
      <section id="contacto" className="section">
        <h2>Contacto</h2>
        <p>Email: contacto@fotocopiadoracolon.com</p>
        <p>Teléfono: +54 11 1234 5678</p>
      </section>
    </div>
  );
};

export default Home;
