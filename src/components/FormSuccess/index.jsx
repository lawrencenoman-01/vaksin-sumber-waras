import PropTypes from 'prop-types'
import classes from './style.module.scss'
import { FormattedMessage } from 'react-intl';

const FormSuccess = ({ step, onClick }) => {
    return (
        <div className={classes.container}>
            <div className={classes.success}><FormattedMessage id='app_form_success_title' /></div>
            <div className={classes.desc}><FormattedMessage id='app_form_success_desc' /></div>
            <div className={classes.buttonWrapper}>
                <button className={classes.button} onClick={onClick}>Home</button>
            </div>
        </div>
    )
}

FormSuccess.propTypes = {
    step: PropTypes.number,
    onClick: PropTypes.func
};

export default FormSuccess