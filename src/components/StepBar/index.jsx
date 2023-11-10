import PropTypes from 'prop-types'
import classes from './style.module.scss'

const StepBar = ({ step }) => {
    return (
        <div className={classes.container}>
            <div className={`${classes.wrapper} ${step === 1 ? classes.active :''}`}>
                <div className={classes.number}>1</div>
            </div>
            <div className={`${classes.wrapper} ${step === 2 ? classes.active :''}`}>
                <div className={classes.number}>2</div>
            </div>
            <div className={`${classes.wrapper} ${step === 3 || step === 4 ? classes.active :''}`}>
                <div className={classes.number}>3</div>
            </div>
        </div>
    )
}

StepBar.propTypes = {
    step: PropTypes.number,
};

export default StepBar