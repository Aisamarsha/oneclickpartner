import FAQ from "../../faq";
import image1 from "../../../assets/img/houses/house1lg.png";
import OtherCost from "../../otherCost";
import ReviewBox from "../../reviewBox";
const FirstTimeBuyer = () => {
  const reviewData = [
    {
      rating: 5,
      reviewerName: "John Smith",
      date: "May 15, 2022",
      title: "Excellent First-Time Buyer Mortgage Experience",
      review:
        "I had an excellent experience with the first-time buyer mortgage program. The process was smooth and the team was very helpful throughout. I highly recommend it to anyone looking to buy their first home.",
    },
    {
      rating: 5,
      reviewerName: "Jane Doe",
      date: "April 25, 2022",
      title: "Great Real Estate and Mortgage Service",
      review:
        "I recently purchased a new home with the help of this real estate and mortgage company. The service was top-notch and the team made the process easy and stress-free. I would definitely use them again in the future.",
    },
    {
      rating: 5,
      reviewerName: "Michael Johnson",
      date: "March 20, 2022",
      title: "Positive Experience with First-Time Buyer Mortgage",
      review:
        "I had a positive experience with the first-time buyer mortgage program. The team was very knowledgeable and helpful. I would recommend this program to anyone looking to purchase their first home.",
    },
    {
      rating: 5,
      reviewerName: "Jessica Williams",
      date: "February 15, 2022",
      title: "Smooth Real Estate and Mortgage Process",
      review:
        "I recently purchased a new home and the real estate and mortgage process was smooth and easy. The team was very professional and helped me every step of the way. I would highly recommend this company.",
    },
    {
      rating: 5,
      reviewerName: "James Brown",
      date: "January 10, 2022",
      title: "Great First-Time Buyer Mortgage Program",
      review:
        "I had a great experience with the first-time buyer mortgage program. The team was very helpful and made the process easy. I would recommend this program to anyone looking to purchase their first home.",
    },
    {
      rating: 5,
      reviewerName: "John Smith",
      date: "May 15, 2022",
      title: "Excellent First-Time Buyer Mortgage Experience",
      review:
        "I had an excellent experience with the first-time buyer mortgage program. The process was smooth and the team was very helpful throughout. I highly recommend it to anyone looking to buy their first home.",
    },
    {
      rating: 5,
      reviewerName: "Jane Doe",
      date: "April 25, 2022",
      title: "Great Real Estate and Mortgage Service",
      review:
        "I recently purchased a new home with the help of this real estate and mortgage company. The service was top-notch and the team made the process easy and stress-free. I would definitely use them again in the future.",
    },
    {
      rating: 5,
      reviewerName: "Michael Johnson",
      date: "March 20, 2022",
      title: "Positive Experience with First-Time Buyer Mortgage",
      review:
        "I had a positive experience with the first-time buyer mortgage program. The team was very knowledgeable and helpful. I would recommend this program to anyone looking to purchase their first home.",
    },
    {
      rating: 5,
      reviewerName: "Emily Davis",
      date: "January 20, 2022",
      title: "Fantastic Real Estate and Mortgage Experience",
      review:
        "I had a fantastic experience with this real estate and mortgage company. They made the process of purchasing my first home so easy and stress-free. I highly recommend them to anyone looking for a great experience.",
    },
    {
      rating: 5,
      reviewerName: "David Miller",
      date: "December 15, 2021",
      title: "Positive First-Time Buyer Mortgage Experience",
      review:
        "I had a positive experience with the first-time buyer mortgage program. The team was very knowledgeable and helpful throughout the process. I would definitely recommend this program to anyone looking to purchase their first home.",
    },
    {
      rating: 5,
      reviewerName: "Linda Garcia",
      date: "November 10, 2021",
      title: "Smooth Real Estate and Mortgage Process",
      review:
        "I recently purchased a new home and the real estate and mortgage process was smooth and easy. The team was very professional and helped me every step of the way. I would highly recommend this company.",
    },
    {
      rating: 5,
      reviewerName: "Paul Rodriguez",
      date: "October 5, 2021",
      title: "Great First-Time Buyer Mortgage Program",
      review:
        "I had a great experience with the first-time buyer mortgage program. The team was very helpful and made the process easy. I would recommend this program to anyone looking to purchase their first home.",
    },
  ];
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
  return (
    <div className="min-h-screen">
      {/* Mortgages */}
      <div className="flex items-center justify-center flex-col mt-32">
        <br />
        <br />
        <span className="font-bold leading-none text-violet-700 text-[80px]">
          First-Time Buyer
        </span>
        <span className="font-bold leading-none text-violet-700 text-[80px]">
          Mortgages
        </span>
        <span className="text-lg text-violet-900 leading-[80px]">
          Helping you take your first step onto the property ladder
        </span>
      </div>

      {/* Start your journey */}
      <div className="flex justify-center mt-52">
        <div className="flex flex-row items-center  w-10/12 gap-[92px] ">
          <div className="h-full flex items-center">
            <img
              className="rounded-tl-[80px] rounded-br-[80px] rounded-tr-[10px] rounded-bl-[10px]  h-3/4 object-cover"
              src={image1}
            />
          </div>
          <div className="w-[700px] ">
            <div className="flex flex-col">
              <div className="mb-10">
                <span className="font-semibold text-violet-700 leading-tight text-[50px]">
                  Start your journey to your first home
                </span>
              </div>
              <div className="">
                <p className="text-[20px] font-body leading-[30px] tracking-[0.2px]">
                  Your first mortgage is one of the biggest commitments you will
                  ever make, and many first-time buyers find the process
                  daunting, but it doesn’t have to be.
                  <br />
                  <br />
                  At <span className="text-xl font-bold">1 Click Partner</span>,
                  we have a specialist team of First Time Buyer advisors that
                  are here to help you every step of the way. Not only will we
                  advise you on the best mortgage available from the whole
                  market, we also guide you through the whole house buying
                  process. We will liaise with all professional parties
                  including, estate agent, lender and solicitor so that the
                  process runs as smooth and as stress free as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="flex flex-col items-center mt-36">
        <div className="w-10/12 flex flex-row justify-center ">
          <span className="w-8/12 text-center text-violet-700 text-[50px] font-semibold leading-none">
            We've answered the questions you might have
          </span>
        </div>

        <div className="w-4/5 flex flex-col items-center mt-20">
          <FAQ accordionData={accordionData} />
        </div>

        <div className="w-10/12 flex flex-row justify-center mt-28 ">
          <span className="w-8/12 text-center text-violet-700 text-[50px] font-semibold leading-none">
            What other costs are involved with buying a home?
          </span>
        </div>

        <div className="w-4/5 flex flex-col items-center  mt-20">
          <OtherCost />
        </div>

        <div className="w-10/12 flex flex-row justify-center mt-60 ">
          <span className="w-8/12 text-center text-violet-700 text-[50px] font-semibold leading-none">
            What our clients think
          </span>
        </div>

        <div className="w-4/5 flex flex-col items-center  mt-20 mb-40">
          <ReviewBox reviewData={reviewData} />
        </div>
      </div>
    </div>
  );
};

export default FirstTimeBuyer;
