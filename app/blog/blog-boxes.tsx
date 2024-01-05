import Image from "next/image";

export const BlogBoxes = ({
  title,
  description,
  ImageUrl,
  reviewImage,
  blogReviewName,
  date,
}: {
  title: string;
  description: string;
  ImageUrl: string;
  reviewImage: string;
  blogReviewName: string;
  date: string;
}) => {
  return (
    <div
      style={{
        width: "350px",
        height: "500px",
        backgroundColor: "white",
        borderRadius: "30px",
        overflow: "hidden",
      }}
    >
      <Image
        style={{ marginLeft: "-05px" }}
        src={ImageUrl}
        width={363}
        height={147}
        alt="profileImage"
      />
      <div
        style={{
          paddingLeft: "24px",
          paddingTop: "10px",
        }}
      >
        <h1 style={{ color: "#25313C" }}>{title}</h1>
        <p
          style={{
            color: "radial-gradient(134.38% 115.87% )",
            paddingTop: "35px",
            paddingBottom: "80px",
          }}
        >
          {description}
        </p>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <Image
            src={reviewImage}
            width={45}
            height={45}
            alt="profileImage"
            style={{ borderRadius: "50%" }}
          />
          <p style={{ color: "#6D7D8B" }}>{blogReviewName}</p>
          <p>|</p>
          <p style={{ color: "#6D7D8B" }}>{date}</p>
        </div>
      </div>
    </div>
  );
};
