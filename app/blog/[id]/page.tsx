"use client";
import Image from "next/image";
import { Footer } from "@/app/page-2nd-section/footer";
import { NavigationBarBlack } from "./navigation-barBlack";
import { useDocument } from "react-firebase-hooks/firestore";
import { doc, getFirestore } from "firebase/firestore";
import { app } from "@/app/firebase";

export default function Home({ params }: { params: { id: string } }) {
  const id = params.id;
  const [value, loading] = useDocument(doc(getFirestore(app), "blog", id), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  const { title, description, ImageUrl, reviewImage, blogReviewName, date } =
    value?.data() || {};
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
    <div
      style={{
        minHeight: "100vh",
        width: "100wh",
        backgroundSize: "cover",
        backgroundColor: "#FFFFFF",
        paddingTop: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <NavigationBarBlack />
      <div>
        <h1
          style={{
            height: "160px",
            fontWeight: "800px",
            width: "700px",
            fontSize: "48px",
            paddingTop: "200px",
            color: "#25313C",
            lineHeight: "78px",
          }}
        >
          {title}
        </h1>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            paddingTop: "20px",
          }}
        >
          <Image src={reviewImage} alt="review name" width={45} height={45} />
          <p style={{ color: "#6D7D8B", paddingLeft: "20px" }}>
            {blogReviewName}
          </p>
          <p style={{ paddingLeft: "20px" }}>| </p>
          <p style={{ color: "#6D7D8B", paddingLeft: "20px" }}>{date}</p>
        </div>
      </div>
      <Image
        src={ImageUrl}
        alt="post image"
        width={1200}
        height={600}
        style={{
          paddingTop: "30px",
          paddingBottom: "40px",
        }}
      ></Image>
      <div
        style={{
          fontSize: "18px",
          width: "700px",
          color: "#25313C",
          lineHeight: "30px",
        }}
      >
        <p>
          If you’re thinking of starting a blog of your own, but just don’t have
          a clue on what to blog about, then fear not!
        </p>
        <p>
          In this article, I have included a whole load of blog examples from a
          wide variety of different niches, all run on different blogging
          platforms like WordPress, Joomla! and Drupal.
        </p>
        <p>
          Since the beginning of the internet, millions and millions and
          millions of blogs have been created. Many have died due to lost
          interest or their owners giving up on the idea, while others have
          thrived and continue to grow, making money and earning their owners a
          steady income. It’s a constant evolution of content that keeps people
          coming back for more, especially if these blogs contact highly
          resourceful material that people find useful and interesting.
        </p>
        <p>
          Each example listed in this blog post are all different in some way
          and all bring something unique to their readers & subscribers. I want
          to show you what is possible and how you can take inspiration from
          them and create an awesome blog of your own.
        </p>
        <p>
          Some of these blogs make over $100k a month, others are just a hobby
          for their owners, but all have the same purpose at their core… the
          love of writing and sharing information. Some of these blogs make over
          $100k a month, others are just a hobby for their owners, but all have
          the same purpose at their core… the love of writing and Some of these
          blogs make over $100k a month, others are just a hobby for their
          owners, but all have the same purpose at their core… the love of
          writing and sharing information
        </p>
        <p>
          Some of these blogs make over $100k a month, others are just a hobby
          for their owners, but all have the same purpose at their core… the
          love of writing and sharing information.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          width: "700px",
          paddingTop: "50px",
          paddingBottom: "200px",
        }}
      >
        <Image
          src={reviewImage}
          alt="review name"
          width={45}
          height={45}
          style={{
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        />
        <div style={{ paddingLeft: "20px" }}>
          <p style={{ fontSize: "16px" }}>Written by</p>
          <p style={{ fontSize: "22px" }}>{blogReviewName}</p>
          <p style={{ color: "#6D7D8B" }}>{description}</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
