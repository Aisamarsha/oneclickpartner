import FAQ from "../../faq";
import image1 from "../../../assets/img/houses/house1lg.png";
import OtherCost from "../../otherCost";
import ReviewBox from "../../reviewBox";

const Remortgage = () => {
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
      headingText: "Can I save money by remortgaging?",
      bodyText:
        "There may be a mortgage available with another lender on better terms than what your current lender is offering. Jordan Lynch will advise on the most cost-effective solution taking in to account the retention products available with your existing lender and comparing them to what’s available across the market.",
      subText:
        "If the terms available with your existing lender are most favourable, we will arrange a ‘product switch’, but if it makes sense to move to a new lender, we will arrange a remortgage.",
    },
    {
      headingId: "accordion-collapse-heading-2",
      headingText: "How can I raise additional funds against my house?",
      bodyText:
        "If you need money to pay for home improvements, school fees, weddings, university funds or new business ventures then you can remortgage your home to raise additional funds. You may decide this a more suitable option than taking out a separate loan. Our expert advisors will compare both options and find a solution tailored to your circumstances.",
    },
    {
      headingId: "accordion-collapse-heading-3",
      headingText: "My circumstances have changed, can a remortgage help me?",
      bodyText:
        "If your financial circumstances have changed, you may wish to pay a higher or lower amount each month or move to a fixed rate mortgage. Remortgaging can help you do this.",
      subText:
        "At Jordan Lynch, we have access to the whole of the mortgage market and understand the complexities of every individual situation, so we will be able to recommend the most suitable remortgage option for you.",
    },
    {
      headingId: "accordion-collapse-heading-4",
      headingText: "How much will it cost?",
      bodyText:
        "When you remortgage, you may have to pay an early repayment fee to your existing lender, and a mortgage arrangement fee to the new one. You may also need to pay a valuation fee and legal costs, though most new lenders offer to cover these costs.",
      subText:
        "Prior to applying for a re-mortgage Jordan Lynch will provide you with a schedule of costs outlining all fees payable and the new monthly payment.",
    },
    {
      headingId: "accordion-collapse-heading-5",
      headingText: "How do I re-mortgage?",
      bodyText:
        "Speak to one of our expert mortgage advisors who will confirm the amount you can borrow and the terms available. Once you are happy to proceed, we will apply to the lender on your behalf managing the whole process through to legal completion ensuring that the new mortgage completes when the early repayment charges expire with your existing lender.",
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Mortgages */}
      <div className="flex items-center justify-center flex-col mt-32">
        <br />
        <br />
        <span className="font-bold leading-none text-violet-700 text-[80px]">
          Remortgage
        </span>
        <span className="text-lg text-violet-900 leading-[80px]">
          Helping you to assess your options when thinking about switching
          mortgage.
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
          <div className="w-[700px] h-[600px]">
            <div className="flex flex-col">
              <div className="mb-10">
                <span className="font-semibold text-violet-700 leading-tight text-[50px]">
                  Thinking about remortgaging?
                </span>
              </div>
              <div className="">
                <p className="text-[20px] font-body leading-[30px] tracking-[0.2px]">
                  Whether you are looking to raise additional funds or simply
                  move to a more cost-effective mortgage, 1 Click Partner will
                  advise on the best options available and will manage the
                  remortgage application process with the new lender through to
                  legal completion.
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

        <div className="w-full mt-40 h-[800px] bg-violet-500 ">
          <div className="my-40 mx-80">
            <h1 className="text-6xl text-center text-white mb-10">
              Other things to consider
            </h1>
            <div className="text-white text-lg flex flex-col gap-10">
              <p>
                Think about how your situation may change in the future. Perhaps
                you plan to move house within the next few years or will want to
                remortgage again. Look at the portability, flexibility and early
                repayment fees involved with your new mortgage to ensure you’re
                happy with the conditions.
              </p>
              <p>
                Carefully consider the costs mentioned above and ensure you can
                afford them. If you are remortgaging to save money, it is
                advisable to factor in all the costs involved before deciding if
                it’s worth it. Jordan Lynch will provide clear details of all
                fees and repayments to help you with this decision.
              </p>
            </div>
          </div>
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

export default Remortgage;
