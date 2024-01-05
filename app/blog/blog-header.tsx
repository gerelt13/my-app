export const BlogHeader = () => {
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
            fontWeight: "900px",
            lineHeight: "60.24px",
            color: "#000000",
            paddingTop: "160px",
            width: "246px",
            paddingLeft: "140px",
           
          }}
        >
          Blog posts{" "}
        </p>
        <p
          style={{
            fontSize: "18px",
            color: "#6D7D8B",
            width: "480px",
            height: "29px",
            lineHeight: "29.37px",
            paddingLeft: "140px",
            paddingTop: "160px",
          }}
        >
         Our latest updates and blogs about managing your team
        </p>
      </div>
    </div>
  );
};
