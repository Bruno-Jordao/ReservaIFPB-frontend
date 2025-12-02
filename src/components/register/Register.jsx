import { useState } from "react";
import axios from "axios";


import "../login/Login.css";

const Register = ({ onLoginClick }) => {

    const [name, setName] = useState("");
    const [registration, setRegistration] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            const response = await axios.post("http://localhost:8080/api/v1/users", {
                name: name,
                registration: registration,
                email: email,
                password: password
            });

            console.log(response.data);
            alert("Registration successful! You can now log in.");


            setName("");
            setRegistration("");
            setEmail("");
            setPassword("");

        } catch (error) {
            console.error(error);

            let errorMessage = "Registration failed! Invalid data or server error.";

            if (error.response && error.response.data) {
                errorMessage = error.response.data.message || error.response.data.errors;
            }

            alert(errorMessage);
        }
    };


    const handleRegistrationChange = (e) => {
        const value = e.target.value;

        if (value === "" || /^\d*$/.test(value)) {
            setRegistration(value);
        }
    };


    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>

                <div className="input-field">
                    <input
                        type="text"
                        placeholder='Full Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="input-field">
                    <input
                        type="text"
                        placeholder='Registration/Matrícula'
                        value={registration}
                        onChange={handleRegistrationChange}
                        required
                    />
                </div>

                <div className="input-field">
                    <input
                        type="email"
                        placeholder='Institutional E-mail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="input-field">
                    <input
                        type="password"
                        placeholder='Password (min. 8 characters)'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button>Register</button>

                <div className="signup-link">
                    <p>
                        Already have an account? <a href="#">Log In</a>
                    </p>
                </div>
            </form>
        </div>

    )
}

export default Register