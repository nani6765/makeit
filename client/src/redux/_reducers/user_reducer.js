import { SET_USER, CLEAR_USER, SET_PHOTO_URL } from "../_actions/types.js";
const initialUserState = {
  userData: null,
  isLoading: true,
};

export default function (state = initialUserState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        userData: action.payload,
        isLoading: false,
      };
    case CLEAR_USER:
      return {
        ...state,
        userData: null,
        isLoading: false,
      };
    case SET_PHOTO_URL:
      return {
        ...state,
        userData: { ...state.userData, photoURL: action.payload },
        isLoading: false,
      };

    default:
      return state;
  }
}
