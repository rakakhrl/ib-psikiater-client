const initialState = {
  psikiater_appointment: [],
};

const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PSIKIATER_APPOINTMENT":
      return {
        ...state,
        psikiater_appointment: action.payload.appointments,
      };
    default:
      return state;
  }
};

export default appointmentReducer;
