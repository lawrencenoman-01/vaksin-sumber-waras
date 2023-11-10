import { produce } from "immer";
import { SET_REGISTER, ADD_REGISTER_REQUEST, GET_ALL_USER } from "./constants";

export const initialState = {
  register: [],
}

// export const storedKey = ['register']

const registerReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_REGISTER:
        // draft.register = action.register
        // draft.register.push(action.register.email);
        break;
    }
  })

export default registerReducer