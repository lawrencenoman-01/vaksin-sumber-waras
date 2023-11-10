import { produce } from 'immer';
import { RESET_FORM, SET_STEP, SET_USER_DATA } from './constants';

export const initialState = {
    step: 1,
    userData: {},
}

export const storedKey = ['step', 'userData']

const formReducer = (state = initialState, action) =>
    produce(state, (draft) => {
        switch(action.type) {
            case SET_STEP:
                draft.step = action.step
                break;
            case SET_USER_DATA:
                draft.userData = action.userData
                break;
            case RESET_FORM:
                return {
                    ...state,
                    step: 1,
                    userData: {
                        email: '',
                        fullName: '',
                        address: '',
                        phoneNumber: '',
                        dosis1: '',
                        dosis2: ''
                    }
                }
        }
    })

export default formReducer;
