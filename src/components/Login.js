import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//comments
function Login() {
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (values) => {
    fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          alert("failed to login");
        }
        return response.json();
      })
      .then((data) => {
        alert("Login successful");
        navigate("/Orders");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-color-secondary rounded-md shadow-md border-2">
      <h2 className="text-2xl font-semibold mb-6">Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="login-form">
          <div className="mb-4">
            <label htmlFor="username" className="block text-black">
              Username
            </label>
            <Field
              type="text"
              id="username"
              name="username"
              className="w-full p-2 border rounded-md"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 mt-1"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-black">
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border rounded-md"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 mt-1"
            />
          </div>

          <div className="mb-4">
            <Link to="/signup" className="text-black">
              Don't have an account?{" "}
              <span className="text-color-tertiary font-bold">
                {" "}
                Sign up here
              </span>
            </Link>
          </div>

          <div>
            <button
              type="submit"
              className="bg-color-tertiary hover:bg-rose-500 text-white px-5 py-2 rounded-3xl text-base mb-4 lg:mb-0"
            >
              Login
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
