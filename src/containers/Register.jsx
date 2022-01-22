import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import Logo from '../components/shared/Logo'
import CheckBox from '../components/shared/CheckBox'
import Button from '../components/shared/Button'

import { eye, eyeOff, facebook, twitter, mail, github } from '../assets/icons'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleToggleShow = () => setShowPassword(!showPassword)
  const handleSubmit = (data) => console.log(data)

  const initialValues = {
    username: '',
    email: '',
    password: '',
  }

  const validate = Yup.object({
    username: Yup.string().required('The Username field is required'),

    email: Yup.string().required('The Email field is required'),

    password: Yup.string().required('The Password field is required'),
  })

  return (
    <div className="register grid grid-col-1 grid-col-lg-3 ">
      <div className="register-image">
        <Logo />
        <div className="image-wrapper">
          <img src="/images/register.svg" alt="register" />
        </div>
      </div>
      <div className="register-content">
        <div className="content-wrapper">
          <h2 className="form-title">Adventure starts here 🚀</h2>
          <p className="form-text">Make your app management easy and fun!</p>
          <Formik
            initialValues={initialValues}
            validationSchema={validate}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="form">
                <div className="form-control">
                  <label htmlFor="username">Username</label>
                  <Field
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Username"
                  />
                  <ErrorMessage component="small" name="username" />
                </div>

                <div className="form-control">
                  <label htmlFor="email">Email</label>
                  <Field id="email" name="email" type="email" placeholder="Email" />
                  <ErrorMessage component="small" name="email" />
                </div>

                <div className="form-control">
                  <div className="label-wrapper">
                    <label htmlFor="password">Password</label>
                    <Link to="#">
                      <span>Forgot Password?</span>
                    </Link>
                  </div>

                  <div className="input-wrapper">
                    <Field
                      id="password"
                      name="password"
                      placeholder="Password"
                      type={showPassword ? 'text' : 'password'}
                    />
                    <div className="eye-icon" onClick={handleToggleShow}>
                      {showPassword ? eyeOff : eye}
                    </div>
                  </div>

                  <ErrorMessage component="small" name="password" />
                </div>

                <div className="custom-checkbox">
                  <CheckBox label="I agree to privacy policy & terms" />
                </div>

                <div className="form-submit">
                  <Button bold btnBlock type="submit" size="small">
                    Sign in
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
          <p>
            <span>Already have an account?</span>
            <Link to="/login">
              <span>Sign in instead</span>
            </Link>
          </p>
          <div className="auth-divider">
            <div className="divider-text">or</div>
          </div>
          <div className="auth-footer-btn">
            <button className="bg-blue" type="button">
              {facebook}
            </button>
            <button className="bg-red" type="button">
              {twitter}
            </button>
            <button className="bg-skyblue" type="button">
              {mail}
            </button>
            <button className="bg-black" type="button">
              {github}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
