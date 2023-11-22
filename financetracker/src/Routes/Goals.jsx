// import React from "react";

// function Goals() {
//   const containerStyle = {
//     display: "flex",
//     width: "100vw", // Use the full viewport width
//   };

//   const leftDivStyle = {
//     flex: "1", // Take up half of the available space
//     // Add your styles as needed
//   };

//   const rightDivStyle = {
//     flex: "1", // Take up half of the available space
//      // Add your styles as needed
//   };

//   const textboxStyle = {
//     width: "50%",
//     borderRadius: "2px",
//     outline: "0",
//     borderColor: "gray",
//     borderStyle: "solid",
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={leftDivStyle}>
//         {/* Content for the left div */}
//         <div style={{ marginTop: "4em", marginLeft: "3.5em" }}>
//           <p>
//             <b>
//               <span style={{ fontSize: "40px" }}>Welcome, Username!</span>{" "}
//             </b>
//           </p>
//           <span style={{ fontSize: "36px" }}>Add a new a target</span>
//           <p></p>
//           <img
//             src="https://www.incharge.org/wp-content/uploads/2015/06/Financial-Budget-Goals.gif"
//             style={{
//               height: "558px",
//               width: "80%",
//               marginBottom: "10%",
//             }}
//           />
//         </div>
//       </div>
//       <div style={rightDivStyle}>
//         {/* Content for the right div */}
//         <div style={{ marginTop: "10em" }}>
//           <span style={{ fontSize: "32px", color: "#264653" }}>
//             Please enter the details below
//           </span>
//           <form style={{ fontSize: "32px", color: "gray", marginTop: "2em" }}>
//             <p>Target Title</p>
//             <input type="text" style={{ textboxStyle }} />
//             <p></p>
//             <p>Target Amount</p>
//             <input type="text" style={{ textboxStyle }} />
//             <p></p>
//             <p>Period (Months) </p>
//             <input type="text" style={{ textboxStyle }} />
//             <p></p>
//             <p>
//               <span style={{ marginRight: "4em" }}>Initial Deposit</span>{" "}
//               Frequency
//             </p>
//             <input
//               type="text"
//               style={{
//                 width: "20%",
//                 borderRadius: "2px",
//                 outline: "0",
//                 borderColor: "gray",
//                 borderStyle: "solid",
//               }}
//             />{" "}
//             <input
//               type="text"
//               style={{
//                 width: "20%",
//                 borderRadius: "2px",
//                 outline: "0",
//                 borderColor: "gray",
//                 borderStyle: "solid",
//                 marginLeft: "5.2em",
//               }}
//             />
//             <p></p>
//             <p></p>
//             <button
//               style={{
//                 borderRadius: "4px",
//                 backgroundColor: "#264653",
//                 marginLeft: "5.4em",
//               }}
//             >
//               <span style={{ color: "white" }}>
//                 <b>Set Goal</b>
//               </span>
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Goals;

import React from "react";

function Goals() {
  return (
    <div className="flex">
      <div className="flex-1">
        {/* Content for the left div */}
        <div className="mt-32 ml-9">
          <p>
            <span className="text-4xl font-bold">Welcome, Username!</span>{" "}
          </p>
          <span className="text-2xl">Add a new a target</span>
          <img
            src="https://www.incharge.org/wp-content/uploads/2015/06/Financial-Budget-Goals.gif"
            className="h-144 w-4/5 mb-20"
          />
        </div>
      </div>
      <div className="flex-1 mt-24">
        <span className="text-2xl text-blue-700">
          Please enter the details below
        </span>
        <form className="text-xl text-gray-500 mt-8">
          <p>Target Title</p>
          <input
            type="text"
            className="w-1/2 border-2 border-gray-300 rounded-md outline-none"
          />
          <p>Target Amount</p>
          <input
            type="text"
            className="w-1/2 border-2 border-gray-300 rounded-md outline-none"
          />
          <p>Period (Months) </p>
          <input
            type="text"
            className="w-1/2 border-2 border-gray-300 rounded-md outline-none"
          />
          <button className="rounded-md bg-blue-800 ml-14 text-white font-semibold">
            Set Goal
          </button>
        </form>
      </div>
    </div>
  );
}

export default Goals;
