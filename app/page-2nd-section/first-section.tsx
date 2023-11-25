import Image from "next/image";

export const FirstSection = () => {
  return (
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
  );
};
