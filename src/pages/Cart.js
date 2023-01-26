import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.cart);
  const handleRemove = (productid) =>{
    dispatch(remove(productid))
  }
  return (
    <>
      <h2>Cart Page</h2>
      <div>
        {products.map((product) => (
          <div className="cartCard" key={product.id}>
            <div><img src={product.image} alt="" /></div>
            <div>{product.title}</div>
            <div>{product.price}</div>
            <div><button onClick={()=>handleRemove(product.id)} className="btn">Remove</button></div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Cart;
