const EmailInputStyle = {
  fontSize: "18px",
  border: "1px solid black",
  width: "514px",
  color: "blue",
  height: "56px",
  paddingLeft: "18px",
  marginTop: "40px",
};

export const EmailInput = () => {
  return (
    <div>
      <input style={EmailInputStyle} placeholder={"Email"} />
    </div>
  );
};
