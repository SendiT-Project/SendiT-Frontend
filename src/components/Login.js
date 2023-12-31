import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function Login({setUser}) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (values) => {
    fetch("https://sendit-backend-lje2.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.ok) {
          enqueueSnackbar('Log in Successful', { variant: 'success' });
          return response.json();
        } else if (response.status === 400) {
          enqueueSnackbar('User already logged in', { variant: 'error' });
          return null;
        } else if (response.status === 401) {
          enqueueSnackbar('Invalid credentials', { variant: 'error' });
          return null;
        } else if (response.status === 404) {
          enqueueSnackbar('User not Registered', { variant: 'error' });
          return null;
        } else {
          throw new Error('Unexpected error');
        }
      })
      .then((data) => {
        if (data) {
          setUser(data);
          
          console.log(data);
          navigate((data && data.admin) ? '/adminOrders' : '/ordersform');
        }
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-color-secondary p-12 mt-0 border-solid border-2 flex items-center flex-col shadow-lg border-gray-300">
        <h2 className="text-2xl font-semibold mb-1">Login</h2>
        <div className="max-w-md mb-5 mt-4 p-6 bg-color-secondary rounded-md shadow-lg border-2 border-gray-300">
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
        <div className="mb-1 mt-3">
          <Link to="/signup" className="text-black">
            Don't have an account?{" "}
            <span className="text-color-tertiary font-bold"> Sign up here</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

// pushing this to feature/users again