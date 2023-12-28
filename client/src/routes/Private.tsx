// import React from "react";
import { Route, Navigate, useLocation, Outlet } from "react-router-dom";
// import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";

const PrivateRoute: React.FC = () => {
  const user = useAuth();
  console.log({ user });
  if (!user?.token) {
    return <Navigate to="/signin" />;
  }

  return <Outlet />;
};

// const PrivateRoute = ({ element, ...rest }: any) => {
//   const user = useAuth();
//   const location = useLocation();

//   if (!user) {
//     // If the user is not authenticated, redirect to the login page
//     return (
//       <Navigate
//         to={`/signin?redirect=${encodeURIComponent(location.pathname)}`}
//       />
//     );
//   }

//   // If the user is authenticated, render the provided element
//   return <Route {...rest} element={element} />;
// };

export default PrivateRoute;
