const initialState = {
  isLoading: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_LOADING":
      return {
        ...state,
        isLoading: action.payload.loadingState,
      };
    default:
      return state;
  }
};

export default appReducer;
