// homeReducer.js
import { produce } from 'immer';
import { SET_ALL_VAKSIN , DELETE_VAKSIN_BY_ID } from './constants'; // Import the SET_ALL_VAKSIN constant

export const initialState = {
  vaksin: [], // Represents all the posts on the home page
};

export const storedKey = ['vaksin']

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_ALL_VAKSIN:
        console.log(action, '<<< VAKSIN')
        draft.vaksin = action.vaksin; // Handle the action to set all posts on the home page
        break;
      case DELETE_VAKSIN_BY_ID:
      draft.vaksin = draft.vaksin.filter((item) => item.id !== action.id);
      break;
      
      // Add other cases for home page-related actions if needed
    }
  });

export default homeReducer;
