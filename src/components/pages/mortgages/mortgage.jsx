import FAQ from "../../faq";
import image1 from "../../../assets/img/houses/house1lg.png";
const Mortgage = () => {
  return (
    <div className="min-h-screen">
      {/* Mortgages */}
      <div className="flex items-center justify-center flex-col mt-32">
        <span className="text-violet-700 text-lg">Mortgages</span>
        <br />
        <br />
        <span className="font-bold leading-none text-violet-700 text-[80px]">
          First-Time Buyer
        </span>
        <span className="font-bold leading-none text-violet-700 text-[80px]">
          Mortgages
        </span>
        <span className=" text-lg leading-[80px]">
          Helping you take your first step onto the property ladder
        </span>
      </div>

      {/* Start your journey */}
      <div className="flex justify-center mt-36">
        <div className="flex flex-row items-center  w-10/12 gap-[92px] ">
          <div className="">
            <img className="" src={image1} />
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
                  At Jordan Lynch, we have a specialist team of First Time Buyer
                  advisors that are here to help you every step of the way. Not
                  only will we advise you on the best mortgage available from
                  the whole market, we also guide you through the whole house
                  buying process. We will liaise with all professional parties
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
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default Mortgage;
