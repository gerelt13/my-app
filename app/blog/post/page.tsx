import Image from "next/image";

import { NavigationItemBlack } from "./navigation-itemBlack";
import { NavigationBarBlack } from "./navigation-barBlack";
import { Footer } from "@/app/page-2nd-section/footer";
import { EmailInput } from "@/app/components/email-input";
import { CommentBox } from "./comment-box";

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100wh",
        backgroundSize: "cover",
        backgroundColor: "#FFFFFF",
        justifyContent: "space-between",
        paddingTop: "30px",
      }}
    >
      <div>
        <NavigationBarBlack />
        <div>{/* <NavigationItemBlack /> */}</div>

        <h1
          style={{
            height: "160px",
            fontWeight: "800px",
            width: "700px",
            fontSize: "48px",
            paddingTop: "200px",
            paddingLeft: "400px",
            color: "#25313C",
            lineHeight: "78px",
          }}
        >
          10 Secrets for managing a remote team
        </h1>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            paddingLeft: "410px",
            paddingTop: "20px",
          }}
        >
          <img src="/blogWade.png" alt="review name" width={45} height={45} />
          <p style={{ color: "#6D7D8B", paddingLeft: "20px" }}>Shedrack eze</p>
          <p style={{ paddingLeft: "20px" }}>| </p>
          <p style={{ color: "#6D7D8B", paddingLeft: "20px" }}>
            2nd January,2022
          </p>
        </div>
        <Image
          src="/postPic.png"
          alt="post image"
          width={1200}
          height={600}
          style={{
            paddingTop: "30px",
            marginLeft: "200px",
            paddingBottom: "40px",
          }}
        ></Image>
      </div>
      <p
        style={{
          fontSize: "18px",
          width: "700px",
          marginLeft: "370px",
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
        </p>{" "}
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
      </p>
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <img
          src="/blogWade.png"
          alt="review name"
          width={45}
          height={45}
          style={{
            marginLeft: "500px",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        />
        <p style={{ fontSize: "16px", paddingLeft: "20px" }}>Written by</p>
        <p style={{ paddingLeft: "30px", fontSize: "22px" }}>Shedrack eze </p>
        <p style={{ color: "#6D7D8B", paddingLeft: "20px" }}>CEO Team App</p>
      </div>
      <div
        style={{
          border: "solid 1px #d3d3d3",
          marginLeft: "400px",
          width: "600px",
        }}
      ></div>
      <div>
        <div
          style={{
            color: "#6D7D8B",
            fontSize: "24px",
            paddingTop: "30px",
          }}
        >
          <h1 style={{ marginLeft: "500px" }}>Join the conversation</h1>
          <img
            src="/blogLeslie.png"
            alt="review name"
            width={45}
            height={45}
            style={{
              marginLeft: "500px",
              alignItems: "center",
              display: "center",
            }}
          />{" "}
          <CommentBox />
          <a href="/blog/create">
            <button
              style={{
                marginLeft: "1090px",
                width: "100px",
                fontSize: "16px",
                cursor: "pointer",
                boxShadow: "10px 5px 5px gray",
                height: "56px",
                borderRadius: "5px",
                borderStyle: "solid",
                borderColor: "#4DA0FD",
                color: "#4DA0FD",
               marginBottom: "20px",
               marginTop: "10px"
              }}
            
            >
              Send
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
