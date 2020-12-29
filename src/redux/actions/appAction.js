const setLoading = (loadingState)=>(dispatch)=>{
    dispatch({
        type: "CHANGE_LOADING",
        payload: {
            loadingState: loadingState,
        },
    });
}

const appAction = {
    setLoading,
}

export default appAction;