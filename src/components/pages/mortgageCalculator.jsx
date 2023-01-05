import React, { useState } from "react";

const MortgageCalculator = () => {
  const [formData, setFormData] = useState({
    loanAmount: 0,
    interestRate: 0,
    loanTerm: 0,
  });
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const calculateMortgage = (event) => {
    event.preventDefault();
    const { loanAmount, interestRate, loanTerm } = formData;
    const monthlyInterestRate = interestRate / 100 / 12;
    const termInMonths = loanTerm * 12;
    const monthlyPayments =
      loanAmount *
      (monthlyInterestRate /
        (1 - Math.pow(1 + monthlyInterestRate, -termInMonths)));
    setMonthlyPayment(
      monthlyPayments < 1 ? monthlyPayments : Math.round(monthlyPayments)
    );
  };

  return (
    <React.Fragment>
      <div className="min-h-[700px] mt-6">
        <div className="sm:grid-cols-2 sm:gap-0 grid grid-cols-1 gap-4">
          <form className="max-w-lg mx-auto pt-10 pb-8 px-8 bg-white rounded-lg shadow-lg col-span-1">
            <div className="text-5xl font-bold text-center my-4">
              Mortgage Calculator
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="loanAmount"
              >
                Loan Amount
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="loanAmount"
                name="loanAmount"
                type="number"
                value={formData.loanAmount}
                onChange={handleChange}
                min="0"
                step="1000"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="interestRate"
              >
                Interest Rate (%)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="interestRate"
                name="interestRate"
                type="number"
                value={formData.interestRate}
                onChange={handleChange}
                min="0"
                step="0.01"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="loanTerm"
              >
                Loan Term:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="loanTerm"
                name="loanTerm"
                type="number"
                placeholder="0 years"
                value={formData.loanTerm}
                onChange={handleChange}
              />
            </div>
            <button
              className="bg-violet-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={calculateMortgage}
            >
              Calculate
            </button>
          </form>

          <div className="text-2xl font-bold col-span-1 text-center">
            <div>Your monthly mortgage payment is:</div>
            <div className="text-5xl font-bold text-center mt-10 text-violet-700">
              ${monthlyPayment}{" "}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MortgageCalculator;
