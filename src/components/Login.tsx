import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { authenticate, clearError } from "../store/auth";
import { useAppDispatch, useAppSelector, RootState } from "../store";

const Login: React.FC = () => {

    const dispatch = useAppDispatch();
    const isAuthenticated = useAppSelector((state: RootState) => state.authReducer.auth.email);
    const err = useAppSelector((state: RootState) => state.authReducer.error.error);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please fill in all fields");
            return;
        }
        await dispatch(authenticate(email, password, "login"));
    }

    const clearErr = async() => {
        console.log("clearing error");
        await dispatch(clearError());
    }

    return (
        
         <div className="container">
            <h1>Login</h1>
            {error && <p className="error">{error}</p>}
            {err && <p className="error">{err.response.data.message}</p>}
            {isAuthenticated && <p>You are logged in!</p>}
            <form onSubmit={handleSubmit}>
                 <label>Email</label>
                 <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                 <label>Password</label>
                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                 <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/signup" onClick={() =>clearErr()}>Sign up</Link></p>
         </div>
    )
}

export default connect()(Login);
