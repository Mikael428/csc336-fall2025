import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Register.css";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submit, setSubmit] = useState(false);

    const handleSubmitted = async (e) => {
        e.preventDefault();

        if (!name.trim() || !email.trim()) {
            toast.error("Please fill all included fields");
    }


        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.trim())) {
            toast.error("Please enter a valid email address.");
            return;
        }

        setSubmit(true);
        toast.success(`Successful!!`);
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