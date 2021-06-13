import { getCookie, removeCookie, setCookie } from "../../utils/cookies";
import * as type from "../action_types/action_type_store";

// blm jalan
let initialState;
if (typeof localStorage !== "undefined") {
  const authCookie = getCookie("store");
  if (authCookie) {
    initialState = JSON.parse(decodeURIComponent(authCookie));
  } else {
    initialState = {
      is_auth: false,
      detail_user: {},
      location: [],
      location_primary: null,
    };
  }
} else {
  initialState = {
    is_auth: false,
    detail_user: {},
    location: [],
    location_primary: null,
  };
}
const user = (state = initialState, action) => {
  let py = action.payload;
  let authObj;

  switch (action.type) {
    case type.LOGIN_USER:
      authObj = {
        ...state,
        detail_user: py.user,
        location: py.location,
      };
      setCookie("auth", authObj);
      return authObj;

    case type.LOGIN_SUCCESS:
      authObj = {
        ...state,
        is_auth: py,
      };
      setCookie("auth", authObj);
      return authObj;
    case type.LOGIN_FAILED:
      return { ...state };

    case type.LOGOUT_USER:
      removeCookie("auth");
      return {
        ...state,
        detail_user: {},
      };
    case type.LOGOUT_SUCCESS:
      removeCookie("auth");
      return {
        ...state,
        is_auth: false,
      };
    case type.LOGOUT_FAILED:
      return state;

    case type.SET_PRIMARY_LOCATION:
      authObj = {
        ...state,
        location_primary: py,
      };
      setCookie("auth", authObj);
      return authObj;
    case type.APPEND_LOCATION:
      authObj = {
        ...state,
        location: state.location.append(py),
      };
      setCookie("auth", authObj);
      return authObj;
    case type.DELETE_LOCATION:
      authObj = {
        ...state,
        location: state.location.filter((target) => target.id !== py),
      };
      setCookie("auth", authObj);
      return authObj;

    default:
      return state;
  }
};

export default user;