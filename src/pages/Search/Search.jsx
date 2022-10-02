import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { getProduct } from "../../redux/reducer/productReducer";

export default function Search() {
  // ========================== khởi tạo biến ===================== //

  const { arrProduct } = useSelector((state) => state.productReducer);
  const timeoutRef = useRef({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  let keySearchRef = useRef("");

  // ========================== Hàm ===================== //

  const handleChange = (e) => {
    keySearchRef.current = e.target.value;
    timeoutRef.current = setTimeout(() => {
      setSearchParams({ keysearch: keySearchRef.current });
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const getProductByKey = async () => {
    let keyword = searchParams.get("keysearch");
    if (!keyword) {
      const action = getProduct(arrProduct);
      dispatch(action);
    }
    try {
      let result = await axios({
        url: "https://shop.cyberlearn.vn/api/Product?keyword=" + keyword,
        method: "GET",
      });
      //   console.log(result.data.content);
      const action = getProduct(result.data.content);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };

  const renderSearchProduct = () => {
    return arrProduct?.map((prod, index) => {
      return (
        <div className="col-4 mt-5" key={index}>
          <div className="card">
            <img src={prod.image} alt={prod.name} />
            <div className="card-body">
              <h3>{prod.name}</h3>
              <p>d{prod.shortDescription}</p>
            </div>
            <div className="p-2 col-button d-flex">
              <button
                className="btn-buy"
                onClick={() => {
                  navigate(`/detail/${prod.id}`);
                }}
              >
                Buy now
              </button>
              <button className="btn-price w-50 ">{prod.price}$</button>
            </div>
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    getProductByKey();
  }, [keySearchRef.current]);

  // ========================== HTML ===================== //
  return (
    <section id="Search">
      <div className="container mt-5">
        <p>Search</p>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Product name ...."
            onChange={handleChange}
          />
          <button className="ms-5">Search</button>
        </form>
        <div className="mt-5">
          <h2>Search result</h2>
          <div>
            <p>Price</p>
            <div className="col-3 d-flex justify-content-between">
              Decrease
              <div className="icon pe-3">
                <i className="fa-solid fa-angle-down"></i>
              </div>
            </div>
            <div className="col-3  mt-3">Ascending</div>
          </div>
          <div className="row mt-5">{renderSearchProduct()}</div>
        </div>
      </div>
    </section>
  );
}
