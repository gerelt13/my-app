import Image from "next/image";
import BackgroundImage from "../public/brooke.png";
import { EmailInput } from "./components/email-input";
import { Star } from "./components/star";
import { NavigationBar } from "./page-1st-section/navigation-bar";

export const Button = () => {
  return (
    <div>
      <button
        style={{
          backgroundColor: "#0BBEF2",
          color: "#FFFFFF",
          width: "163.41px",
          height: "56px",
          borderRadius: "4px",
          marginTop: "40px",
        }}
      >
        Get early access
      </button>
    </div>
  );
};

const Header = () => {
  return (
    <div
      style={{ display: "flex", backgroundColor: "transparent", gap: "20px" }}
    >
      <div
        style={{ width: "514px", gap: "15px", justifyContent: "space-around" }}
      >
        <p
          style={{
            fontSize: "48px",
            fontWeight: "400px",
            lineHeight: "56.3px",
            color: "#FFFFFF",
            paddingTop: "252px",
          }}
        >
          Instant collaborations for remote teams
        </p>
        <p
          style={{
            fontSize: "18px",
            color: "#FFFFFF",
            fontWeight: "700px",
            width: "323.85px",
            height: "58px",
          }}
        >
          All in one for your remote team chats, collaboration and track
          projects
        </p>
      </div>
    </div>
  );
};

export default function Home() {
  const array = [1, 2, 3, 4];
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
      <div
        style={{
          display: "flex",
          paddingLeft: "133px",
          justifyContent: "space-between",
          paddingTop: "80px",
        }}
      >
        <div>
          <h1
            style={{
              height: "120px",
              fontWeight: "800px",
              width: "398px",
              fontSize: "48px",
            }}
          >
            Your Hub for teamwork
          </h1>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                height: "120px",
                fontWeight: "800px",
                width: "398px",
                fontSize: "18px",
              }}
            >
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </p>

            <a
              style={{
                height: " 28px",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
              href="/"
            >
              Learn more
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
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "263px",
            paddingRight: "345px",
          }}
        >
          <Image
            src="/imgOverMeeting.png"
            alt="meeting1"
            width={250}
            height={150}
          />

          <Image
            src="/ootoMeetings1.png"
            alt="meeting1"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <img src="/brooke2.jpg" alt="meeting1" width={500} height={500} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1
            style={{
              paddingLeft: "700px",
              height: "120px",
              fontWeight: "800px",
              width: "398px",
              fontSize: "48px",
              paddingTop: "80px",
            }}
          >
            Simple task management
          </h1>
          <p
            style={{
              paddingLeft: "700px",
              height: "120px",
              width: "398px",
              fontSize: "18px",
            }}
          >
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </p>

          <a
            style={{
              paddingLeft: "700px",
              height: " 28px",
              fontSize: "16px",
              display: "flex",

              gap: "20px",
            }}
            href="/"
          >
            Learn more
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
          </a>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1
            style={{
              height: "120px",
              fontWeight: "800px",
              width: "398px",
              fontSize: "48px",
              alignContent: "center",
            }}
          >
            Scheduling that actually works
          </h1>
          <p
            style={{
              height: "120px",
              fontWeight: "800px",
              width: "398px",
              fontSize: "18px",
            }}
          >
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </p>

          <a
            style={{
              height: " 28px",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
            href="/"
          >
            Learn more
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
          </a>
          <div style={{}}>
            <div
              style={{
                display: "flex",
                width: "263px",
                paddingLeft: "1200px",
                marginTop: "-336px",
              }}
            >
              <Image
                src="/brooke3.png"
                alt="meeting1"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>

      <p
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "48px",
          fontWeight: "800px",
          lineHeight: "60.24px",
          marginLeft: "412px",
        }}
      >
        What people say about us
      </p>
      <div style={{ display: "flex", gap: "20px" }}>
        {array.map((value) => {
          return (
            <div
              style={{
                backgroundColor: "#FFBFFF",
                width: "366px",
                height: "374px",
                marginLeft: "141px",
              }}
              key={value}
            >
              {array.map((value) => {
                return <Star key={value} />;
              })}

              <p style={{ fontSize: "18px" }}>
                Give everyone you work with—inside and outside your emoji, keep
                conversations focused in channels, and simplify all your
                communication into one place.
              </p>
              <img src="amyKlassen.png" width={100} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
