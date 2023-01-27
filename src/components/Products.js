//import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES } from '../store/productSlice';

import "../index.css";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";

const Products = () => {
  //const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await Axios.get("https://fakestoreapi.com/products");

    //   setProducts(res.data);
    // };
    // fetchProducts();
  }, []);

  const handleAdd = async (product) => {
    dispatch(add(product));
  };

  if(status === STATUSES.LOADING){
    return <h1>LOADING......</h1>
  }

  return (
    <div className="productsWrapper">
      {products.map((product, i) => (
        <div className="card" key={i}>
          <img className="prod-img" alt="" src={product.image} />
          <h4>{product.title}</h4>
          <h5>$ {product.price}</h5>
          <button className="btn" onClick={() => handleAdd(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
