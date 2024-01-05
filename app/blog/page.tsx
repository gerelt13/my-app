"use client";
import { Footer } from "@/app/page-2nd-section/footer";
import { collection, getFirestore } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { app } from "../firebase";
import { BlogBoxes } from "./blog-boxes";
import { BlogHeader } from "./blog-header";
import { NavigationBarBlack } from "./[id]/navigation-barBlack";

export default function Home() {
  const [value, loading] = useCollection(
    collection(getFirestore(app), "blog"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main
      style={{
        display: "flex",
        backgroundColor: "#d3d3d3",
        flexWrap: "wrap",
        gap: "20px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <NavigationBarBlack />
      <BlogHeader />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "1180px",
          gap: "20px",
        }}
      >
        {value &&
          value.docs.map((document) => {
            return (
              <a
                href={`/blog/${document.id}`}
                key={document.id}
                style={{ textDecoration: "none", color: "black" }}
              >
                <BlogBoxes
                  title={document.data().title}
                  description={document.data().description}
                  ImageUrl={document.data().ImageUrl}
                  reviewImage={document.data().reviewImage}
                  blogReviewName={document.data().blogReviewName}
                  date={document.data().date}
                />
              </a>
            );
          })}
      </div>
      <Footer />
    </main>
  );
}
