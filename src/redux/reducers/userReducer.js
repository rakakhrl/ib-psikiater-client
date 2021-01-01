const initialState ={
    user_id: "",
    role: "",
};

const userReducer = (state=initialState,action)=>{
    switch (action.type) {
        case "LOGIN":
            return{
                ...state,
                user_id: action.payload.user_id,
                role: action.payload.role,
            }

        case "LOGOUT":
                return initialState;
    
        default:
            return state;
    }
};

export default userReducer;
