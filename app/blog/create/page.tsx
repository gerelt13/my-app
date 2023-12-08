"use client";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ImageUrl, setImageUrl] = useState("");
  const [reviewImage, setReviewImage] = useState("");
  const [blogReviewName, setBlogReviewName] = useState("");
  const [date, setDate] = useState("");
  return (
    <main>
      <h1>Create firebase docs </h1>
      {/* <input placeholder="title" />
      <input placeholder="description" /> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          paddingLeft: "10px",
        }}
      >
        {"It shows here:"}

        <h1>
          {JSON.stringify({
            name: title,
            hometown: description,
            hobby: reviewImage,
            favorite_color: date,
          })}
        </h1>

        <h1>{title}</h1>
        <h1>{description}</h1>
        <h1>{ImageUrl}</h1>
        <h1>{reviewImage}</h1>
        <h1>{blogReviewName}</h1>
        <h1>{date}</h1>

        <TextField
          label="name"
          variant="outlined"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          label="hometown"
          variant="outlined"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <TextField
          label="hobby"
          variant="outlined"
          onChange={(e) => {
            setImageUrl(e.target.value);
          }}
        />
        <TextField
          label="favorite color"
          variant="outlined"
          onChange={(e) => {
            setReviewImage(e.target.value);
          }}
        />
        <TextField
          label="blog review name"
          variant="outlined"
          onChange={(e) => {
            setBlogReviewName(e.target.value);
          }}
        />
        <TextField
          label="date"
          variant="outlined"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <Button
          style={{
            borderRadius: "5px",
            background: "#FFF",
            boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.30)",
            backgroundColor: "#add8e6",
          }}
          variant="outlined"
          onClick={async () => {
            // await addDoc(collection(Database, "blog"), {
            //   title: title,
            //   description: description,
            // });
          }}
        >
          Save to Cloud
        </Button>
      </div>
    </main>
  );
}

// export default () => {
//     return (
//         <div style={{ color: "#387369", alignItems: "center", width: "100vh" }}>
//         <h1>Hello World</h1>
//         </div>

//     )
// }
