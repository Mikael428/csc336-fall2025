import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./register.css";

const REGISTER_API_URL = "http://localhost:3001/api/register";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submit, setSubmit] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmitted = async (e) => {
        e.preventDefault();

        if (!name.trim() || !email.trim()) {
            toast.error("Please fill all included fields");
            return;
    }


        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.trim())) {
            toast.error("Please enter a valid email address.");
            return;
    }

        setLoading(true);

        try {
            const response = await fetch(REGISTER_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ name: name.trim(), email: email.trim()}),
            });
            const data = await response.json();

            if (!response.ok) {
                const errorMessage = data.error || 'Registration failed due to a server error.';
                toast.error(`Error: ${errorMessage}`)
                return;
            }

            setSubmit(true);
            toast.success(`Successful!! ${name.trim()}, check your email.`);
        } catch (error) {
            console.error("Registration Error", error);
            toast.error("Network error: Could not connect to the registration service");
        } finally {
            setLoading(false);
        }
    };

        if (submit) {
            return (
                <div className="Register-Message">
                    <p>Successful Registration! Thanks {name}!</p>
                    <ToastContainer position="top-center"/>
                    <button onClick={() => setSubmit(false)}>Register Another</button>
                </div>
            );
        }

    return (
        <>
        <form className="register-form" onSubmit={handleSubmitted}>
            <input value={name} 
            onChange={e => setName(e.target.value)}
            className="Name" 
            placeholder="Name"/>
            <input value={email} 
            onChange={e => setEmail(e.target.value)}
            className="Email"
            placeholder="Email"/>
        <button className="submit-button" type="submit">Register</button>
        </form>

        <ToastContainer position="bottom-right" autoClose={3000}/>
        </>
    );
}

export default Register;