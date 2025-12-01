import { FaUser, FaLock, FaRegAddressCard, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";


import "../login/Login.css";


const Register = () => {

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


            if (error.response && error.response.data && error.response.data.message) {
                errorMessage = error.response.data.message;
            } else if (error.response && error.response.data && error.response.data.errors) {

                errorMessage = "Validation error: " + JSON.stringify(error.response.data.errors);
            }

            alert(errorMessage);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Register as a Professor</h1>

                <div className="input-field">
                    <input
                        type="text"
                        placeholder='Full Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <FaUser className="icon"/>
                </div>

                <div className="input-field">
                    <input
                        type="text"
                        placeholder='Registration/Matrícula'
                        value={registration}
                        onChange={(e) => setRegistration(e.target.value)}
                        required
                    />
                    <FaRegAddressCard className="icon"/>
                </div>

                <div className="input-field">
                    <input
                        type="email"
                        placeholder='Institutional E-mail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <FaEnvelope className="icon"/>
                </div>

                <div className="input-field">
                    <input
                        type="password"
                        placeholder='Password (min. 8 characters)'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <FaLock className="icon"/>
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