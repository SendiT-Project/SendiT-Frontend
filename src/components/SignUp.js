import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .required("Username is required")
        .min(6, 'Username must be at least 6 characters')
        .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .max(40, 'Password must not exceed 40 characters')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[0-9]/, 'Password must contain at least one numeric digit')
        .matches(/[!@#$%^&*]/, 'Password must contain at least one special character')
        .matches(/^\S*$/, 'Password must not contain spaces')
        .notOneOf(['password', '123456', 'qwerty'], 'Avoid using common and easily guessable passwords')
       
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/, 'Password must include a mix of uppercase and lowercase letters, numbers, and special characters')
        .notOneOf([Yup.ref('username'), Yup.ref('email')], 'Password must not be similar to the username or email'),
        
    confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Term is required'),
});

const SignUp = () => {
    const navigate = useNavigate();

    const handleSubmit = (data, { resetForm }) => {
        axios.post('http://127.0.0.1:5000/signup', {
            username: data.username,
            email: data.email,
            password: data.password
        })
        .then(function (response) {
            console.log(response);
            alert('New user added successfully.');
            resetForm();
            navigate("/login");

        })
        .catch(function (error) {
            console.error(error);
            alert("An error occurred. Please try again.");
        });
    };

   //const handleLoginLinkClick = () => {
       
   // };

    return (
        <div className="container mx-auto p-20 flex items-center justify-center h-screen">
            <div className="max-w-md bg-color-secondary rounded overflow-hidden shadow-lg">
                <h1 className="text-2xl text-center py-4 font-bold text-black">Sign Up</h1>
                <Formik
                    initialValues={{
                        username: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                        acceptTerms: false,
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {(formikProps) => (
                        <Form className="p-6">
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                                    User Name
                                </label>
                                <Field name="username" type="text" className="form-input border border-gray-300 rounded" />
                                <ErrorMessage name="username" component="div" className="text-red-500 text-xs mt-1" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                    Email
                                </label>
                                <Field name="email" type="email" className="form-input border border-gray-300 rounded" />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                                    Password
                                </label>
                                <Field name="password" type="password" className="form-input border border-gray-300 rounded" />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
                                    Confirm Password
                                </label>
                                <Field name="confirmPassword" type="password" className="form-input border border-gray-300 rounded" />
                                <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs mt-1" />
                            </div>
                            <div className="mb-4">
                                <Field name="acceptTerms" type="checkbox" className="form-checkbox" />
                                <label htmlFor="acceptTerms" className="ml-2 text-sm">
                                    I have read and agree to the Terms
                                </label>
                                <ErrorMessage name="acceptTerms" component="div" className="text-red-500 text-xs mt-1" />
                            </div>
                            <button
                                type="submit"
                                    className="bg-color-tertiary hover:bg-rose-500 text-white px-3 py-1 rounded-full text-base cursor"
                            >
                            Sign Up
                            </button>
                           
                            <p className="mt-2 text-sm">
                                Already have an account?{' '}
                                <span
                                    className="text-color-tertiary cursor-pointer"
                                    //onClick={handleLoginLinkClick}
                                >
                                    Login
                                </span>
                            </p>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default SignUp;
