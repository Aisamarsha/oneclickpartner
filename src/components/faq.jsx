import React, { useState } from "react";

const FAQ = ({accordionData}) => {
  const [activeHeading, setActiveHeading] = useState("");

  

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
