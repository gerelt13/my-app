"use client";
import { Footer } from "@/app/page-2nd-section/footer";
import { NavigationItemBlack } from "./post/navigation-itemBlack";
import { NavigationBarBlack } from "./post/navigation-barBlack";
import { BlogHeader } from "./blog-header";
import { collection, getFirestore } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { app } from "../firebase";
import { BlogBoxes } from "./blog-boxes";
import Image from "next/image";
export default function Home() {
  const [value, loading, error] = useCollection(
    collection(getFirestore(app), "blog"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  
  
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
      <NavigationItemBlack />
      
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
              <BlogBoxes
                title={document.data().title}
                description={document.data().description}
                ImageUrl={document.data().ImageUrl}
                reviewImage={document.data().reviewImage}
                blogReviewName={document.data().blogReviewName}
                key={document.data().title}
              />
            );
          })}
      </div>
      <Footer />
    </main>
  );
}
