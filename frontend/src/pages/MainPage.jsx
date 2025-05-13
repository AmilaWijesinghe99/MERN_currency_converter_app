import React, { useState } from "react";

export default function MainPage() {
  const [date, setDate] = useState(null);
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("  ");
  const [AmoutInTargetCurrency, setAmoutnInTargetCurrency] = useState(0);
  const [AmoutInSourceCurrency, setAmoutnInSourceCurrency] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(date, sourceCurrency, targetCurrency, AmoutInSourceCurrency);
  };
  return (
    <div>
      <h1 className="text-green-500 text-center text-3xl p-4 mt-4 font-bold">
        Currency Convert App
      </h1>

      <p className="text-center p-4 mt-2 cursor-pointer text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius unde
        doloribus laboriosam.
      </p>

      <div className=" flex items-center justify-center flex-col">
        <div className="w-full p-2 lg:w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label
                htmlFor="date"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Date:
              </label>
              <input
                onChange={(e) => setDate(e.target.value)}
                type="date"
                id={date}
                name={date}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-2">
              <label
                for="sourceCurrency"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Source Currency
              </label>
              <select
                onChange={(e) => setSourceCurrency(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name={sourceCurrency}
                id={sourceCurrency}
              >
                <option value="">Source Currency</option>
              </select>
            </div>

            <div className="mb-2">
              <label
                for="targetCourrency"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Target Currency
              </label>
              <select
                onChange={(e) => setTargetCurrency(e.target.value)}
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name={targetCurrency}
                id={targetCurrency}
              >
                <option value="">Target Currency</option>
              </select>
            </div>

            <div class="mb-2">
              <label
                for="AmoutInSourceCurrency"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Amount in Source Currency
              </label>
              <input
                onChange={(e) => setAmoutnInSourceCurrency(e.target.value)}
                type="number"
                id={AmoutInSourceCurrency}
                name={AmoutInSourceCurrency}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div class="mb-2">
              <button className="w-full lg:w-1/2 font-medium  text-white bg-green-500 px-3 py-2 mt-2 rounded-lg cursor-pointer hover:bg-green-600">
                Get the Target Currency
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
