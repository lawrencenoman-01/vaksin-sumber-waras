import { call, put, takeLatest } from "redux-saga/effects";
import { GET_ALL_VAKSIN , DELETE_VAKSIN_BY_ID   } from "./constants"; // Update the action constant
import { fetchAllVaksin } from "@domain/api"; // Import the fetchAllVaksin function
import { setAllVaksin } from "./actions"; // Update the action to set all posts
import { deleteVaksinByID } from '@domain/api'; // Import your deleteVaksinByID API function

// Saga to delete a vaksin item by ID
export function* doDeleteVaksinByID(action) {
  try {
    yield call(deleteVaksinByID, action.id); // Call the deleteVaksinByID API function
    // You can dispatch an action to update the state or refresh the vaksin list after deletion if needed.
  } catch (error) {
    console.log(error, '<<< ERROR');
  }
}

export function* doGetAllVaksin() { // Update the generator function name
  try {
    const response = yield call(fetchAllVaksin); // Use fetchAllVaksin to get all posts

    yield put(setAllVaksin(response)); // Update the action to set all posts
  } catch (error) {
    console.log(error, "<<< ERROR");
  }
}

export default function* HomeSaga() { // Update the saga function name
    yield takeLatest(GET_ALL_VAKSIN , doGetAllVaksin); // Update the action constant and generator function name
    yield takeLatest(DELETE_VAKSIN_BY_ID, doDeleteVaksinByID); // Add this line to handle delete action by ID

}
