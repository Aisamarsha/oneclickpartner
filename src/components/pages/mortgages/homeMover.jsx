import FAQ from "../../faq";
import image1 from "../../../assets/img/houses/house1lg.png";
import OtherCost from "../../otherCost";
import ReviewBox from "../../reviewBox";

const HomeMover = () => {
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
      headingText: "How much can I borrow?",
      bodyText:
        "This depends on a number of variables including the size of your deposit, your age and most notably your income. Why not use our online calculator to obtain an estimate of how much you can borrow?",
      subText:
        "Please note this is for illustrative purposes only and we will only be able to confirm the precise amount you can borrow after we have completed a client fact find.",
    },
    {
      headingId: "accordion-collapse-heading-2",
      headingText:
        "Can I take my existing mortgage with me?How much can I borrow?",
      bodyText:
        "TIf your existing mortgage product is ‘portable’ then you should be able to take the amount your currently owe with you to the new property and take a top-up loan from the same lender if you require further funds.",
      subText:
        "The process involves going through a whole new underwriting process with your existing lender, and Jordan Lynch will represent you in the same way. If your circumstances have changed the lender may not provide the mortgage amount you require, in which case we will advise you on options available with alternative lenders.",
    },
    {
      headingId: "accordion-collapse-heading-3",
      headingText: "I want a new mortgage deal when I move",
      bodyText:
        "The main reasons you may wish to find a new mortgage when you move home include borrowing additional funds or wanting a more favourable interest rate. However, you should check whether your existing mortgage has early repayment charges as if it does it is often best advice to port that mortgage to the new property and take a top up loan from the same lender if additional funds are required.",
    },
    {
      headingId: "accordion-collapse-heading-4",
      headingText: "How do I apply for a home mover mortgage?",
      bodyText:
        "Get in touch with Jordan Lynch and we will normally be able to provide you with a mortgage agreement in principle within a few hours. This will confirm the amount you can borrow, which means the estate agent will allow you to view properties.",
      subText:
        "When you have found the right home for you and had an offer accepted, Jordan Lynch will then submit your mortgage application to the lender and will liaise with all professional parties to help ensure that the sale and purchase completes in a timely manner.",
    },
    {
      headingId: "accordion-collapse-heading-5",
      headingText: "What costs are involved with moving home?",
      bodyText:
        "There are several costs when moving home, such as: Estate agent fees for selling your existing property Valuation fees for the new property Lender and broker fees for arranging the mortgage Legal fees payable to the Solicitor Stamp Duty when the new purchase completes",
      subText:
        "Jordan Lynch will be able to provide you with a full schedule of costs once you have identified the property you wish to buy and confirmed how much you want to borrow.",
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Mortgages */}
      <div className="flex items-center justify-center flex-col mt-32">
        <br />
        <br />
        <p>Mortgages</p>
        <span className="font-bold leading-none text-violet-700 text-[80px] mt-4">
          Home Movers
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
          <div className="w-[700px] h-[600px] ">
            <div className="flex flex-col">
              <div className="mb-10">
                <span className="font-semibold text-violet-700 leading-tight text-[50px]">
                  Thinking About Moving Home?
                </span>
              </div>
              <div className="">
                <p className="text-[20px] font-body leading-[30px] tracking-[0.2px]">
                  Whether you are looking to upsize, downsize or relocate, there
                  are a lot of things to consider. Here we answer all the
                  questions you may have about home mover mortgages and the
                  costs involved when moving to a new house.
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


        <div className="w-10/12 flex flex-row justify-center mt-36 ">
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

export default HomeMover;
