import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSucess, setShowSucess] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    // Perform validation on form fields
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }

    if (!password.trim()) {
      alert("Please enter your password");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Make API call to server
    fetch("http://localhost:4000/usersignup/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: name,
        email,
        password,
        confirm_password: confirmPassword,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        console.log(data);
        setShowSucess(true);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
        // Handle success response
      })
      .catch((error) => {
        console.log(error);

        console.error("There was an error!", error);
        // Handle error response
      });
  }

  return (
    <div className="signupBody">
      <form onSubmit={handleSubmit}>
        {showSucess && <div>Successfully Signed up. Redirecting to Login</div>}
        <h1 id="signup"> Signup </h1>
        <label htmlFor="username"> Username</label>
        <input
          type="text"
          id="username"
          name="name"
          pattern="[a-zA-Z0-9]+"
          required
          title="Username should contain only letters and numbers, with no spaces"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email"> Email</label>
        <input
          type="email"
          id="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
          title="Please enter a valid email address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="Password"> Password</label>
        <input
          type="password"
          id="Password"
          name="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          required
          title="Your password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="Confirm"> Confirm Password</label>
        <input
          type="password"
          id="Confirm"
          name="confirm_password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
export default SignUp;
