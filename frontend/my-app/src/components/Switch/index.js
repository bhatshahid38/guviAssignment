import React from "react";
import GuviLogo from "../../assets/logoofGuvi.png";
export default function Switch() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        backgroundColor: "rgb(112 181 144)",
        height: "15vh",
        alignItems: "center",
      }}
    >
      <a
        href="Signup"
        style={{
          backgroundColor: "#3498db",
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
        Signup
      </a>
      <a
        href="login"
        style={{
          backgroundColor: "#2ecc71",
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
        Signin
      </a>

      <div
        style={{
          backgroundColor: "#70b590",
          padding: "10px 20px",
          borderRadius: "5px",
          position: "absolute",
          left: "0",
        }}
      >
        <a style={{ margin: "6px", height: "50px" }} href="/">
          <img
            src={GuviLogo}
            alt={"logo"}
            style={{
              objectFit: "contain",
              height: "100%",
              width: "100%",
            }}
          />
        </a>
      </div>
    </div>
  );
}
