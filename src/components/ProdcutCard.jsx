import React from 'react';
import { Link } from 'react-router-dom';

const ProdcutCard = ({ product }) => {
  return (
    <Link to={`/detail/${product.id}`}>
      <div className="w-40 p-3 rounded shadow-xl">
        <img src={product.image} alt="" className="w-32 h-32" />
      </div>
      <p className="text-sm font-semibold mt-3 text-secondary">${product.price}</p>
    </Link>
  );
};

export default ProdcutCard;
