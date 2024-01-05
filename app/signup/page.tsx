"use client";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { ChangeEventHandler, useState } from "react";
import { app } from "../firebase";
import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const router = useRouter();
  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      router.push("/");
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          boxShadow: "10px 5px 5px gray",
        }}
      >
        {" "}
        <Image
          src="/foster-lake.jpg"
          alt="Bluelogin"
          width={850}
          height={850}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <input
          type="USERNAME"
          placeholder=" your email to sign up"
          onChange={handleEmailChange}
          style={{
            boxShadow: "10px 5px 5px gray",
            textAlign: "center",
            width: "200px",
            height: "30px",
            borderRadius: "14px",
            border: "1px solid rgba(102, 102, 102, 0.35)",
          }}
        />
        <input
          type="PASSWORD"
          placeholder="at least 6 digits password"
          onChange={handlePasswordChange}
          style={{
            boxShadow: "10px 5px 5px gray",
            textAlign: "center",
            width: "200px",
            height: "30px",
            borderRadius: "14px",
            border: "1px solid rgba(102, 102, 102, 0.35)",
          }}
        />

        <button
          onClick={handleSignUp}
          style={{
            backgroundColor: "green",
            color: "black",
            height: "40px",
            width: "100px",
            borderRadius: "10px",
            cursor: "pointer",
            boxShadow: "10px 5px 5px gray",
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
