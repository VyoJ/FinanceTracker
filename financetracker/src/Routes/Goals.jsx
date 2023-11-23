import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Goals() {
  let user = JSON.parse(localStorage.getItem("user"));
  let userid = user.userId;

  const initialState = {
    user: userid,
    description: "",
    amount: 0,
    period: 0
  };
  console.log(initialState);

  const [goal, setGoal] = useState(initialState);
  let navigate = useNavigate();

  const handleAdd = async (e) => {
    e.preventDefault();
    console.log(goal);
    try {
      let response = await axios.post(
        "http://localhost:2000/goal/create",
        goal
      );
      if (response.data) {
        console.log(response.data);
        navigate("/Dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="">
        <p className="text-4xl font-bold m-8">Welcome, {user.name}!</p>{" "}
        <img
          src="https://www.incharge.org/wp-content/uploads/2015/06/Financial-Budget-Goals.gif"
          className="h-2/5 w-1/2 mx-auto mt-8"
        />
      </div>
      <div className="mt-[20%]">
        <span className="text-2xl font-semibold text-blue-700">
          Please enter the details below
        </span>
        <form className="text-xl text-gray-500 mt-6">
          <p>Target Title</p>
          <input
            type="text"
            className="w-1/2 border-2 border-gray-300 rounded-md outline-none"
            onChange={(e) =>
              setGoal((prevState) => ({
                ...prevState,
                description: e.target.value,
              }))
            }
          />
          <p>Target Amount</p>
          <input
            type="number"
            className="w-1/2 border-2 border-gray-300 rounded-md outline-none"
            onChange={(e) =>
              setGoal((prevState) => ({
                ...prevState,
                amount: parseInt(e.target.value),
              }))
            }
          />
          <p>Time Period (Months) </p>
          <input
            type="number"
            className="w-1/2 border-2 border-gray-300 rounded-md outline-none"
            onChange={(e) =>
              setGoal((prevState) => ({
                ...prevState,
                period: parseInt(e.target.value),
              }))
            }
          />
          <br />
          <button
            type="submit"
            className="text-white my-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={handleAdd}
          >
            Set Goal
          </button>
        </form>
      </div>
    </div>
  );
}

export default Goals;
