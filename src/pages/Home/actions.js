import { GET_ALL_VAKSIN, SET_ALL_VAKSIN , DELETE_VAKSIN_BY_ID } from './constants'; // Import the new constants

// Action to get all posts
export const getAllVaksin = () => ({
    type: GET_ALL_VAKSIN,
  });
  
  // Action to set all posts
  export const setAllVaksin = (vaksin) => ({
    type: SET_ALL_VAKSIN,
    vaksin,
});

export const deleteVaksinByID = (id) => ({
  type: DELETE_VAKSIN_BY_ID,
  id,
});
  
  
