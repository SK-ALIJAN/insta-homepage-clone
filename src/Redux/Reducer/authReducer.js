import {
  LoginError,
  LoginRequest,
  LoginSuccess,
  SignupError,
  SignupRequest,
  SignupSuccess,
} from "../actionType";

let InitialSignupValue = {
  isLoading: false,
  data: {},
  isError: false,
  ErrorMessage: "",
};

let SignupReducer = (state = InitialSignupValue, { type, payload }) => {
  switch (type) {
    case SignupRequest:
      return { ...state, isLoading: true };

    case SignupSuccess:
      return {
        ...state,
        isLoading: false,
        data: payload,
        isError: false,
        ErrorMessage: "",
      };

    case SignupError:
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: {},
        ErrorMessage: payload,
      };
    default:
      return state;
  }
};

let InitialSignINValue = {
  isLoading: false,
  isAuth: false,
  data: {},
  isError: false,
  ErrorMessage: "",
};

let SignINReducer = (state = InitialSignINValue, { type, payload }) => {
  switch (type) {
    case LoginRequest:
      return { ...state, isLoading: true };

    case LoginSuccess:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        data: payload,
        isError: false,
        ErrorMessage: "",
      };

    case LoginError:
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: {},
        ErrorMessage: payload,
      };
    default:
      return state;
  }
};

export {SignINReducer,SignupReducer};