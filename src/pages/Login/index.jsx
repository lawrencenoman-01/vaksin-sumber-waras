import React, { useState } from 'react';
import classes from './style.module.scss';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { loginUser } from './actions';

const Login = () => {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  // Handle Error
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData, [name]: value,
    })

    setErrors({
      ...errors,
      [name]: '',
    })
  }

  const handleLogin = () => {
    if (validateFormInput()) {
      dispatch(loginUser(formData))
    }
  }

  const validateFormInput = () => {
    let valid = true
    const newErrors = { ...errors }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = '*Invalid Email Address'
      valid = false
    }

    if (formData.password.trim() === '') {
      newErrors.password = '*Password is Required'
      valid = false
    }

    setErrors(newErrors)
    return valid
  }


  return (
    <div className={classes.login}>
      <div className={classes.login__container}>
        <div className={classes.login__container__left}>
          <div className={classes.img}></div>
        </div>
        <div className={classes.login__container__right}>
          <div className={classes.signin}>
            <FormattedMessage id="app_login" />
          </div>
          <div className={classes.form}>
            <div className={classes.form__email}>
              <div className={classes.text}>
                <FormattedMessage id="app_login_email" />
              </div>
              <input 
                type="text" 
                id="email" 
                name="email" 
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleInputChange}
              />
              <div className={classes.error}> {errors.email} </div>
            </div>
            <div className={classes.form__password}>
              <div className={classes.text}>
                <FormattedMessage id="app_login_password" />
              </div>
              <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="Your Password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <div className={classes.error}> {errors.password} </div>
            </div>
            <button className={classes.button} onClick={handleLogin}>
              Continue
            </button>
            <p> Don't have an account? Click <a href='/register'> Here </a> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
