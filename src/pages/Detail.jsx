import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import ProdcutCard from '../components/ProdcutCard';

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const getSingleProduct = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(data);
  };
  const getProductsByCat = async () => {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/category/${product?.category}`
    );
    if (data) {
      const filterData = data?.filter((d) => d.id !== product.id);
      setProducts(filterData);
    }
  };
  useEffect(() => {
    getSingleProduct();
    getProductsByCat();
  }, [product]);
  return (
    <div>
      <div className="my-20 flex gap-20">
        <img
          src={product?.image}
          className="w-[300px] p-4 shadow-xl rounded"
          alt=""
        />
        <div className="flex flex-col gap-5 px-5 md:px-0">
          <h1 className="text-heading text-xl font-semibold w-1/2">
            {product?.title}
          </h1>
          <div className="flex items-center">
            <AiFillStar className="text-danger text-xl" />
            <span className="text-secondary text-xs">
              ({product?.rating?.rate})
            </span>
          </div>
          <h4 className="text-heading">Details</h4>
          <p className="text-secondary text-sm tracking-wider w-1/2">
            {product?.description}
          </p>
          <p className="text-xl font-semibold text-danger">${product?.price}</p>
          <div className="flex">
            <p className="mr-10 text-heading">Quantity</p>
            <div className="flex items-center gap-2">
              <button className="text-danger border-2 px-2 rounded-full hover:text-primary hover:bg-danger">
                -
              </button>
              <p className="text-secondary text-xl">0</p>
              <button className="text-info border-2 px-2 rounded-full hover:text-primary hover:bg-info">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        {products?.map((product) => (
          <ProdcutCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Detail;
