import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { addRegisterRequest, setRegister } from './actions';
import { getAllUser } from './actions';

import classes from './style.module.scss';

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: '',
    role: 'user',
    email: '',
    password: '',
  })

  // Handle Error
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: ''
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

  const handleRegister = () => {
    if (validateFormInput()) {
      dispatch(setRegister(formData))
    }
  }

  const validateFormInput = () => {
    let valid = true
    const newErrors = { ...errors }

    if (formData.fullName.trim() === '') {
      newErrors.fullName = '*Fullname is Required'
      valid = false
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = '*Invalid Email Address'
      valid = false
    }

    if (formData.password.trim() === '') {
      newErrors.password = '*Password is Required'
      valid = false
    } else if (formData.password.length < 6) {
      newErrors.password = '*Password must be at least 6 characters long';
      valid = false;
    }

    setErrors(newErrors)
    return valid
  }

  return (
    <div className={classes.register}>
      <div className={classes.register__container}>
        <div className={classes.register__container__left}>
          <div className={classes.img}></div>
        </div>
        <div className={classes.register__container__right}>
          <div className={classes.signup}>
            <FormattedMessage id="app_signup" />
          </div>
          <div className={classes.form}>
            <div className={classes.form__fullname}>
              <div className={classes.text}>
                <FormattedMessage id="app_signup_name" />
              </div>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Your Complete Name"
                value={formData.fullName}
                onChange={handleInputChange}
              />
              <div className={classes.error}> {errors.fullName} </div>
              {/* <TextField className={classes.input} id="name-form" variant="outlined" /> */}
            </div>
            <div className={classes.form__email}>
              <div className={classes.text}>
                <FormattedMessage id="app_signup_email" />
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
                <FormattedMessage id="app_signup_password" />
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
            <button className={classes.button} onClick={handleRegister}>
              Continue
            </button>
            <p> Already Registered? Click <a href='/login'> Here </a> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
