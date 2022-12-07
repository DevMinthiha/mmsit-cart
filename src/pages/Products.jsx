import React, { useContext } from 'react';
import ProdcutCard from '../components/ProdcutCard';
import { Context } from '../context/ContextProvider';

const Products = () => {
  const { products, search, setSearch } = useContext(Context);

  return (
    <div className="flex flex-wrap gap-5 justify-center mt-20 relative">
      {products?.map((product) => (
        <ProdcutCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
