import { useState } from "react";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmitted = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Please fill all included fields");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      alert("Please enter a valid email address.");
      return;
    }

    setSubmit(true);
  };

  if (submit) {
    return (
      <div className="Register-Message">
        <p>Successful Registration! Thanks {name}!</p>
      </div>
    );
  }

  return (
    <form className="register-form" onSubmit={handleSubmitted}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="Name"
        placeholder="Name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="Email"
        placeholder="Email"
      />
      <button className="submit-button" type="submit">
        Register
      </button>
    </form>
  );
}

export default Register;
