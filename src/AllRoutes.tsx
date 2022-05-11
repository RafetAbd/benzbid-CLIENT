import React from "react";
import { Routes ,Route } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from "./store";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { RootState } from "./store";

const AllRoutes: React.FC = () => {

    const isLoggedIn = useAppSelector((state: RootState) => {
        return !!state.authReducer.id
    })

    return (
        <div>
            { isLoggedIn ? (
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            ) : (
                <Routes>
                    <Route path="/login" caseSensitive={false} element={<Login />} />
                    <Route path="/signup" caseSensitive={false} element={<Signup />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            )    
            }
        </div>
    )
}

export default AllRoutes;
