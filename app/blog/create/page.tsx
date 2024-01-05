"use client";
import Image from "next/image";
import { app } from "@/app/firebase";
import { Button, TextField, styled } from "@mui/material";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import backgroundImage from "../create/blueAi.jpg";

// import ClearIcon from "@mui/icons-material/clear";

export default function Home() {
  const [blogReviewName, setBlogReviewName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File>();
  const [secondFile, setSecondFile] = useState<File>();
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const storage = getStorage(app);
  const firestore = getFirestore(app);
  const storageRef = ref(storage, file?.name);
  const secondStorageRef = ref(storage, secondFile?.name);

  const handleCreateFirestoreDocument = async () => {
    setLoading(true);
    try {
      await uploadBytes(storageRef, file as Blob);
      await uploadBytes(secondStorageRef, secondFile as Blob);
      const ImageUrl = await getDownloadURL(storageRef);
      const secondUrl = await getDownloadURL(secondStorageRef);

      await addDoc(collection(firestore, "blog"), {
        title: title,
        description: description,
        ImageUrl: ImageUrl,
        reviewImage: secondUrl,
        blogReviewName: blogReviewName,
        date: date,
      });
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <main>
      <div className="Perfect Input Component" style={{ textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            float: "left",
            marginRight: "0 15px 0 0",
            height: "100vh",
            width: "100vh",
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundSize: "cover",
          }}
        >
          <div>
            <h1
              style={{
                paddingTop: "200px",
                fontSize: "70px",
                backgroundImage:
                  "linear-gradient(134.38deg, #FEDFD0 0%, #FF7955 75.12%, #2665F9 100%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Perfect{" "}
            </h1>
          </div>
          <div>
            <h2
              style={{
                paddingLeft: "20px",
                textAlign: "center",
                paddingTop: "200px",
                display: "flex",
                fontSize: "70px",
                color: " red",
              }}
            >
              input component
            </h2>
          </div>
        </div>
      </div>
      <div
        style={{
          paddingTop: "70px",
          fontWeight: "600px",
          fontSize: "60px",
          fontFamily: "Roboto",
          color: "red",
        }}
      >
        Create a post
      </div>
      <div
        style={{
          paddingRight: "100px",
          marginTop: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          paddingLeft: "70px",
        }}
      >
        <TextField
          label="title*"
          variant="outlined"
          defaultValue="Your title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          label="description*"
          variant="outlined"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <TextField
          label="review name*"
          variant="outlined"
          onChange={(e) => {
            setBlogReviewName(e.target.value);
          }}
        />

        <TextField
          label="date*"
          variant="outlined"
          id="outlines-password-input"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <input
          type="file"
          onChange={(e) => {
            if (e.target.files !== null) {
              setFile(e.target.files[0]);
            }
          }}
        />
        <input
          type="file"
          onChange={(e) => {
            if (e.target.files !== null) {
              setSecondFile(e.target.files[0]);
            }
          }}
        />
        <Button
          style={{
            borderRadius: "20px",
            background: "#FFF",
            boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.30)",
            backgroundColor: "#add8e6",
          }}
          variant="outlined"
          onClick={handleCreateFirestoreDocument}
        >
          {" "}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingRight: "30px",
            }}
          >
            {loading ? <div>Loading...</div> : <div>SAVE TO FIRESTORE</div>}
            <svg
              width="16"
              height="8"
              viewBox="0 0 16 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1188 3.00392H1.10876C0.558765 3.00392 0.108765 3.45392 0.108765 4.00392C0.108765 4.55392 0.558765 5.00392 1.10876 5.00392H12.1188V6.79392C12.1188 7.24392 12.6588 7.46392 12.9688 7.14392L15.7488 4.35392C15.9388 4.15392 15.9388 3.84392 15.7488 3.64392L12.9688 0.853923C12.6588 0.533923 12.1188 0.763923 12.1188 1.20392V3.00392Z"
                fill="#4DA0FD"
              />
            </svg>
          </div>
        </Button>
      </div>
    </main>
  );
}
