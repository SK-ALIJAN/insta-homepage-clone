import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { loginSchema } from "./schemas";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../Redux/actionType";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const Login = ({ changeMoveTo }) => {
  const dispatch = useDispatch();
  const signupData = useSelector((store) => store.authReducer.data);
  const navigate = useNavigate();
  let [error, setError] = useState(false);

  let { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        action.resetForm();

        if (
          values.email === signupData.email &&
          values.password === signupData.password
        ) {
          dispatch({ type: userLogin });
          values.isAuth=true;
          localStorage.setItem("loggin", JSON.stringify(values));
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 2000);
        }
      },
    });

  return (
    <DIV>
      <h1>Sign in</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.email && touched.email ? <p>{errors.email}</p> : ""}
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.password && touched.password ? <p>{errors.password}</p> : ""}
        </div>
        <button type="submit" className="submit">
          Login
        </button>
      </form>
      <p className="change">
        New user ?
        <button
          onClick={() => {
            changeMoveTo("signup");
          }}
        >
          Signup
        </button>
      </p>

      {error ? <p className="wrong">Wrong Credencial!</p> : ""}
    </DIV>
  );
};

export default Login;

let DIV = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 11px;
  width: 50%;
  text-align: center;
  background-color: #0a0a0a80;
  color: white;
  padding: 10px;
  padding-bottom: 20px;

  div {
    width: 90%;
    margin: auto;
    margin-top: 10px;
    input {
      width: 100%;
      height: 3rem;
      border: 0;
      padding-left: 10px;
      border-radius: 8px;
    }
    p {
      text-align: left;
      margin-top: 5px;
    }
  }

  .submit {
    padding: 10px 20px;
    border-radius: 7px;
    border: 0;
    width: 40%;
    background-color: teal;
    color: white;
    margin-top: 20px;
    cursor: pointer;
  }

  .change {
    text-align: right;
    margin-top: 20px;
    button {
      padding: 5px 10px;
      border-radius: 7px;
      border: 0;
      width: max-content;
      background-color: white;
      margin-left: 15px;
      cursor: pointer;
    }
  }

  .wrong {
    position: absolute;
    top: -60px;
    left: 50%;
    transform: translate(-50%);
    background-color: red;
    padding: 10px;
    border-radius: 7px;
    font-size: 15px;
  }
`;