import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classes from './style.module.scss';

const StepThree = ({ onChange, valueInput, handleNext, handleBack, errorDose1}) => {
    const { dosis1, dosis2 } = valueInput;
    return (
        <div className={classes.container}>
            <div className={classes.title}><FormattedMessage id='app_stepthree_title'/></div>
            <div className={classes.inputWrapper}>
                <label htmlFor=""><span>*</span> <FormattedMessage id='app_stepthree_dose1'/></label>
                <select
                    className={classes.input}
                    name='dosis1'
                    onChange={onChange}
                    defaultValue={dosis1 || 'Sinovac'}
                >
                    <option value='' selected disabled>Choose one</option>
                    <option value='Sinovac'>Sinovac</option>
                    <option value='Astra Zeneca'>Astra Zeneca</option>
                    <option value='Pfizer'>Pfizer</option>
                </select>
            </div>
            <div className={classes.inputWrapper}>
                <label htmlFor=""> <FormattedMessage id='app_stepthree_dose2'/></label>
                <select
                    className={classes.input}
                    name='dosis2'
                    onChange={onChange}
                    value={dosis2 || 'Sinovac'}
                >
                    <option value='' selected disabled>Choose one</option>
                    <option value='Sinovac'>Sinovac</option>
                    <option value='Astra Zeneca'>Astra Zeneca</option>
                    <option value='Pfizer'>Pfizer</option>
                </select>
            </div>
            <div className={classes.buttonWrapper}>
                <button className={classes.goBack} onClick={handleBack}>Go Back</button>
                <button className={classes.button} onClick={handleNext}>Confirm</button>
            </div>
        </div>
    );
};

StepThree.propTypes = {
    onChange: PropTypes.func,
    valueInput: PropTypes.object,
    handleNext: PropTypes.func,
    handleBack: PropTypes.func,
    errorDose1: PropTypes.string
};

export default StepThree;
