import coverPhoto from "../../assets/img/home-insurance-mortgage.png";
const Insuarances = () => {
  return (
    <div className=" min-h-screen ">
      <div className="container py-6 sm:px-20 px-4">
        <img className="w-full h-[350px] object-cover mb-10" src={coverPhoto} />
        <h1 className="text-4xl font-bold mb-4 text-violet-700">
          Types of Insurances we Offer
        </h1>
        <p className="text-xl mb-4  ">
          Here is all you need to know about our Insurances!
        </p>
        <div className="text-lg  p-4 rounded-xl border-violet-700">
          <span className="text-violet-700 font-bold">Life Cover</span>
          <div className="text-sm ">
            <p className="my-0.5 p-1 text-justify">
              Death is a terrible event and unfortunately something that
              everyone will have to experience at some time or another and
              having life cover in place can help. If life cover were to be
              taken care of as a pre-cautionary measure, a lot of unnecessary
              pain and anguish can be avoided so that our family members can
              grieve appropriately.
            </p>
            <p className="my-0.5   p-1 text-justify">
              Providing life cover for yourself and your partner comes at a very
              minimal cost, thus allowing you to ensure that your family members
              can grieve in peace. At Broker Advice we do not want to see you in
              a difficult financial situation that could have been avoided,
              which is why we encourage you to take out a simple life cover
              policy.
            </p>
            <p className="my-0.5   p-1 text-justify">
              This will ensure that your partner does not have the additional
              burden of paying a mortgage without any help, which could force
              them to abandon their lifestyle in order to cater for these
              expenses.
            </p>
            <p className="my-0.5   p-1 text-justify">
              The competitive and comprehensive products that we will offer you
              come from a selection of the UK’s top insurance providers, with
              names including Zurich, Aviva, AIG,LIverpool Victoria,Legal &
              General and others. Their policies aim to compensate with a
              guaranteed sum of money if the covered person should die or is
              diagnosed with a terminal illness and can claim during the term of
              the policy.
            </p>
          </div>
        </div>

        <div className="text-lg p-4 rounded-xl border-violet-700 mt-3">
          <span className="text-violet-700 font-bold">
            Critical Illness Cover
          </span>
          <div className="text-sm">
            <p className="my-0.5 p-1 text-justify">
              A critical illness can affect anyone and if you are prepared for
              such circumstances then you can focus on your recovery rather than
              worrying about what will happen to your financial situation.
              Critical illness cover is there to protect you from losing out in
              such circumstances, by providing financial security during these
              hard times. This money is there to either help with your mortgage,
              to fund a getaway in order to aid recovery or to help with bills.
              Whatever the purpose of the money, a critical illness payment can
              be of great help to you at these times, alleviating your worries.
            </p>
            <p className="my-0.5 p-1 text-justify">
              And how will you know if you’re covered? Lenders of critical
              illness cover will outline the list of illnesses that are covered
              in their policy, so that you are fully informed from the outset of
              the agreement. A pay-out will then be subject to compliance with
              the original scheme. Special terms and conditions may apply if the
              applicant has a long-standing illness, however all such things
              will be thoroughly discussed during your consultation.
            </p>
          </div>
        </div>

        <div className="text-lg p-4 rounded-xl border-violet-700">
          <span className="text-violet-700 font-bold">Income Protection</span>
          <div className="text-sm">
            <p className="my-0.5 p-1 text-justify">
              If for some reason your wages cease, what would you do? Life,
              bills and mortgage payments aren’t going to wait for you to catch
              up, they will continue to demand your attention.
            </p>
            <p className="my-0.5 p-1 text-justify">
              Luckily for you, if you take out income protection you can avoid
              any unpleasant demands and get back on track with great ease. If
              you are unable to work due to an accident or illness then an
              income protection can potentially replace your income until you
              return to work or reach retirement. This means that the monthly
              mortgage payment, council tax and other essential bills can be
              maintained throughout your period of illness meaning that you can
              recover without the need for financial stress.
            </p>
          </div>
        </div>
        <div className="text-lg p-4 rounded-xl border-violet-700">
          <span className="text-violet-700 font-bold">
            Buildings & Contents
          </span>
          <div className="text-sm">
            <p className="my-0.5 p-1 text-justify">
              A good buildings and contents insurance policy is crucial to
              protecting your home and belongings. Unfortunately, many people do
              not value the importance of this type of policy until it is too
              late, which is why we are making it known now because if you have
              no current claims to make then it is time to attain a great
              buildings and contents scheme.
            </p>
            <p className="my-0.5 p-1 text-justify">
              The most commonly occurring problem that applicants tend to make
              is placing an incorrect value on their possessions which then
              leads to difficulties in making claims. At Broker Advice we
              understand that for you, sifting through the 100’s of different
              policies can be a laborious and boring task. However, this is
              something that we do on a daily basis and so we can steer you
              clear of inadequate cover and push you in the direction of a great
              deal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insuarances;
