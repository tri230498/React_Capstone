import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductDetail, getProductToCartAction } from "../../redux/reducer/productReducer";

export default function Detail() {
  //==================== Biến =====================//
  const navigate = useNavigate();
  const { productDetail } = useSelector((state) => state.productReducer);
  const newDetail = { ...productDetail, quantityOrder: 1 };
  const [quantity, setQuantity] = useState(newDetail.quantityOrder);
  const newProductDetail = { ...newDetail, quantityOrder: quantity };
  const params = useParams();
  const dispatch = useDispatch();
  //===================== Hàm ====================//

  const getProductDetailApi = () => {
    let { id } = params;

    const action = getProductDetail(id);
    dispatch(action);
  };

  const renderSize = () => {
    return productDetail.size?.map((sz, index) => {
      return (
        <button className="btn me-2 rounded-0" key={index}>
          {sz}
        </button>
      );
    });
  };

  const renderRealateProduct = () => {
    return productDetail.relatedProducts?.map((prod, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card">
            <div className="img">
            <img src={prod.image} alt={prod.name}/>
            </div>
            <div className="card-body">
              <h3>{prod.name}</h3>
              <p>
                {prod.shortDescription.length > 20
                  ? prod.shortDescription.substr(0, 20) + "..."
                  : prod.shortDescription}
              </p>
            </div>
            <div className=" p-2 col-button d-flex">
              <button
                className="btn-buy w-50"
                onClick={() => {
                  navigate(`/detail/${prod.id}`);
                }}
              >
                Buy now
              </button>
              <button className="btn-price w-50">{prod.price}</button>
            </div>
          </div>
        </div>
      );
    });
  };

  const AddToCart = () => {
    const action = getProductToCartAction(newProductDetail);
    dispatch(action)
  };

  useEffect(() => {
    getProductDetailApi();
  }, [params.id]);

  //==================== HTML =====================//
  return (
    <div className="detail">
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <div className="img">
              <img src={productDetail.image} alt="" className="w-100" />
            </div>
          </div>
          <div className="col-8">
            <div className="product-info">
              <h3 className="product-name">{productDetail.name}</h3>
              <span>{productDetail.description}</span>
              <div className="size">
                <h5>Avaiable size</h5>
                {renderSize()}
              </div>
              <div className="price">{productDetail.price}$</div>
              <div className="amount d-flex">
                <button
                  className="increase"
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                >
                  +
                </button>
                <p> {quantity}</p>
                <button
                  className="decrease"
                  onClick={() => {
                    if (quantity === 1) {
                      return 1;
                    }
                    setQuantity(quantity - 1);
                  }}
                >
                  -
                </button>
              </div>
              <div className="add-cart">
                <button
                  className="btn rounded-0"
                  onClick={() => {
                    AddToCart();
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <section className="product">
          <h2 className="text-center">- Related Product -</h2>
          <div className="row">{renderRealateProduct()}</div>
        </section>
      </div>
    </div>
  );
}
