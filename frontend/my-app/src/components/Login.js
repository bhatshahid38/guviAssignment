import { useState } from "react";
import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const [showSucess, setShowSucess] = useState(false);
  const [email, setemail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    const passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    if (!passwordPattern.test(password)) {
      alert(
        "Your password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long"
      );
      return;
    }
    if (email === "") {
      alert("please enter email");
    }
    if (password === "") {
      alert("please enter password");
    }

    // submit the form if the password is valid
    fetch("http://localhost:4000/usersignin/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        debugger;
        const { id, userName } = data;
        setShowSucess(true);
        setIsLoggedIn(data);
      })
      .catch((error) => {
        alert(error);
        // Handle error response
      });
  }
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        {showSucess && (
          <div>Successfully Signed in. Redirecting to profile</div>
        )}
        <h1 id="signup"> Signin </h1>
        <label htmlFor="username"> Email</label>
        <input
          type="email"
          id="username"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
          title="Please enter a valid email address"
          onChange={(e) => setemail(e.target.value)}
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

        <input type="submit" />
      </form>
    </div>
  );
}
