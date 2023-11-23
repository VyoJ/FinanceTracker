import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Transactions() {
  let user = JSON.parse(localStorage.getItem("user"));

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTxn, setSelectedTxn] = useState("");

  async function getTxns() {
    await axios
      .get("http://localhost:2000/transaction/view")
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  useEffect(() => {
    getTxns();
  }, []);

  const handleDelete = async (e) => {
    if (selectedTxn) {
      await axios
        .delete(`http://localhost:2000/transaction/delete/${selectedTxn}`)
        .then((response) => {
          console.log("Deleted transaction");
          window.location.reload(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Nothing selected");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="text-2xl font-bold m-4">Welcome {user.name}!</div>
      <div className="flex">
        <Link to="/AddTransaction">
          <button
            type="button"
            className="text-white mx-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Add Transaction
          </button>
        </Link>
        <button
          type="button"
          className="text-white mx-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          // onClick={handleAdd}
        >
          Edit Transaction
        </button>
        <button
          type="button"
          className="text-white mx-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={handleDelete}
        >
          Delete Transaction
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md m-4 sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-all"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all" class="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Transaction Description
              </th>
              <th scope="col" className="px-6 py-3">
                To
              </th>
              <th scope="col" className="px-6 py-3">
                From
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Mode
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((txns, index) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input
                      id="checkbox-table-1"
                      type="checkbox"
                      onChange={() => {
                        setSelectedTxn(txns._id);
                      }}
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-table-1" class="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {txns.description}
                </td>
                <td className="px-6 py-4">{txns.to}</td>
                <td className="px-6 py-4">{txns.from}</td>
                <td className="px-6 py-4">{txns.amount}</td>
                <td className="px-6 py-4">{txns.mode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Transactions;
