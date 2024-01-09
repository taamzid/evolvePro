/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import Marque from "react-fast-marquee";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const fadeUpAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(-20px)",
    config: {
      duration: 800, // Adjust the duration as needed
    },
    easing: "ease-in-out",
  });

  //button
  return (
    <div
      className="pt-[110px] lg:pt-[150px] pb-[71px] lg:pb-[56px] bg-[url('./assets/bg-hero-mobile.svg')] lg:bg-[url('./assets/Hero.svg')] bg-cover"
      ref={ref}
    >
      <animated.div style={fadeUpAnimation}>
        <div className="block lg:hidden px-[16px] lg:px-[0px] text-center text-[#222222] text-[32px] lg:text-[82px] lg:leading-[82px] font-semibold font-['Sharp-Grotesk-SemiBold']">
          <h1>"Transform Your Website Into A 24/7 Sales Powerhouse with EvolvePro.AI"</h1>
        </div>
      </animated.div>

      <animated.div style={fadeUpAnimation}>
        <div className="hidden lg:block px-[16px] lg:px-[0px] text-center text-[#222222] text-[32px] lg:text-[82px] lg:leading-[82px] font-semibold font-['Sharp-Grotesk-SemiBold']">
          <h1>"Transform Your Website Into</h1>
          <h1>a 24/7 Sales Powerhouse with</h1>
          <h1>EvolvePro.AI"</h1>
        </div>
      </animated.div>

      <div className="px-[16px] lg:px-[0px] mt-[16px] lg:mt-10 text-[16px] lg:text-[24px] text-center font-bold text-[#FFFFFF] font-['Poppins']">
        <h1>
          <span className="text-[#D4D6FB]">Leverage</span> Cutting-Edge AI{" "}
          <span className="text-[#D4D6FB]">to</span> Engage Visitors, Qualify
          Leads, <span className="text-[#D4D6FB]">and</span> Skyrocket
        </h1>
        <h1>Your Online Conversions</h1>
      </div>
      <div className="mt-[230px] lg:mt-[100px]">
        <h1 className="text-center lg:text-[32px] font-['Poppins'] font-bold text-[#fff]">
          <span className="py-[20px] lg:py-[29px] px-[32px] lg:px-[44px] border-b-[3px] border-[#0084CB] shadow-2xl bg-[linear-gradient(180deg,_#36DAFE_0%,_#129CE9_100%)] rounded-[20px]">
            Start Your Free Trial Today 》
          </span>
        </h1>
      </div>
      <div className="px-[16px] lg:px-[0px] text-center mt-16 text-[14px] lg:text-[18px] font-normal text-[#DADADA] font-['Poppins']">
        <h1>Get Started In Less Than 60 Seconds • Cancel Anytime</h1>
      </div>
      <div className="text-center mt-[74px] lg:mt-[120px] text-[18px] lg:text-[32px] text-[#D4D6FB] font-['Poppins']">
        <Marque>
          <div className="space-x-5 mr-[48px] inline-flex text-customColor rounded">
            Start Your Free Trial Today
          </div>
          <div className="space-x-5 mr-[48px] inline-flex text-customColor rounded">
            Start Your Free Trial Today
          </div>
          <div className="space-x-5 mr-[48px] inline-flex text-customColor rounded">
            Start Your Free Trial Today
          </div>
          <div className="space-x-5 mr-[48px] inline-flex text-customColor rounded">
            Start Your Free Trial Today
          </div>
          <div className="space-x-5 mr-[48px] inline-flex text-customColor rounded">
            Start Your Free Trial Today
          </div>
          <div className="space-x-5 mr-[48px] inline-flex text-customColor rounded">
            Start Your Free Trial Today
          </div>
          <div className="space-x-5 mr-[48px] inline-flex text-customColor rounded">
            Start Your Free Trial Today
          </div>
          <div className="space-x-5 mr-[48px] inline-flex text-customColor rounded">
            Start Your Free Trial Today
          </div>
          <div className="space-x-5 mr-[48px] inline-flex text-customColor rounded">
            Start Your Free Trial Today
          </div>
          <div className="space-x-5 mr-[48px] inline-flex text-customColor rounded">
            Start Your Free Trial Today
          </div>
        </Marque>
      </div>
    </div>
  );
};

export default Hero;
