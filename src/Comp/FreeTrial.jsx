/* eslint-disable no-irregular-whitespace */
import one from "../assets/one.svg";
import two from "../assets/two.svg";
import three from "../assets/three.svg";
import four from "../assets/four.svg";
import five from "../assets/five.svg";
import six from "../assets/six.svg";
import seven from "../assets/seven.svg";
import eight from "../assets/eight.svg";
import nine from "../assets/nine.svg";
import ten from "../assets/ten.svg";
import eleven from "../assets/eleven.svg";
import twolve from "../assets/twolve.svg";
import thirteen from "../assets/thirteen.svg";
import fourteen from "../assets/fourteen.svg";
import fifteen from "../assets/fifteen.svg";
import secondHand from "../assets/secondHand.svg";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

// import { useInView } from "react-intersection-observer";

const FreeTrial = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const bounceAnimation = useSpring({
    transform: inView ? "scale(1.2)" : "scale(1)",
    config: { duration: 1000 },
  });

  const data = [
    {
      id: 1,
      logo: one,
      heading: "AI-Powered Engagement",
      description: "Engages visitors with AI for",
      desc2: "enhanced customer interaction.",
    },
    {
      id: 2,
      logo: two,
      heading: "Lead Qualification  ",
      description: "Automatically qualifies leads for",
      desc2: "better conversion rates.",
    },
    {
      id: 3,
      logo: three,
      heading: "Appointment Scheduling",
      description: "Schedules appointments",
      desc2: "efficiently, improving customer",
      desc3: "service experience.",
    },
    {
      id: 4,
      logo: four,
      heading: "24/7 Availability ",
      description: "Offers round-the-clock service,",
      desc2: "never missing opportunities.",
    },
    {
      id: 5,
      logo: five,
      heading: "Personalized Interactions",
      description: "Tailors conversations for personal",
      desc2: "touch in customer service.",
    },
    {
      id: 6,
      logo: six,
      heading: "Analytics and Reporting",
      description: "Provides insightful data for",
      desc2: "informed business decisions.",
    },
    {
      id: 7,
      logo: seven,
      heading: "Easy Integration",
      description: "Seamlessly integrates with existing",
      desc2: "websites and platforms.",
    },
    {
      id: 8,
      logo: eight,
      heading: "Scalability",
      description: "Easily scales to match business",
      desc2: "growth and demand.",
    },
    {
      id: 9,
      logo: nine,
      heading: "Multilingual Support",
      description: "Communicates in multiple",
      desc2: "languages for broader reach.",
    },

    {
      id: 10,
      logo: ten,
      heading: "Natural Language Processing",
      description: "Understands and responds in",
      desc2: "natural, conversational language.",
    },
    {
      id: 11,
      logo: eleven,
      heading: "Customizable AI Responses",
      description: "Allows customization of AI",
      desc2: "responses for brand alignment.",
    },
    {
      id: 12,
      logo: twolve,
      heading: "Real-Time Customer Support",
      description: "Provides instant support,",
      desc2: "enhancing customer satisfaction.",
    },
  ];

  return (
    <div className="bg-[#27272E] flex flex-col lg:items-center justify-center pt-[64px] lg:pt-[150px] pb-[80px] lg:pb-[350px] relative">
      <div className="text-white text-center">
        <h1 className="font-['Poppins'] text-[20px]">Join The Revolution</h1>
        <h1 className="text-[28px] lg:text-[80px] font-['Sharp-Grotesk-Medium'] mt-[16px] lg:mt-[0px] px-[30px] lg:px-[0px]">
          Start your <span className="text-[#3662FE]">FREE Trial.</span>
        </h1>
        <h1 className="text-[#999FAE] mt-[24px] lg:mt-[16px] lg:text-[18px] font-['Poppins']">
          Get Started In Less Than 60 Seconds • Cancel Anytime
        </h1>
      </div>

      <div className="block lg:hidden flex overflow-y-auto no-scrollbar lg:grid grid-cols-4 gap-[8px] lg:gap-[24px] mt-[40px] lg:mt-[56px] px-[16px] lg:px-[200px]">
        {data.map((card) => (
          <div
            key={card.id}
            className="bg-[#2F2F38] pt-[48px] pb-[48px] px-[30px] rounded-[30px] min-w-[342px]"
          >
            <img src={card.logo} alt={`Logo ${card.id}`} className="mx-auto" />
            <h2 className="text-[20px] text-white font-normal font-['Poppins'] text-center mt-[25px]">
              {card.heading}
            </h2>
            <div className="text-[16px] text-[#999FAE] text-center font-['poppins'] mt-[16px]">
              <h1>{card.description}</h1>
              <h1>{card.desc2}</h1>
              <h1>{card.desc3}</h1>
            </div>
          </div>
        ))}
        <div className="block lg:hidden flex justify-center gap-[8px] lg:mt-[24px]">
         {/* Card 1 */}
          <div className="bg-[#2F2F38] rounded-[30px] pt-[48px] pb-[48px] px-[30px] min-w-[342px]">
            <img src={thirteen} alt="Logo 1" className="mx-auto" />
            <h2 className="text-[20px] text-white font-normal font-['Poppins'] text-center mt-[25px]">
              User-Friendly Interface
            </h2>
            <div className="text-[16px] text-[#999FAE] text-center font-['poppins'] mt-[16px]">
              <h1>Easy-to-use interface for efficient</h1>
              <h1>management and control.</h1>
            </div>
          </div>

         {/* Card 2 */}
          <div className="bg-[#2F2F38] rounded-[30px] pt-[48px] pb-[48px] px-[30px] min-w-[342px]">
            <img src={fourteen} alt="Logo 2" className="mx-auto" />
            <h2 className="text-[20px] text-white font-normal font-['Poppins'] text-center lg:mt-[25px]">
              Expert Sales Training
            </h2>
            <div className="text-[16px] text-[#999FAE] text-center font-['poppins'] lg:mt-[16px]">
              <p>Expertly trained in cutting-edge</p>
              <p>sales strategies from the greatest</p>
              <p>sales books ever for superior</p>
              <p>performance.</p>
            </div>
          </div>

         {/* Card 3 */}
          <div className="bg-[#2F2F38] rounded-[30px] pt-[48px] pb-[48px] px-[30px] min-w-[342px]">
            <img src={fifteen} alt="Logo 3" className="mx-auto" />
            <h2 className="text-[20px] text-white font-normal font-['Poppins'] text-center lg:mt-[25px]">
              CRM
            </h2>
            <div className="text-[16px] text-[#999FAE] text-center font-['poppins'] lg:mt-[16px]">
              <h1>Integrates with CRM for streamlined</h1>
              <h1>customer relationship </h1>
              <h1>management</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:grid grid-cols-4 gap-[24px] mt-[40px] lg:mt-[56px] lg:px-[200px]">
        {data.map((card) => (
          <div
            key={card.id}
            className="bg-[#2F2F38] pt-[48px] pb-[48px] px-[30px] rounded-[30px] "
          >
            <img src={card.logo} alt={`Logo ${card.id}`} className="mx-auto" />
            <h2 className="text-[20px] text-white font-normal font-['Poppins'] text-center lg:mt-[25px]">
              {card.heading}
            </h2>
            <div className="text-[16px] text-[#999FAE] text-center font-['poppins'] lg:mt-[16px]">
              <h1>{card.description}</h1>
              <h1>{card.desc2}</h1>
              <h1>{card.desc3}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden lg:block lg:flex justify-center gap-[24px] lg:mt-[24px]">
        {/* Card 1 */}
        <div className="bg-[#2F2F38] rounded-[30px] pt-[48px] pb-[48px] px-[30px]">
          <img src={thirteen} alt="Logo 1" className="mx-auto" />
          <h2 className="text-[20px] text-white font-normal font-['Poppins'] text-center lg:mt-[25px]">
            User-Friendly Interface
          </h2>
          <div className="text-[16px] text-[#999FAE] text-center font-['poppins'] lg:mt-[16px]">
            <h1>Easy-to-use interface for efficient</h1>
            <h1>management and control.</h1>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#2F2F38] rounded-[30px] pt-[48px] pb-[48px] px-[30px]">
          <img src={fourteen} alt="Logo 2" className="mx-auto" />
          <h2 className="text-[20px] text-white font-normal font-['Poppins'] text-center lg:mt-[25px]">
            Expert Sales Training
          </h2>
          <div className="text-[16px] text-[#999FAE] text-center font-['poppins'] lg:mt-[16px]">
            <p>Expertly trained in cutting-edge</p>
            <p>sales strategies from the greatest</p>
            <p>sales books ever for superior</p>
            <p>performance.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#2F2F38] rounded-[30px] pt-[48px] pb-[48px] px-[30px]">
          <img src={fifteen} alt="Logo 3" className="mx-auto" />
          <h2 className="text-[20px] text-white font-normal font-['Poppins'] text-center lg:mt-[25px]">
            CRM
          </h2>
          <div className="text-[16px] text-[#999FAE] text-center font-['poppins'] lg:mt-[16px]">
            <h1>Integrates with CRM for streamlined</h1>
            <h1>customer relationship </h1>
            <h1>management</h1>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center lg:text-[32px] font-['Poppins'] font-bold text-[#fff] mt-[100px]">
          <span className="py-[20px] lg:py-[29px] px-[32px] lg:px-[44px] border-b-[3px] border-[#0084CB] shadow-2xl bg-[linear-gradient(180deg,_#36DAFE_0%,_#129CE9_100%)] rounded-[20px]">
            Start Your Free Trial Today 》
          </span>
        </h1>
      </div>
      <div className="hidden lg:block absolute top-[-580px] left-0" ref={ref}>
        <animated.img
          src={secondHand}
          alt="firstHand"
          style={{ ...bounceAnimation, width: "760px" }}
        />
      </div>
    </div>
  );
};

export default FreeTrial;
