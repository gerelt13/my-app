export default function Home () {
    const array = ["any", "any", "any", "any", "any", "any"];
    return (
      <div
        style={{ display: "flex", gap: "20px", height: "100vh", width: "100vw" }}
      >
        {array.map(() => {
          return (
            <div
              style={{ backgroundColor: "red", height: "100px", width: "100px" }}
            ></div>
          );
        })}
      </div>
    );
  }
  

  // export default function Home() {
//   const array = ["Person1", "Person2", "Person3", "Person4", "Person5", "Person6", "Person7", "Person8"];
//   return <div style ={{ display: "flex", justifyContent: "row",    gap: "22px" }}>
// {array[0]},{array[1]},{array[2]},{array[3]},{array[4]},{array[5]},{array[6]},{array[7]},

//   </div>;
// }

// export default function Home () {
//   const array = ["Person1", "Person2", "Person3", "Person4", "Person5", "Person6", "Person7", "Person8"];
// return (
//     <div>
//       <p> Home work: list of names</p>
//       {array.map(name => (
//         // return <p key={name}>{name}</p>;
//           <li key={name}>{name}</li>
//         ))}
//       </div>
//   );
// }
