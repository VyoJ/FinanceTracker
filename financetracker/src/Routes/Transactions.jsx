import React from "react";
import Card from "./card1";
import Card1 from "./card2";
import Transactionlist from "./transactionlist";
function Transaction() {
  const containerStyle = {
    display: "flex",
    width: "100vw", // Use the full viewport width
  };

  const leftDivStyle = {
    flex: "2", // Take up half of the available space
    // Add your styles as needed
  };

  const rightDivStyle = {
    flex: "1", // Take up half of the available space
    // Add your styles as needed
  };

  const buttonStyle = {
    color: "white",
    backgroundColor: "#264653",
    fontSize: "40px",
    borderRadius: "10px",
    width: "80%",
    marginBottom: "1em",
  };

  return (
    <div style={containerStyle}>
      <div style={leftDivStyle}>
        {/* Content for the left div */}
        <div style={{ marginTop: "4em", marginLeft: "3.5em" }}>
          <p>
            <b>
              <span style={{ fontSize: "24px", marginBottom: "1em" }}>
                Welcome, Username!
              </span>{" "}
            </b>
          </p>
          <span style={{ marginLeft: "0.5em", color: "#264653" }}>
            <b>Transaction Summary</b>
          </span>
          <div style={{ display: "flex" }}>
            <Card />
            <Card1 />
          </div>
          <Transactionlist />
        </div>
      </div>
      <div style={rightDivStyle}>
        {/* Content for the right div */}
        <div style={{ marginTop: "5em" }}>
          <button style={buttonStyle}>
            <img
              src="https://cdn0.iconfinder.com/data/icons/basic-e-commerce-line-color/48/Receipt_add-512.png"
              style={{ height: "10%", width: "10%" }}
            />
            <span style={{ marginLeft: "10%", marginRight: "5%" }}>
              Add Transaction
            </span>
          </button>
          <button style={buttonStyle}>
            <img
              src="https://cdn0.iconfinder.com/data/icons/basic-e-commerce-line-color/48/Receipt_add-512.png"
              style={{ height: "10%", width: "10%" }}
            />
            <span style={{ marginLeft: "10%", marginRight: "5%" }}>
              Edit Transaction
            </span>
          </button>
          <button style={buttonStyle}>
            <img
              src="https://cdn0.iconfinder.com/data/icons/basic-e-commerce-line-color/48/Receipt_add-512.png"
              style={{ height: "10%", width: "10%" }}
            />
            <span style={{ marginLeft: "2%" }}>Delete Transaction</span>
          </button>
        </div>
        <img src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/49695/money-with-wings-emoji-clipart-md.png" style={{width:'80%',height:'70%'}}/>
      </div>
    </div>
  );
}

export default Transaction;
