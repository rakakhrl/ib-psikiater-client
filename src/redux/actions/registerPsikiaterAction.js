import API from "../../API/mainServer";



const userRegister =(first_name,last_name,password,email,date_of_birth,gender,experience_year,region)=> async(dispatch)=>{
    try {
        const userRegister = await API({
            method: "POST",
            url:"/auth/register-psikiater",
            data:{
                first_name: first_name,
                last_name: last_name,
                password: password,
                email: email,
                date_of_birth,
                gender: gender,
                experience_year: experience_year,
                region: region,
            }
        });

    } catch (error) {
        console.log("Gagal Register");
    }
};

const userAction = {
    userRegister,

};

export default userAction;