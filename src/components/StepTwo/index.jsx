import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classes from './style.module.scss'

const StepTwo = ({ onChange, valueInput, handleNext, handleBack, errorFullName, errorAddress, errorPhoneNumber}) => {
    const { fullName, address, phoneNumber } = valueInput;

    return (
        <div className={classes.container}>
            <div className={classes.title}><FormattedMessage id='app_steptwo_title' /></div>
            <div className={classes.inputWrapper}>
                <label htmlFor=""><span>*</span> <FormattedMessage id='app_steptwo_fullname'/>
                {errorFullName && <div className={classes.error}>{errorFullName}</div>}
                </label>
                <input 
                    className={classes.input} 
                    type="text" 
                    name='fullName'
                    placeholder='Input your name'
                    onChange={onChange}
                    value={fullName}

                />
            </div>
            <div className={classes.inputWrapper}>
                <label htmlFor=""><span>*</span> <FormattedMessage id='app_steptwo_address'/>
                {errorAddress && <div className={classes.error}>{errorAddress}</div>}
                </label>
                <input 
                    className={classes.input} 
                    type="text" 
                    name='address'
                    placeholder='Input your address'
                    onChange={onChange}
                    value={address}
                />
            </div>
            <div className={classes.inputWrapper}>
                <label htmlFor=""><span>*</span> <FormattedMessage id='app_steptwo_phone'/>
                {errorPhoneNumber && <div className={classes.error}>{errorPhoneNumber}</div>}
                </label>
                <input 
                    className={classes.input} 
                    type="text" 
                    name='phoneNumber'
                    placeholder='Input your phone'
                    onChange={onChange}
                    value={phoneNumber}
                />
            </div>
            <div className={classes.buttonWrapper}>
                <button className={classes.goBack} onClick={handleBack}>Go Back</button>
                <button className={classes.button} onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

StepTwo.propTypes = {
    onChange: PropTypes.func,
    valueInput: PropTypes.object,
    handleNext: PropTypes.func,
    handleBack: PropTypes.func
}

export default StepTwo;