import React from "react";
import { FiDownload } from "react-icons/fi";

function Transactionlist() {
  return (
    <div style={{ marginTop: "4em" }}>
      <div>
        <p style={{ fontSize: "24px" }}>
          <b>Monthly Transaction History</b>
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <span
          style={{ fontSize: "16px", color: "#808080", marginRight: "50%" }}
        >
          See history of your transactions
        </span>
        <button style={{ backgroundColor: "#264653", color: "white" }}>
          <FiDownload /> Download All
        </button>
      </div>
      <div>
        <form>
          <table style={{ width: "90%", marginTop: "3em" }}>
            <thead
              style={{ color: "darkslategray", backgroundColor: "#E6E5E5" }}
            >
              <td style={{ width: "25%" }}>Transaction Date</td>
              <td style={{ width: "20%" }}>From</td>
              <td style={{ width: "20%" }}>To</td>
              <td style={{ width: "20%" }}>Mode</td>
              <td style={{ width: "20%" }}>Amount</td>
            </thead>
            <tbody>
                <td>10/10/2023</td>
                <td>Me</td>
                <td>ABCD</td>
                <td>UPI</td>
                <td>₹5000</td>
            </tbody>
          </table>
        </form>
        
      </div>
    </div>
  );
}

export default Transactionlist;
