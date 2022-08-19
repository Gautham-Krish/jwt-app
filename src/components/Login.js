import React, { useState, useEffect } from "react";

import vali from "./vali";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ submit }) => {
  const [values, setValues] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(vali(values));
    setDataIsCorrect(true);

    axios
      .post("http://localhost:8080/authenticate", {
        username: values.username,
        password: values.password,
        role: "ROLE_ADMIN",
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          console.log(response.data.token);
          localStorage.setItem("accessToken", response.data.token);
          navigate(`/hello-world`);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="comt comt-login">
      <div className="app-wrapper">
        <div>
          <h2 className="title">login</h2>
        </div>
        <form className="form-wrapper">
          <div>
            <label className="label">Username</label>
            <input
              type="text"
              className="input"
              name="username"
              value={values.username}
              onChange={handleChange}
            />

            {errors.username && <p className="error">{errors.username}</p>}
          </div>

          <div>
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div>
            <button className="submit" onClick={handleFormSubmit}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
