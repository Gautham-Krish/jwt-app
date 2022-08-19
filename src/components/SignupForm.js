import React, { useState, useEffect } from "react";
import Validation from "./Validation";
// import { useNavigate } from "react-router-dom";

import axios from "axios";

const SignupForm = ({ submitForm }) => {
  // let navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    setDataIsCorrect(true);

    axios
      .post("http://localhost:8080/register", {
        username: values.username,
        password: values.password,
        role: "ROLE_ADMIN",
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          submitForm(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="comt">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Create Account</h2>
        </div>
        <form className="form-wrapper">
          <div className="name">
            <label className="label">User Name</label>
            <input
              className="input"
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p className="error">{errors.username}</p>}
          </div>

          <div className="password">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div>
            <button className="submit" onClick={handleFormSubmit}>
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
