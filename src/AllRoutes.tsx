import React from "react";
import { Routes ,Route } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from "./store";
import Home from "./components/Home";
import Auth from "./components/Auth";

const AllRoutes: React.FC = () => {

    const isLoggedIn = useAppSelector((state) => {
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
                    <Route path="/login" caseSensitive={false} element={<Auth />} />
                    <Route path="/signup" caseSensitive={false} element={<Auth />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            )    
            }
        </div>
    )
}

export default AllRoutes;
