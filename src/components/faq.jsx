import React, { useState } from "react";

const FAQ = () => {
  const [activeHeading, setActiveHeading] = useState("");

  const accordionData = [
    {
      headingId: "accordion-collapse-heading-1",
      headingText: "How much deposit do I need?",
      bodyText:
        "Typically, first-time buyers are required to contribute a minimum deposit of 5% to purchase a property. However, interest rates are relatively high when borrowing at this level. For this reason, most first-time buyers aim to put down a 10% deposit as the interest rates are generally at least 1% lower when borrowing at 90% LTV (loan to value).",
    },
    {
      headingId: "accordion-collapse-heading-2",
      headingText: "How much can I borrow?",
      bodyText:
        "This depends on a number of variables including the size of your deposit, your age and most notably your income. Why not use our online calculator to obtain an estimate of how much you can borrow?",
      subText:
        "Please note this is for illustrative purposes only and we will only be able to confirm the precise amount you can borrow after we have completed a client fact find.",
    },
    {
      headingId: "accordion-collapse-heading-3",
      headingText: "How much will my monthly payments be?",
      bodyText:
        "This is a good question because it is important to choose a mortgage that you can comfortably afford. The monthly repayments will depend on how much you borrow, the number of years you wish to borrow the money for and the interest rate payable.",
      subText:
        "Use our mortgage cost calculator for an estimate of how much you will pay each month.",
    },
    {
      headingId: "accordion-collapse-heading-4",
      headingText: "What is Stamp Duty and how much will I pay?",
      bodyText:
        "Stamp Duty is a tax levied on property purchases by the Government. The rates payable vary depending on the purchase price. Use our ‘Stamp Duty’ calculator to work out how much you will pay.",
      subText:
        "The good news is that most first-time buyers are exempt from paying this tax as the UK Government waives it on purchases below £300,000.",
    },
    {
      headingId: "accordion-collapse-heading-5",
      headingText: "How do I apply for a mortgage?",
      bodyText:
        "The first step is obtaining a mortgage agreement in principle from your chosen lender. This tells you how much they are willing to lend you, based on the information that you provide. Typically, Jordan Lynch can obtain an agreement in principle on your behalf within a few hours, this will then allow the property search to commence!",
      subText:
        "When you have found the perfect home, we will submit a full mortgage application to the most appropriate lender. Upon application an underwriter will look at the documentation provided, such as pay slips and bank statements. This is a more in-depth look at your personal and financial position, a property valuation is also normally booked in at this stage. Once the lender is satisfied with all aspects of the case, a binding mortgage offer will then be issued.",
    },
  ];

  const handleClick = (e) => {
    const headingId = e.currentTarget.getAttribute("aria-controls");
    if (activeHeading === headingId) {
      setActiveHeading("");
    } else {
      setActiveHeading(headingId);
    }
  };
  return (
    <div
      id="accordion-collapse"
      data-accordion="collapse"
      className="bg-white w-full "
    >
      {accordionData.map(
        ({ headingId, headingText, bodyText, subText }, index) => {
          return (
            <React.Fragment key={headingId}>
              <h2 id={headingId}>
                <button
                  type="button"
                  className={`flex items-center justify-between w-full p-5 font-semibold text-left text-2xl text-violet-700 border border-b-0 border-violet-200 ${
                    index === 0 ? "rounded-t-xl" : ""
                  } focus:ring-4 focus:ring-violet-200 dark:focus:ring-violet-800 dark:border-violet-700 dark:text-violet-400 hover:bg-violet-100 dark:hover:bg-violet-800`}
                  onClick={handleClick}
                  aria-expanded={activeHeading === headingId}
                  aria-controls={headingId}
                >
                  <span>{headingText}</span>
                  <svg
                    data-accordion-icon
                    className={`w-6 h-6 ${
                      activeHeading === headingId ? "rotate-180" : "shrink-0"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id={`${headingId}-body`}
                className={`${
                  activeHeading === headingId ? "flex flex-col" : "hidden"
                } w-full p-5 font-light bg-white rounded-lg mt-1`}
                aria-labelledby={headingId}
              >
                <p className="text-gray-700 m-2">{bodyText}</p>
                {subText && <p className="text-gray-700 m-2">{subText}</p>}
              </div>
            </React.Fragment>
          );
        }
      )}
    </div>
  );
};

export default FAQ;
