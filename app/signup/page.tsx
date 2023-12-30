"use client";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { ChangeEventHandler, useState } from "react";
import { app } from "../firebase";
import * as React from "react";
import Image from "next/image";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

const handleSignUp = async () => {
  try { const user = await createUserWithEmailAndPassword(auth,email,password);
    console.log(user);
  } catch (err) {
    console.error(err);
  }
};


  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {" "}
      <Image src="/loginFigma.png" alt="loginFigma" width={850} height={850} />
      
      <input
        type="EMAIL"
        placeholder="type your email"
        onChange={handleEmailChange}
        style={{
          borderRadius: "14px",
          border: "1px solid rgba(102, 102, 102, 0.35)",
        }}
      />
      <input
        type="PASSWORD"
        placeholder="type your password"
        onChange={handlePasswordChange}
        style={{
          borderRadius: "14px",
          border: "1px solid rgba(102, 102, 102, 0.35)",
        }}
      />
      <button onClick={handleSignUp}>
      Sign Up</button>
    </div>
  );
}
