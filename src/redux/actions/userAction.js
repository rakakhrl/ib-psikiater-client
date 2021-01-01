import API from "../../API/mainServer";
import appAction from "./appAction";
import swal from "sweetalert"


const userLogin =(email,password)=> async(dispatch)=>{
    try {
        const userLogin = await API({
            method: "POST",
            url:"/auth/login",
            data:{
                email: email,
                password: password,
            }
        });

        swal("Login Sukses!","","success");
        console.log(userLogin.data);
        localStorage.setItem("accessToken", userLogin.data.token);
        localStorage.setItem("role",userLogin.data.role)
        
        
        const getUserProfile = await API({
            method: "GET",
            url:"/auth/identifer",
            headers: {
                accessToken : userLogin.data.token,
            },
        });

        console.log(getUserProfile.data)

        // console.log(getUserProfile)
        dispatch({
            type: "LOGIN",
            payload: {
                user_id : getUserProfile.data.data.user_id,
                role : getUserProfile.data.data.role, 
            }
        })
    } catch (error) {
        swal("Login Gagal!", "Username/Password Salah!", "error");
        console.log("Login Gagal");
    }
};

const checkAccessToken = (accessToken)=> async(dispatch)=>{
    
    try {
        const getUserProfile = await API({
            method: "GET",
            url:"/auth/identifer",
            headers: {
                accessToken : accessToken,
            },
        });

        // console.log(getUserProfile)
        dispatch({
            type: "LOGIN",
            payload: {
                user_id : getUserProfile.data.data.user_id,
                role : getUserProfile.data.data.role, 
            }
        })
        dispatch(appAction.setLoading(false));
    } catch (error) {
       console.log(error); 
    }
}

const userLogout = () =>(dispatch)=>{
    localStorage.removeItem("accessToken")

    dispatch({
        type:"LOGOUT"
    })
}

const userAction = {
    userLogin,
    checkAccessToken,
    userLogout,
};

export default userAction;