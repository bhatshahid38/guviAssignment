import React, { useEffect, useState } from "react";
import "./profile.css";

export default function Profile({ userInfo }) {
  function UserProfile() {
    const { id, userName } = userInfo;
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [mobile, setMobile] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = async (event) => {
      event.preventDefault();
      const errors = validateInputs();
      if (Object.keys(errors).length === 0) {
        try {
          const response = await fetch(
            `http://localhost:4000/usersignin/update?id=${id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                age,
                gender,
                dob,
                mobile,
              }),
            }
          );
          if (response.ok) {
            alert("User information updated successfully");
          } else {
            throw new Error(response.statusText);
          }
        } catch (err) {
          console.log(err);
          alert(err);
          setErrors({ submit: "Failed to update user information" });
        }
      } else {
        setErrors(errors);
      }
    };

    const validateInputs = () => {
      let errors = {};
      if (!gender) {
        errors.gender = "Gender is required";
      }
      if (!dob) {
        errors.dob = "Date of birth is required";
      }
      if (!mobile) {
        errors.mobile = "Mobile number is required";
      } else if (!/^[0-9]{10}$/i.test(mobile)) {
        errors.mobile = "Invalid mobile number format";
      }
      return errors;
    };

    return (
      <div>
        <div
          style={{
            display: "flex",
            backgroundColor: "rgb(112 181 144)",
            justifyContent: "space-between",
            height: "15vh",
            alignItems: "center",
            padding: "0 24px",
          }}
        >
          <div>Welcome! {userName}</div>
          <a
            href="login"
            style={{
              color: "white",
              border: "none",
              padding: "10px 20px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              margin: "4px 2px",
              cursor: "pointer",
              borderRadius: "4px",
              transition: "all 0.3s ease 0s",
              height: "30px",
              marginRight: "24px",
            }}
          >
            Logout
          </a>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            pattern="[0-9]*"
            min="1"
            max="120"
            onChange={(event) => setAge(event.target.value)}
          />
          <br />
          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={gender}
            pattern="[a-zA-Z]+"
            required
            onChange={(event) => setGender(event.target.value)}
          />
          <span className="error">{errors.gender}</span>
          <br />
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={dob}
            onChange={(event) => setDob(event.target.value)}
          />
          <span className="error">{errors.dob}</span>
          <br />
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={mobile}
            pattern="[0-9]*"
            title="Enter valid mobile number"
            onChange={(event) => setMobile(event.target.value)}
          />
          <span className="error">{errors.mobile}</span>
          <br />
          <input
            style={{ margin: "24px 0px 12px 0px" }}
            type="submit"
            value="Update"
          />
        </form>
      </div>
    );
  }

  return (
    <div>
      <UserProfile />
    </div>
  );
}
