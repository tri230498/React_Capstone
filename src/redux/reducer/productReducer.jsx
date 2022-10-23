//rxslice
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getStoreJson, setStoreJson } from "../../utils/tool";
const initialState = {
  arrProduct: [],
  productDetail: {},
  carts: {
    productOrder: [],
  },
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getProduct: (state, action) => {
      const arrProduct = action.payload;
      state.arrProduct = arrProduct;
    },
    getProductAction: (state, action) => {
      // lấy dữ liệu từ payload
      const arrProduct = action.payload;
      state.arrProduct = arrProduct;
    },
    getProductDetailAction: (state, action) => {
      const arrProduct = action.payload;
      state.productDetail = arrProduct;
    },
    getProductToCartAction: (state, action) => {
      const itemIndex = state.carts.productOrder.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.carts.productOrder[itemIndex].quantityOrder += 1;
        setStoreJson("orderProduct", [...state.carts.productOrder]);
      } else {
        const carts = { ...action.payload };
        state.carts.productOrder.push(carts);
        setStoreJson("orderProduct", [...state.carts.productOrder]);
      }
    },
    decreaseCart: (state, action) => {
      console.log('carts giảm dần chạy')
      const itemIndex = state.carts.productOrder.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if(state.carts.productOrder[itemIndex].quantityOrder > 1) {
        state.carts.productOrder[itemIndex].quantityOrder -= 1;
        setStoreJson("orderProduct", [...state.carts.productOrder])
      }
    },
  },
});

export const {
  getProductAction,
  getProductDetailAction,
  getProduct,
  getProductToCartAction,
  decreaseCart
} = productReducer.actions;

export default productReducer.reducer;

// ================================================= //
export const getProductApi = async (dispatch) => {
  try {
    const result = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });

    // Sau khi lấy dữ liệu từ api => setState cho arrProduct
    // setArrProduct(result.data.content);

    const action = getProductAction(result.data.content);
    dispatch(action);
  } catch (err) {
    console.log(err);
  }
};

export const getProductDetail = (id) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
        method: "GET",
      });
      console.log(result.data.content);
      const action = getProductDetailAction(result.data.content);
      console.log(action);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};
