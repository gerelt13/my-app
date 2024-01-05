"use client";

import RemoveRedEyeTwoToneIcon from "@mui/icons-material/RemoveRedEyeTwoTone";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";


import {
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useState } from "react";
import { app } from "../firebase";

export default function Instagram() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  const EndAdorment = () => {
    return (
      <InputAdornment position="end">
        <IconButton onClick={() => setVisible(!visible)}>
          {visible ? <VisibilityTwoToneIcon /> : <RemoveRedEyeTwoToneIcon />}
        </IconButton>
      </InputAdornment>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F9F9FA",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          gap: "18px",
        }}
      >
        <h1 style={{ color: "#212121" }}>WELCOME BACK MEMBER</h1>
        <p style={{ color: "#424242" }}>LOG IN TO CONTINUE</p>
        <TextField
          label="Username"
          variant="outlined"
          type="USERNAME"
          placeholder="example@email.com"
          onChange={handleEmailChange}
        />
        <OutlinedInput
          label="Password"
          placeholder="********"
          type={visible ? "text" : "password"}
          endAdornment={<EndAdorment />}
          onChange={handlePasswordChange}
        />

        <Button
          onClick={handleLogin}
          style={{
            height: "72px",
            width: "420px",
            display: "flex",
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "28.16px",
            color: "white",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#24243E",
          }}
          endIcon={
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_12_1548"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="33"
                height="33"
              >
                <rect
                  x="0.450195"
                  y="0.5"
                  width="32"
                  height="32"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_12_1548)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.1741 16.4997H9.11686C8.74867 16.4997 8.4502 16.2012 8.4502 15.833C8.4502 15.4648 8.74867 15.1663 9.11686 15.1663H22.1741L17.9788 10.9711C17.7184 10.7107 17.7184 10.2886 17.9788 10.0283C18.2391 9.76792 18.6613 9.76792 18.9216 10.0283L24.2549 15.3616C24.5153 15.622 24.5153 16.0441 24.2549 16.3044L18.9216 21.6377C18.6613 21.8981 18.2391 21.8981 17.9788 21.6377C17.7184 21.3774 17.7184 20.9553 17.9788 20.6949L22.1741 16.4997Z"
                  fill="white"
                />
              </g>
            </svg>
          }
        >
          Instagram
        </Button>
        <a href="/signup" style={{ color: "#424242" }}>
          Not a member yet? Join now
        </a>
      </div>
    </div>
  );
}
