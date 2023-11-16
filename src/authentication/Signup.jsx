import React from "react";
import { useFormik } from "formik";
import { signupSchema } from "./schemas";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { SignupSuccess } from "../Redux/actionType";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const Signup = ({ changeMoveTo }) => {
  const dispatch = useDispatch();
  let { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        dispatch({ type: SignupSuccess, payload: values });
        action.resetForm();
        changeMoveTo("login")
      },
    });

  return (
    <WRAPPER>
      <h1>Sign up</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />

          {errors.name && touched.name ? <p>{errors.name}</p> : ""}
        </div>

        <div>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email ? <p>{errors.email}</p> : ""}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password ? <p>{errors.password}</p> : ""}
        </div>

        <button type="submit" className="submit">
          Submit
        </button>
      </form>

      <p className="change">
        Already Register ?
        <button
          onClick={() => {
            changeMoveTo("signin");
          }}
        >
          Signin
        </button>
      </p>
    </WRAPPER>
  );
};

export default Signup;

let WRAPPER = styled.div`
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

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;
