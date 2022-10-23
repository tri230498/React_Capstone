import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCart, deleteProductAction, getProductToCartAction } from "../../redux/reducer/productReducer";

export default function Carts() {
  const dispatch = useDispatch();
  const { productOrder } = useSelector((state) => state.productReducer.carts);
  
  useEffect(() => {
    renderCarts();
  },[productOrder]);
  // console.log(productOrder);
  const renderCarts = () => {
    return productOrder?.map((prod, index) => {
      return (
        <tr key={index} className="">
          <td className="text">{prod.id}</td>
          <td>
            <img src={prod.image} alt={prod.name} width={100} height={100} />
          </td>
          <td className="text"> {prod.name}</td>
          <td className="text">{prod.price}$</td>
          <td>
            <button
              className="btn btn-primary plus-minus p-2"
              onClick={() => {
                const action = getProductToCartAction(prod);
                dispatch(action);
                
              }}
            >
              +
            </button>

            <span className=" quantity shoes-img px-2 mx-1">
              {prod.quantityOrder}
            </span>
            <button
              className="btn btn-primary plus-minus p-2"
              onClick={() => {
                if(prod.quantityOrder > 1) {
                    dispatch(decreaseCart(prod))
                    
                }else if(prod.quantityOrder === 1) {
                    return 1;
                }
              }}
            >
              -
            </button>
          </td>
          <td className="text">{prod.price * `${prod.quantityOrder}`}$</td>
          <td className="action">
            <button className="btn btn-primary me-2 text">Edit</button>
            <button
              className="btn btn-danger text"
              onClick={() => {
                deleteProduct(prod.id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  const deleteProduct = (id) => {
    const action = deleteProductAction(id)
    dispatch(action)
  }

  return (
    <div className="container my-4">
      <h2>Carts</h2>
      <table className="table w-100">
        <thead>
          <tr>
            <th className="text">id</th>
            <th className="text">img</th>
            <th className="text">name</th>
            <th className="text">price</th>
            <th className="text px-3">quantity</th>
            <th className="text">total</th>
            <th className="text">action</th>
          </tr>
        </thead>
        <tbody>{renderCarts()}</tbody>
      </table>
    </div>
  );
}
