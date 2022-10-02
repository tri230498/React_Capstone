import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getProductApi } from "../../redux/reducer/productReducer";
import setFavourite from "../../utils/index";

export default function Index() {
  // ========================== Khởi tạo biến ======================= //

  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(arrProduct);

  // ========================== Hàm xử lý ======================= //

  const getAllProductApi = () => {
    const actionThunk = getProductApi;
    dispatch(actionThunk);
  };
  // ======= renderProductCarousel ======= //
  const renderProductCarousel = () => {
    return arrProduct?.map((prod, index) => {
      return (
        <div
          key={index}
          className={`  carousel-item  ${prod.id === 1 ? "active" : ""}`}
        >
          <img src={prod.image} className="w-100%" alt="..." />
          <div className="item-info">
            <h3>{prod.name}</h3>
            <p>{prod.description}</p>
            <button
              className=""
              onClick={() => {
                navigate(`/detail/${prod.id}`);
              }}
            >
              Buy now
            </button>
          </div>
        </div>
      );
    });
  };
  // ======= renderProductFuture ======= //
  const renderProductFuture = () => {
    return arrProduct?.map((prod, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card">
            <img src={prod.image} alt="" className="w-100" />
            <i
              id={`iconFavourite` + index}
              className="fa-regular  fa-heart"
              style={{
                width: "40px",
                position: "absolute",
                right: 0,
                margin: "15px",
                cursor: "pointer",
                color: "red",
                fontSize: "30px",
              }}
              onClick={() => {
                setFavourite(index);
                // getProductsFavorite(prod.id);
              }}
            ></i>
            <div className="card-body">
              <h3 style={{ height: 55 }}>{prod.name}</h3>
              <p>
                {prod.shortDescription.length > 20
                  ? prod.shortDescription.substr(0, 20) + "..."
                  : prod.shortDescription}
              </p>
            </div>
            <div className="p-2 col-button d-flex">
              <NavLink
                className=" w-50 btn-buy text-center"
                to={`detail/${prod.id}`}
              >
                Buy now
              </NavLink>
              <button className=" w-50 btn-price">{prod.price}$</button>
            </div>
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    // Gọi api
    getAllProductApi();
  }, []);

  // ========================== HTML (return) ======================= //
  return (
    <div className="container-fluid">
      <section id="carousel">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div id="carousel" className="carousel-inner">
            <div>{renderProductCarousel()}</div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span>
              <i id="prev" className="fa-solid fa-caret-left"></i>
            </span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span>
              <i id="next" className="fa-solid fa-play"></i>
            </span>
          </button>
        </div>
      </section>
      {/* Product future */}
      <section id="product-future">
        <div className="container">
          <h2>Product Feature</h2>
          <div className="row">{renderProductFuture()}</div>
        </div>
      </section>
    </div>
  );
}
