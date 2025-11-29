import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

import "./Login.css";


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.post("http://localhost:8080/auth/login", {
                email: username,
                password: password
            });

            console.log(response.data);
            alert("Login successful!");

        } catch (error) {
            console.error(error);
            alert("Invalid username or password");
        }
    };

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Access the system</h1>
            <div className="input-field">
                <input type="email" placeholder='E-mail'
                onChange={(e) => setUsername(e.target.value)}/>
                <FaUser className="icon"/>
            </div>
            <div className="input-field">
                <input type="password" placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}/>
                <FaLock className="icon"/>
            </div>
            <div className="recall-forget">
                <label>
                    <input type="checkbox"/>
                    Remember me
                </label>
                <a href="#">Forgot your password?</a>
            </div>
            <button>Enter</button>
            <div className="signup-link">
                <p>
                    Don't have an account? <a href="#">Register</a>
                </p>
            </div>
        </form>
    </div>

  )
}

export default Login
