import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const getProducts = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/`);
    setProductsList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setProducts(productsList);
    const filterData = productsList.filter((pd) =>
      pd.title.toLowerCase().includes(search.toLowerCase())
    );
    setProducts(filterData);
  }, [search, productsList]);

  const data = { products, search, setSearch };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default ContextProvider;
