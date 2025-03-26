import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (email && password) {
            alert("Login successful!");
            navigate("/UI");
        } else {
            alert("Please enter email and password.");
        }
    };

    const handleGuestLogin = () => {
        alert("Logged in as Guest!");
        navigate("/UI");
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <input className="inputs"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input className="inputs"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button className="login-btn" onClick={handleLogin}>Login</button>
            <button className="guest-btn" onClick={handleGuestLogin}>Guest Login</button>
            <p>
                Don't have an account?
                <Link to="/signup" style={{ color: "blue", marginLeft: "5px" }}>
                    SignUp
                </Link>
            </p>
        </div>
    );
};

export default Login;