import { useState } from "react";

function Topup() {
  const [source, setSource] = useState("900782139 (Giz)");
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Transfer Submitted:", {
      source,
      amount,
      notes,
    });
    alert("Topup Successful!");
  };

  return (
    <div className="mt-16">
      <h1 className="max-w-lg mx-auto text-3xl font-bold mb-4 text-gray-800">
        Top up
      </h1>
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          {/* Amount */}
          <div className="mb-6">
            <div className="shadow-md rounded-md p-3 focus-within:border-gray-500 bg-gray-100">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="IDR 0"
                className="w-full border-none focus:ring-0 focus:outline-none bg-transparent text-gray-800 text-xl font-semibold underline"
              />
            </div>
          </div>

          {/* Recipient */}
          <div className="mb-6">
            <div className="flex items-center shadow-md border-gray-300 rounded-[16px] bg-gray-50 overflow-hidden">
              {/* Label "To" */}
              <div className="bg-gray-200 px-8 py-2 text-lg font-bold text-gray-800 rounded-l-[16px] border rounded-[16px] shadow-lg ">
                From
              </div>

              {/* Dropdown */}
              <div className="flex-1 relative">
                <select
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  className="w-full bg-transparent px-4 py-3 text-gray-800 text-sm focus:outline-none appearance-none"
                >
                  <option value="Credit Card">Credit Card</option>
                  <option value="Debit Card">Debit Card</option>
                </select>
                {/* Dropdown Icon */}
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                  ▼
                </span>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="mb-6">
            <textarea
              placeholder="Notes:"
              onChange={(e) => setNotes(e.target.value)}
              value={notes}
              className="bg-gray-50 border border-gray-300 rounded-[20px] px-5 pt-4 w-full text-sm font-medium text-gray-800 placeholder:text-gray-800 placeholder:font-medium focus:outline-none focus:ring-2 focus:ring-gray-300"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full shadow-[#238f7c] bg-[#2CA18E] text-white font-bold py-3 rounded-md shadow-md hover:bg-[#238f7c] transition"
          >
            Transfer
          </button>
        </form>
      </div>
    </div>
  );
}

export default Topup;
