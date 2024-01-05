const CommentBoxStyle = {
    fontSize: "18px",
    border: "2px solid #BBC8D4",
    width: "630px",
    color: "black",
    height: "116px",
    paddingLeft: "18px",
    marginLeft: "550px",
    borderRadius: "2px"
    
  };
  
  export const CommentBox = () => {
    return (
      <div>
        <input style={CommentBoxStyle}    placeholder={"comment"} />
      </div>
    );
  };
  