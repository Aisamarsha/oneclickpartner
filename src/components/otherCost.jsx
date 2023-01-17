import React from "react";

function OtherCost() {
  const data = [
    {
      band: "less than £125k",
      normalRate: "0%",
      additionalProperty: "3%",
    },
    {
      band: "£125k to £250k",
      normalRate: "2%",
      additionalProperty: "5%",
    },
    {
      band: "£250k to £925k",
      normalRate: "5%",
      additionalProperty: "8%",
    },
    {
      band: "£925k to £1.5m",
      normalRate: "10%",
      additionalProperty: "13%",
    },
    {
      band: "rest over £1.5m",
      normalRate: "12%",
      additionalProperty: "15%",
    },
  ];

  return (
    <div className="w-3/4 flex flex-col justify-center">
      <div>
        <p className="text-lg">Stamp Duty</p>
      </div>
      <table className="table-auto w-full ">
        <thead>
          <tr className=" text-violet-700 text-xl font-light">
            <th className="text-left py-2 w-1/3">Band</th>
            <th className="px-4 py-2 w-1/3">Normal rate</th>
            <th className="px-4 py-2 w-1/3">Additional Property</th>
          </tr>
        </thead>
        <tbody className="">
          {data.map((item, index) => (
            <tr key={index} className="text-center text-xl">
              <td className="text-left py-2">{item.band}</td>
              <td className=" px-4 py-2">{item.normalRate}</td>
              <td className=" px-4 py-2">{item.additionalProperty}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-7/12 text-lg mt-5">
        <p>
          * An additional property purchased for less than £40k will attract 0%
          tax. For purchases from £40k to £125k the rate will be 3% on full
          purchase price.
        </p>
        <p>Deposit</p>
        <p>Mortgage application and product fees</p>
        <p>Valuation fee</p>
        <p>Optional Homebuyer’s Report or Full Structural Survey</p>
        <p>Legal fees</p>
        <p>Moving costs</p>
        <p>Building and contents insurance</p>
      </div>
    </div>
  );
}

export default OtherCost;
