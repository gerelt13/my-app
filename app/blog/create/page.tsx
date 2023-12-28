"use client";
import { app } from "@/app/firebase";
import { Button, TextField, styled } from "@mui/material";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import backgroundImage from "../create/blueAi.jpg";
import { Roboto } from "next/font/google";

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
      <div style={{ paddingTop: "70px", fontWeight: "600px", fontSize: "60px", fontFamily: "Roboto" ,color: "red",  }}>
        Create a post</div>
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
            {loading ? <div>Loading...</div> : <div>SAVE TO FIRESTORE</div>}
          </Button>
        </div>
      
    </main>
  );
}
