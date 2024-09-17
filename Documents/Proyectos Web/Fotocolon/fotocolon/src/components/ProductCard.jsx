import React from 'react';

const ProductCard = ({ name, description, price, image }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p><strong>${price}</strong></p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    marginBottom: '1rem',
  },
};

export default ProductCard;
