import { produce } from "immer";
import { GET_BY_EMAIL, SET_LOGIN, SET_LOGOUT } from "./constants";

export const initialState = {
  isLogin: false,
  dataUser: null,
}

export const storedKey = ['dataUser']

const loginReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_BY_EMAIL:
        break;

      case SET_LOGIN:
        draft.isLogin = true,
          draft.dataUser = action.user
        break;

      case SET_LOGOUT:
        draft.isLogin = false
        break;
    }
  })

export default loginReducer