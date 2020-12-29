import React from "react";
import { Redirect, Route } from "react-router-dom";
import {useSelector} from "react-redux";

const PrivateRoutePsikiater = (props)=>{
    const user = useSelector(state=>state.user)
    console.log(user.role)
    return(
        <Route {...props}>
            {user.role === "PSIKIATER" ? props.children:<Redirect to={{pathname:"/"}}/>}
       </Route>
    )
       
    
};

export default PrivateRoutePsikiater;
