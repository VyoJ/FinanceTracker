import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddTransaction() {
  let user = JSON.parse(localStorage.getItem("user"));
  let userid = user.userId;

  const initialState = {
    user: userid,
    description: "",
    to: "",
    from: "",
    amount: 0,
    date: "",
    mode: "",
  };
  console.log(initialState);

  const [transaction, setTransaction] = useState(initialState);
  let navigate = useNavigate();

  const handleAdd = async (e) => {
    e.preventDefault();
    console.log(transaction);
    try {
      let response = await axios.post(
        "http://localhost:2000/transaction/create",
        transaction
      );
      if (response.data) {
        console.log(response.data);
        navigate("/Transactions");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-7xl mx-[5%] px-4 lg:px-8 py-6 mt-[5%] dark:bg-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
        Add New Transaction
      </h1>
      <form className="mt-5 space-y-6">
        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div className="sm:col-span-6">
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              htmlFor="txn_name"
            >
              Transaction Description
            </label>
            <input
              className="mt-1 ml-1 py-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              id="txn_name"
              type="text"
              onChange={(e) =>
                setTransaction((prevState) => ({
                  ...prevState,
                  description: e.target.value,
                }))
              }
            />
          </div>
          <div className="sm:col-span-3">
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              htmlFor="txn_to"
            >
              To
            </label>
            <input
              className="mt-1 ml-1 py-1 block w-full shadow-sm sm:text-sm border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              id="txn_to"
              type="text"
              onChange={(e) =>
                setTransaction((prevState) => ({
                  ...prevState,
                  to: e.target.value,
                }))
              }
            />
          </div>
          <div className="sm:col-span-3">
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              htmlFor="txn_from"
            >
              From
            </label>
            <input
              className="mt-1 ml-1 py-1 block w-full shadow-sm sm:text-sm border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              id="txn_from"
              type="text"
              onChange={(e) =>
                setTransaction((prevState) => ({
                  ...prevState,
                  from: e.target.value,
                }))
              }
            />
          </div>
          <div className="sm:col-span-3">
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              className="mt-1 ml-1 py-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              id="amount"
              step="10"
              type="number"
              onChange={(e) =>
                setTransaction((prevState) => ({
                  ...prevState,
                  amount: parseInt(e.target.value),
                }))
              }
            />
          </div>
          <div className="sm:col-span-1">
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              htmlFor="date"
            >
              Date
            </label>
            <input
              className="mt-1 ml-1 py-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              id="date"
              type="date"
              onChange={(e) =>
                setTransaction((prevState) => ({
                  ...prevState,
                  date: e.target.value,
                }))
              }
            />
          </div>
          <div className="sm:col-span-2">
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              htmlFor="mode"
            >
              Mode
            </label>
            <input
              className="mt-1 ml-1 py-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              id="mode"
              type="text"
              onChange={(e) =>
                setTransaction((prevState) => ({
                  ...prevState,
                  mode: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={handleAdd}
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;
