import { NavigationBar } from "../page-1st-section/navigation-bar";
import { NavigationItem } from "../page-1st-section/navigation-item";
import { BlogBoxes } from "./blog-boxes";
import Image from "next/image";
import { Header } from "../page-1st-section/header";
import { BlogHeader } from "./blog-header";
import { Footer } from "@/app/page-2nd-section/footer";
export default function Home() {
  const array = [
    {
      title: "The Emotional Toll of Being in UX",
      description:
      "There are times when our work impacts us deeply-sometimes in ways we neither acknowledge nor understand",
      ImageUrl: "/blogPic.png",
      reviewImage: "/blogWade.png",
      blogReviewName: "Wade Warren",
    },
    {
      title: "10 secret tips for managing a team remotely",
      description:
      "Our latest updates and blogs about managing your team,Our latest updates and blogs about managing your team",
      ImageUrl: "/blog2.png",
      reviewImage: "/blogBessie.png",
      blogReviewName: "Bessie Cooper",
    },
    {
      title: "What Ever Happened to Steampunk?",
      description:
      "How the iPhone popularized steampunk… and how the iPhone killed it off",
      ImageUrl: "/blog3.png",
      reviewImage: "/eleanorPena.png",
      blogReviewName: "Courtney Henry",
    },
    {
      title: "The 2020 Guide for White Men in Tech",
      description:
      "How to use centuries of unfair advantage to make the world a more equal place",
      ImageUrl: "/blog4.png",
      reviewImage: "/blogDarlene.png",
      blogReviewName: "Darlene Robert",
    },
    {
      title: "Why Are Women Still Behind in the Design World?",
      description:
      "It's 2020, but women designers still face lower pay and less opportunity. What gives?",
      ImageUrl: "/blog5.png",
      reviewImage: "/blogLeslie.png",
      blogReviewName: "Leslie Alexander",
    },
    {
      title: "The Ultimate Guide to Becoming a Great Designer",
      description:
      "Our latest updates and blogs about managing your team, Our latest updates and blogs about managing your team",
      ImageUrl: "/blog6.png",
      reviewImage: "/blogElean.png",
      blogReviewName: "Eleanor Pena",
    },
    {
      title: "Data-Driven Design is Killing Our Instincts",
      description:
      "Our latest updates and blogs about managing your team Our latest updates and blogs about managing your team",
      ImageUrl: "/blog7.png",
      reviewImage: "/amyKlass.png",
      blogReviewName: "Jane Cooper",
    },
    {
      title: "Finding the Blank Spots in Big Data",
      description:
      "Artists and designers are working to address a major problem for marginalized communities in the data economy: If the data does not exist...",
      ImageUrl: "/blog8.png",
      reviewImage: "/blogJenny.png",
      blogReviewName: "Jenny Wilson",
    },
    {
      title: "3 Lessons We Learned From Rebranding Gusto",
      description:
      "You might not know the music, but designers have certainly taken notice of this small but visceral movement from the late '80s",
      ImageUrl: "/blog9.png",
      reviewImage: "/blogJacob.png",
      blogReviewName: "Jacob Jones",
    },
  ];
  
  return (
    <main
    style={{
      height: "100vh",
      display: "flex",
      backgroundSize: "cover",
      backgroundColor: "#d3d3d3",
      flexWrap: "wrap",
      gap: "20px",
      flexDirection: "column",
    }}
    >
    <BlogHeader />
      <div style={{}}>
        <NavigationBar />
      </div>
      <Footer />
      {array.map((object) => {
        return (
          <BlogBoxes
            title={object.title}
            description={object.description}
            ImageUrl={object.ImageUrl}
            reviewImage={object.reviewImage}
            blogReviewName={object.blogReviewName}
            key={object.title}
          />
        );
      })}
    </main>
  );
}
