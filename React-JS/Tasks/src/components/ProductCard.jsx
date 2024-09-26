// import React from 'react';
// import './ProductCard.css'; 
// const ProductCard = ({ product }) => {
//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.title} className="product-image" />
//       <h3>{product.title}</h3>
//       <p className="product-price">${product.price}</p>
//       <p className="product-description">{product.description.substring(0, 100)}...</p>
//     </div>
//   );
// };

// export default ProductCard;


import React from 'react';

const ProductCard = ({ product }) => {
  // Log to check if the product prop is passed correctly
  console.log("Product Data:", product);

  // Safety check in case product is undefined
  if (!product) {
    return <div>No product data available.</div>;
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3>{product.title}</h3>
      <p className="product-price">${product.price}</p>
      <p className="product-description">
        {product.description.substring(0, 100)}...
      </p>
    </div>
  );
};

export default ProductCard;
