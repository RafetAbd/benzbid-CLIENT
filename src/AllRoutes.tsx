import React from "react";
import { Routes ,Route } from 'react-router-dom'
import Home from "./components/Home";

const AllRoutes: React.FC = () => {
    return (
        // <h1>Routes component</h1>
        <Routes>
            {/* <Route path="/login" caseSensitive={false} element={<Login />} /> */}
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default AllRoutes;
