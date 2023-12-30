
import BackgroundImage from "../public/brooke.png";
import { EmailInput } from "../components/email-input";

import { NavigationBar } from "./navigation-bar";
import { Header } from "./header";
import { Button } from "./button";
import { FirstSection } from "../page-2nd-section/first-section";
import { SecondSection } from "../page-2nd-section/second-section";
import { ThirdSection } from "../page-2nd-section/third-section";
import { FourthSection } from "../page-2nd-section/fourth-section";
import { Footer } from "../page-2nd-section/footer";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Logo } from "../Logo";
import { Star } from "../components/star";

export default function Home() {
  const array = [
    {
      star: 1,
      sentence:
        "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
      name: "Amy Klassen",
      imageUrl: "/amyKlass.png",
    },
    {
      star: 2,
      sentence:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      name: "Jane Cooper",
      imageUrl: "/janeCooper.png",
    },
    {
      star: 3,
      sentence:
        "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
      name: "Eleanor Pena",
      imageUrl: "/eleanorPena.png",
    },
    {
      star: 4,
      sentence:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      name: "Eleanor Pena",
      imageUrl: "/eleanor.png",
    },
  ];
  return (
    <div>
      <div
        style={{
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${BackgroundImage.src})`,
          paddingLeft: "139px",
          paddingTop: "24px",
        }}
      >
        <NavigationBar />
        <Header />
        <main style={{ gap: "60px", display: "flex" }}>
          <EmailInput />
          <Button />
        </main>
      </div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Star />

      <div style={{ paddingTop: "60px", display: "flex", gap: "10px" }}>
        {array.map((value, index) => {
          let starArray = new Array(value.star).fill(4);
          return (
            <div
              style={{
                backgroundColor: "#F5F7FA",
                width: "366px",
                height: "374px",
                paddingLeft: "20px",
                paddingTop: "40px",

                justifyContent: "space-around",
                marginLeft: "141px",
                boxShadow: "10px 5px 5px gray",
                border: "1px solid gray",
              }}
              key={index}
            >
              {array.map((value, index) => {
                return <Star key={value} />;
              })}

              <p
                style={{
                  display: "flex",
                  fontSize: "20px",
                  paddingBottom: "60px",
                  paddingTop: "20px",
                }}
              >
                {value.sentence}
              </p>
              <p
                style={{
                  fontFamily: "Roboto",
                  fontSize: "30px",
                  fontStyle: "italic",
                  color: "#000000",
                }}
              >
                {value.name}
              </p>
              <img src={value.imageUrl} />
            </div>
          );
        })}
      </div>
      <div style={{ marginLeft: "1610px", paddingTop: "30px" }}>
        <ArrowBack />
        <ArrowForward />
      </div>
      <Logo />
      <Footer />
    </div>
  );
}
