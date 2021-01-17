// import React from "react";
// import { Redirect, Route } from "react-router-dom";
// import { useSelector } from "react-redux";

// const PrivateRoutePasien = (props) => {
//   const user = useSelector((state) => state.user);
//   console.log(user)
//   return (
//     <Route {...props}>
//       {user.isLogin && user.role === "PATIENT" ? (
//         props.children
//       ) : (
//         <Redirect to={{ pathname: "/" }} />
//       )}
//     </Route>
//   );
// };

// export default PrivateRoutePasien;
