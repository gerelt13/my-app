"use client";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { ChangeEventHandler, useState } from "react";
import { app } from "../firebase";
import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
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

const handleLogin = async () => {
  try { const user = await createUserWithEmailAndPassword(auth,email,password);
    console.log(user);
    router.push ("/");
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
      <Image src="/login.png" alt="login" width={850} height={850} />
      
      <input
      type="USERNAME"
        placeholder=" login username"
        onChange={handleEmailChange}
        style={{
          height: "30px",
          borderRadius: "14px",
          border: "1px solid rgba(102, 102, 102, 0.35)",
        }}
      />
      <input
        type="PASSWORD"
        placeholder="at least 6 digits"
        onChange={handlePasswordChange}
        style={{
          height: "30px",
          borderRadius: "14px",
          border: "1px solid rgba(102, 102, 102, 0.35)",
        }}
      />
    
      <button 
      onClick={handleLogin}
      style={{height: "50px", width: "100px"}}>Login</button>
    </div>
  );
}
