import PropTypes from 'prop-types';
import React, { useState } from 'react'
import classes from './style.module.scss'
import StepBar from '@components/StepBar'
import StepOne from '@components/StepOne'
import StepTwo from '@components/StepTwo'
import StepThree from '@components/StepThree'
import FormSuccess from '@components/FormSuccess';
import { connect, useDispatch } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectStep, selectUserData } from './selector';
import { resetForm, setStep, setUserData } from './actions';
import { useNavigate } from 'react-router-dom';

const Form = ({ step, userData }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [errorEmail, setErrorEmail] = useState('')
  const [errorFullName, setErrorFullName] = useState('')
  const [errorAddress, setErrorAddress] = useState('')
  const [errorPhoneNumber, setErrorPhoneNumber] = useState('')
  const [inputForm, setInputForm] = useState({
    email: '',
    fullName: '',
    address: '',
    phoneNumber: '',
    dosis1: '',
    dosis2: ''
  })

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }


  const handleInputChange = (e) => {
    const {name , value} = e.target;
    setInputForm({ ...inputForm, [name]: value});
    console.log(e.target.value);
  }

  console.log(inputForm)


  const handleNext = () => {
    const isNumber = /^\d+$/;

    if (step === 1) {
      if (!inputForm.email) {
        setErrorEmail('Email is required');
        return;
      }
      if (!validateEmail(inputForm.email)) {
        setErrorEmail('Invalid email format');
        return;
      }
      dispatch(setStep(step + 1), setErrorEmail(''))
    } else if (step === 2) {
      if (!inputForm.fullName) {
        setErrorFullName('Full Name is required');
      } else {
        setErrorFullName('')
      }

      if(!inputForm.address) {
        setErrorAddress('Address is required');
      } else {
        setErrorAddress('')
      }

      if(!inputForm.phoneNumber) {
        setErrorPhoneNumber('Phone Number is required');
        return
      } else if (!isNumber.test(inputForm.phoneNumber)) {
        setErrorPhoneNumber('Make sure you enter a number');
        return
      }
      dispatch(setStep(step + 1), setErrorFullName(''), setErrorAddress(''), setErrorPhoneNumber(''))
    } else if (step === 3) {
      dispatch(setStep(step + 1))
      dispatch(setUserData(inputForm))
    }
  }

  const handleBack = () => {
    dispatch(setStep(step - 1))
  }

  const handleBackHome = () => {
    dispatch(resetForm())
    navigate('/')
  }

  return (
    <div className={classes.container}>
      <div className={classes.formContainer}>
        <StepBar step={step} />
        {step === 1 && 
          <StepOne 
            handleNext={handleNext} 
            onChange={handleInputChange} 
            valueInput={inputForm.email}
            errorEmail={errorEmail}
          />
        }
        {step === 2 && 
          <StepTwo 
            handleNext={handleNext} 
            handleBack={handleBack} 
            onChange={handleInputChange}
            valueInput={{
              fullName: inputForm.fullName,
              address: inputForm.address,
              phoneNumber: inputForm.phoneNumber
            }}
            errorFullName={errorFullName}
            errorAddress={errorAddress}
            errorPhoneNumber={errorPhoneNumber}
          />
          }
        {step === 3 && 
          <StepThree 
            handleNext={handleNext} 
            handleBack={handleBack}
            onChange={handleInputChange}
            valueInput={{
              dosis1: inputForm.dosis1,
              dosis2: inputForm.dosis2
            }}
          />
        }
        {step === 4 && 
          <FormSuccess 
            handleBack={handleBack}
            onClick={handleBackHome}
          />
        }
      </div>
    </div>
  )
}

Form.propTypes = {
  step: PropTypes.number,
  userData: PropTypes.object,
}

const mapStateToProps = createStructuredSelector({
  step: selectStep,
  userData: selectUserData
})

export default connect(mapStateToProps)(Form);
