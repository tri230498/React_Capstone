import axios from "axios";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FacebookLogin from "react-facebook-login";
import { setStore } from "../../utils/tool";
import { useDispatch, useSelector } from "react-redux";
import { loginApi, loginFbApi } from "../../redux/reducer/userReducer";
export default function Login() {
  const { messLogin } = useSelector((state) => state.userReducer);
const dispatch = useDispatch()
  const responseFacebook = (response) => {
    axios({
      url: "https://shop.cyberlearn.vn/api/Users/facebooklogin",
      method: "POST",
      data: {
        facebookToken: response.accessToken,
      },
    }).then((res) => {
      setStore("accessToken", res.data.content.accessToken);
    });
  };
  const frm = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Required!").email("Invalid email!"),
      password: Yup.string()
        .required("Required!")
        .min(3, "Password must be having 3-10 characters!")
        .max(10, "Password must be having 3-10 characters!"),
    }),
    onSubmit: (values) => {
      // dispatch(loginApi(values));
      // action.resetForm({ values: "" });
      dispatch(loginApi(values));
    },
  });

  return (
    <section id="Login" className="container">
      <form action="">
        <h2>Login</h2>
        <hr />
        {messLogin ? (
          <span className="text-danger" style={{ fontSize: 25 }}>
            {messLogin.massage}
          </span>
        ) : (
          ""
        )}
        <div className="form-group">
          <label htmlFor="email" className="mb-2 fw-semibold">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="form-control"
            onChange={frm.handleChange}
            onBlur={frm.handleBlur}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="my-2 fw-semibold">
            Password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            className="form-control"
            onChange={frm.handleChange}
            onBlur={frm.handleBlur}
          />
        </div>
      </form>

      <div className="mt-4 form-group">
        <FacebookLogin
        data-width = "100%"
          appId="666130454921844"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
        />
      </div>
    </section>
  );
}
