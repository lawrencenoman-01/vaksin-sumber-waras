import { produce } from 'immer';
import { FETCH_VAKSIN_BY_ID_REQUEST, FETCH_VAKSIN_BY_ID_SUCCESS, FETCH_VAKSIN_BY_ID_FAILURE ,UPDATE_VAKSIN_STATUS_REQUEST,
    UPDATE_VAKSIN_STATUS_SUCCESS,
    UPDATE_VAKSIN_STATUS_FAILURE } from './constants';

const initialState = {
  vaksin: {},
  loading: false,
  error: null,
};

export const storedKey = ['vaksin'];

const detailReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_VAKSIN_BY_ID_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      case FETCH_VAKSIN_BY_ID_SUCCESS:
        console.log(action, 'Hasil Action');
        draft.loading = false;
        draft.vaksin = action.payload;
        break;
      case FETCH_VAKSIN_BY_ID_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        draft.vaksin = {};
        break;
      case UPDATE_VAKSIN_STATUS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
        case UPDATE_VAKSIN_STATUS_SUCCESS:
            const updatedVaksin = state.vaksin.map((vaksin) => {
              if (vaksin.id === action.id) {
                return { ...vaksin, status: action.updatedStatus.status };
              }
              return vaksin;
            });
            return { ...state, vaksin: updatedVaksin };
      case UPDATE_VAKSIN_STATUS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        break;
    }
  });

export default detailReducer;
