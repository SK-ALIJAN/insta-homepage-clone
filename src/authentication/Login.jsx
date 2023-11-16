import React, { useState } from "react";
import { useFormik } from "formik";
import { loginSchema } from "./schemas";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { authtication } from "../Redux/action";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const Login = ({ changeMoveTo }) => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [error, setError] = useState(false);
  let { data } = useSelector((store) => store.SignupReducer);
  let { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        if (data.email === values.email && data.password === values.password) {
          dispatch(authtication(values));
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          setError(true);
        }

        action.resetForm();
      },
    });

  let handleClick = () => {
    setError(false);
  };

  return (
    <WRAPPER>
      <DIV className="childWrapper">
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
            {errors.password && touched.password ? (
              <p>{errors.password}</p>
            ) : (
              ""
            )}
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
      </DIV>
      {error && (
        <div className="errorDisplay">
          <div>
            <p>Please check your Credencials</p>
            <button onClick={handleClick}>Okey</button>
          </div>
        </div>
      )}
    </WRAPPER>
  );
};

export default Login;

let DIV = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 11px;
  width: 40%;
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
    background-color: #5851db;
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
`;

let WRAPPER = styled.div`
  .errorDisplay {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #514e4e92;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: grid;
    place-content: center;

    div {
      background-color: white;
      padding: 2rem;
      border-radius: 8px;
      text-align: center;

      button {
        margin-top: 1rem;
        width: 100%;
        border: 0;
        padding: 10px;
        background-image: linear-gradient(
          45deg,
          #405de6,
          #5851db,
          #833ab4,
          #c13584,
          #e1306c,
          #fd1d1d,
          #f56040,
          #f77737,
          #fcaf45,
          #ffdc80
        );
        color: white;
        border-radius: 7px;
        cursor: pointer;
      }
    }
  }
  @media screen and (max-width: 800px) {
    .childWrapper {
      width: 80%;
    }
  }
`;
