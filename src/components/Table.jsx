import useFetch from "../../hooks/useFetch";

function Table() {
  // Fetch data transaksi dari API
  const [data] = useFetch("http://localhost:3000/transaction");

  if (!data || data.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="overflow-x-auto mt-8 px-20 w-auto">
      <table className="min-w-full border-collapse border border-gray-200 shadow-md rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
              Date & Time
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
              Type
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
              Source
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
              Description
            </th>
            <th className="border border-gray-300 px-4 py-2 text-right text-sm font-medium text-gray-700">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((transaction, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
                {transaction.date}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
                {transaction.type}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
                {transaction.source}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">
                {transaction.description}
              </td>
              <td
                className={`border border-gray-300 px-4 py-2 text-sm font-semibold text-right ${
                  transaction.type === "DEBIT"
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {transaction.Amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
