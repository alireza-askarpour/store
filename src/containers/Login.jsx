import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import Logo from '../components/shared/Logo'
import CheckBox from '../components/shared/CheckBox'
import Button from '../components/shared/Button'

import { eye, eyeOff, facebook, twitter, mail, github } from '../assets/icons'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleToggleShow = () => setShowPassword(!showPassword)

  const initialValues = {
    email: 'johndoe@example.com',
    password: '^&q3%K*F5?$>',
  }

  const validate = Yup.object({
    email: Yup.string().required('The Email field is required'),

    password: Yup.string().required('The Password field is required'),
  })

  return (
    <div className="login grid grid-col-1 grid-col-lg-3 ">
      <div className="login-image">
        <Logo />
        <div className="image-wrapper">
          <img src="images/login.svg" alt="Login" />
        </div>
      </div>
      <div className="login-content">
        <div className="content-wrapper">
          <h2 className="form-title">Welcome to Arcilux! 👋</h2>
          <p className="form-text">
            Please sign-in to your account and start the adventure
          </p>
          <div className="content-alert">
            <p>
              <span>Admin:</span>
              admin@demo.com | admin
            </p>
            <p>
              <span>Client:</span>
              client@demo.com | client
            </p>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validate}
            onSubmit={(value) => console.log(value)}
          >
            {() => (
              <Form className="form">
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
                  <CheckBox label="Remember Me" />
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
            <span>New on our platform?</span>
            <Link to="/register">
              <span>Create an account</span>
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

export default Login
