import React from 'react'
import ForgetPass from '../Components/UserLogin/ForgetPass'
import HomeSignUp from "../Components/UserLogin/HomeSignUp"
import SignUp from "../Components/UserLogin/SignUp"
import Login from "../Components/UserLogin/Login"
import { Route, Routes} from "react-router-dom"
import TempHome from '../Components/UserLogin/TempHome'
import { Home } from '../Components/Pages/Home'
import { User } from '../Components/User'
import { UserDetails } from '../Components/UserDetails'
import { Explore } from '../Components/Pages/Explore'


function RouteItem() {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomeSignUp/>}/>
        <Route path="/account/password/reset" element={<ForgetPass/>} />
        <Route path='/accounts/signup/' element={<SignUp/>} />
        <Route path='/accounts/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/home/explore' element={<Explore/>} />
        <Route path=':id/' element={<UserDetails/>}>
        </Route>
        <Route path='users/*' element={<User/>} >    
        </Route>
    </Routes>
    </>
  )
}

export default RouteItem