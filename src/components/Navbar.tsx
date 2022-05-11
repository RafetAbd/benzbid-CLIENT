import * as React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/auth";
import { useAppDispatch, useAppSelector, RootState } from "../store";
// import { useDispatch } from "react-redux";


const Navbar: React.FC = () => {

    const isLoggedIn = useAppSelector((state: RootState) => {
        return !!state.authReducer.auth.id
    })

    const dispatch = useAppDispatch();

    const handleLogout = async() => {
        await dispatch(logout());
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-red-500">Navbar component</h1>
            {
                isLoggedIn ? (
                    <div>
                        <Link to="/">Home</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                )
            }
        </div>
    )
}

export default Navbar