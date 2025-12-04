import { useState } from "react";
import "./Register.css";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submit, setSubmit] = useState(false);
    const handleSubmitted = async (e) => {
        e.preventDefault();

        if (!name || !email) return alert("Please fill all included fields");
        setSubmit(true);
    };

    if (submit) return <p>Successful Registration!</p>

    return (
        <form className="register-form" onSubmit={handleSubmitted}>
            <input value={name} onChange={e => setName(e.target.value)}
        placeholder="Name" />
            <input value={email} onChange={e => setEmail(e.target.value)}
        placeholder="Email" />
        <button className="submit-button" type="submit">Register</button>
        </form>
    );
}

export default Register;