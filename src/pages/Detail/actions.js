import {
  FETCH_VAKSIN_BY_ID_REQUEST,
  FETCH_VAKSIN_BY_ID_SUCCESS,
  FETCH_VAKSIN_BY_ID_FAILURE,
  UPDATE_VAKSIN_STATUS_REQUEST,
  UPDATE_VAKSIN_STATUS_SUCCESS,
  UPDATE_VAKSIN_STATUS_FAILURE,
} from './constants'; // Import the new constants

export const fetchVaksinRequest = (vaksinId) => ({
  type: FETCH_VAKSIN_BY_ID_REQUEST,
  payload: vaksinId,
});

export const fetchVaksinSuccess = (vaksin) => ({
  type: FETCH_VAKSIN_BY_ID_SUCCESS,
  payload: vaksin,
});

export const fetchVaksinFailure = (error) => ({
  type: FETCH_VAKSIN_BY_ID_FAILURE,
  payload: error,
});

export const deleteVaksinByID = (id) => {
  return callAPI(`${urls.vaksin}/${id}`, 'DELETE');
};

export const updateVaksinStatusRequest = (id, updatedStatus) => {
    console.log(updatedStatus, '<<<<<<< ACTION')
    return {
        type: UPDATE_VAKSIN_STATUS_REQUEST,
        id,
        updatedStatus,
    }
}
// export const updateVaksinStatusRequest = (id, updatedStatus) => ({
//     type: UPDATE_VAKSIN_STATUS_REQUEST,
//     id,
//     updatedStatus,
//   });
  
  export const updateVaksinStatusSuccess = (id, updatedStatus) => ({
    type: UPDATE_VAKSIN_STATUS_SUCCESS,
    id,
    updatedStatus,
  });
  
  export const updateVaksinStatusFailure = (error) => ({
    type: UPDATE_VAKSIN_STATUS_FAILURE,
    error,
  });