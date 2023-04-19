import React, { useContext } from "react";

import {Routes,Route,Navigate} from "react-router-dom"
import { authRoutes, publicRoutes } from "../routes";
import { Context } from "../index";


function AppRouter() {

  const {user} = useContext(Context)
  console.log(user)
  return (

<Routes>
{user.isAuth===false && authRoutes.map(({path, Component},key) =>
 <Route key={key} path={path} element={<Component/>} exact/>
)}
 {publicRoutes.map(({path, Component},key) =>
 <Route key={key} path={path} element={<Component/>} exact/>
 )}
<Route
        path="*"
        element={<Navigate to="/shop" replace />}
    />
</Routes>

  ) 
  ;
}

export default AppRouter;
