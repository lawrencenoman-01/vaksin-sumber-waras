import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import classes from './style.module.scss'

const StepOne = ({ onChange, valueInput, handleNext, errorEmail}) => {
    return (
        <div className={classes.container}>
            <div className={classes.title}><FormattedMessage id='app_stepone_title' /></div>
            <div className={classes.inputWrapper}>
                <label htmlFor=""><span>*</span> <FormattedMessage id='app_stepone_email'/>
                {errorEmail && <div className={classes.error}>{errorEmail}</div>}
                </label>
                <input 
                    className={classes.input} 
                    type="email" 
                    name='email'
                    placeholder='Input your email'
                    onChange={onChange}
                    value={valueInput}
                />
            </div>
            <div className={classes.buttonWrapper}>
                <button className={classes.button} onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

StepOne.propTypes = {
    onChange: PropTypes.func,
    valueInput: PropTypes.string,
    handleNext: PropTypes.func,
    errorEmail: PropTypes.string
}

export default StepOne;