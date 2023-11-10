import { RESET_FORM, SET_STEP, SET_USER_DATA } from "./constants";

export const setStep = (step) => ({
    type: SET_STEP,
    step,
});

export const setUserData = (userData) => ({
    type: SET_USER_DATA,
    userData,
})

export const resetForm = () => ({
    type: RESET_FORM,
})
