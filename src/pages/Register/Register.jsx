import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function Register() {
    const phoneRegex = RegExp(
        /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
      );
  const frm = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      phone: "",
      gender: "",
    },
    validationSchema: Yup.object().shape({
        email: Yup.string()
          .required("This field cannot be blank!")
          .email("Invalid email!"),
        password: Yup.string()
          .required("This field cannot be blank!")
          .min(3, "Password must be having 3-10 characters!")
          .max(10, "Password must be having 3-10 characters!"),
        passwordConfirm: Yup.string()
          .required("This field cannot be blank!")
          .oneOf([Yup.ref("password"), null], "Passwords must match!"),
        name: Yup.string().required("This field cannot be blank!"),
        phone: Yup.string()
          .required("This field cannot be blank!")
          .min(6, "Minimum 6 number!")
          .max(10, "Maximum 10 number!")
          .matches(phoneRegex, "Invalid phone number"),
        gender: Yup.string().required("Please select gender!"),
      }),
    onSubmit: (values) => {
        console.log(values);
    }
  });
  return (
    <div className="container">
      <h2 className="text-sm-start text-center">Register</h2>
      <hr />
      <form action="" className="row" onClick={frm.onSubmit}>
        <div className="col-sm-6">
          <div className="form-group">
            <label className="fw-semibold" htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              className="form-control"
              onChange={frm.handleChange}
            />
          </div>
          <div className="form-group">
            <label className="fw-semibold" htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              name="password"
              className="form-control"
              onChange={frm.handleChange}
            />
          </div>
          <div className="form-group">
            <label className="fw-semibold" htmlFor="passwordconFirm">Password confirm</label>
            <input
              type="text"
              id="passwordconFirm"
              name="passwordconFirm"
              className="form-control"
              onChange={frm.handleChange}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label className="fw-semibold" htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className="form-control"  onChange={frm.handleChange}/>
          </div>
          <div className="form-group">
            <label className="fw-semibold" htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="form-control"
              onChange={frm.handleChange}
            />
          </div>
          <div className="form-group row mt-3">
            <div className="col-2">
              <label className="fw-semibold" htmlFor="gender">Gender</label>
            </div>
            <div className="col-10">
              <div id="gender" className="d-flex">
                <div className="male d-flex flex-column">
                  <input
                    type="radio"
                    name="gender"
                    style={{ accentColor: "#6200EE", width: 40, height: 40 }}
                    value="true"
                    onChange={frm.handleChange}
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="female d-flex flex-column ms-4">
                  <input
                    type="radio"
                    name="gender"
                    style={{ accentColor: "#6200EE", width: 40, height: 40 }}
                    value="false"
                    onChange={frm.handleChange}
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn text-white text-uppercase px-3 rounded-pill mt-4" style={{backgroundColor: "#6200EE"}}>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
