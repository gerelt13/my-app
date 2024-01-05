"use client";

import RemoveRedEyeTwoToneIcon from "@mui/icons-material/RemoveRedEyeTwoTone";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import { IconButton, InputAdornment } from "@mui/material";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useState } from "react";
import { app } from "../firebase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const router = useRouter();
  const [visible, setVisible] = useState(true);
  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  const EndAdorment = ({ visible, setVisible }) => {
    return (
      <InputAdornment position="end">
        <IconButton onClick={() => setVisible()}>
          {visible ? <VisibilityTwoToneIcon /> : <RemoveRedEyeTwoToneIcon />}
        </IconButton>
      </InputAdornment>
    );
  };
  return (
    <div
      style={{
        display: "flex",
        // width: "100vh",
        // height: "100vh",
        justifyContent: "center",
        
      }}
    >
      <Image src="/blueImage.jpeg" alt="Bluelogin"  width={1950} height={1050} />

      <div
        style={{ marginTop: "300px", marginLeft: "-634px",paddingTop: "3px" }}
      >
        <input
          type="USERNAME"
          placeholder=" login username"
          onChange={handleEmailChange}
          style={{
            textAlign: "left",
            boxShadow: "10px 5px 5px gray",
            height: "30px",
            borderRadius: "14px",
            border: "1px solid rgba(102, 102, 102, 0.35)",
          }}
        />

        <input
          label="PASSWORD"
          placeholder="at least 6 digits"
          type={visible ? "text" : "password"}
          InputProps={{
            endAdorment: (
              <EndAdorment visible={visible} setVisible={setVisible} />
            ),
          }}
          onChange={handlePasswordChange}
          style={{
            textAlign: "left",
            boxShadow: "10px 5px 5px gray",
            height: "30px",
            borderRadius: "14px",
            border: "1px solid rgba(102, 102, 102, 0.35)",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            height: "50px",
            width: "100px",
            boxShadow: "10px 5px 5px gray",
            borderRadius: "10px",
            justifyContent: "center",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
