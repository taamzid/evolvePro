/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import "animate.css";
import gifOne from "../assets/gif1.gif";
import gifTwo from "../assets/gif2.gif";
import gifThree from "../assets/gif3.gif";
import firstHand from "../assets/firstHand.svg";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
// import { useState } from "react";

const Meet = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const fadeUpAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(20px)",
    config: {
      duration: 800, // Adjust the duration as needed
    },
    easing: "ease-in-out",
  });

  // const [hovered, setHovered] = useState(false);

  const bounceAnimation = useSpring({
    transform: inView ? "scale(1.2)" : "scale(1)",
    config: { mass: 1, tension: 120, friction: 10, duration: 1000 },
  });
  // const shakeAnimation = useSpring({
  //   opacity: inView ? 1 : 0,
  //   transform: inView ? "translateY(0)" : "translateY(20px)",
  //   config: {
  //     duration: 800, // Adjust the duration as needed
  //   },
  //   easing: "ease-in-out",
  // });

  return (
    <div
      ref={ref}
      className="pt-[380px] px-[16px] lg:px-[0px] lg:pt-[150px] lg:pb-[40px] relative"
    >
      <animated.div style={fadeUpAnimation}>
        <div className="block lg:hidden text-center text-[16px] lg:text-[20px] font-normal text-[#9A9AB5] font-['Sharp-Grotesk-Medium']">
          <h1 className="animate-in slide-in-from-top  delay-650 duration-300">
            In a world where every customer interaction can make or break your
            business, one AI-powered tool is changing the game...
          </h1>
        </div>
      </animated.div>

      <animated.div style={fadeUpAnimation}>
        <div className="hidden lg:block text-center lg:text-[20px] font-normal text-[#9A9AB5] font-['Sharp-Grotesk-Medium']">
          <h1 className="animate-in slide-in-from-top  delay-650 duration-300">
            In a world where every customer interaction can make or break your
            business, one
          </h1>
          <h1>AI-powered tool is changing the game...</h1>
        </div>
      </animated.div>

      <div className="block lg:hidden mt-[24px] lg:mt-[20px] text-center text-[28px] lg:text-[50px] font-medium font-['Sharp-Grotesk-Medium']">
        <h1>
          Meet EvolvePro.AI - The Revolutionary Chatbot Transforming How
          Businesses Connect, Communicate, and Convert Online
        </h1>
      </div>

      <div className="hidden lg:block lg:mt-[20px] text-center lg:text-[50px] font-medium leading-[58px] font-['Sharp-Grotesk-Medium']">
        <h1>Meet EvolvePro.AI - The Revolutionary</h1>
        <h1>Chatbot Transforming How Businesses</h1>
        <h1>Connect, Communicate, and Convert Online</h1>
      </div>

      <div className="lg:flex justify-center mt-[24px] lg:mt-[50px] lg:gap-[80px]">
        <img src={gifOne} alt="gifOne" />
        <div>
          <div className="block text-center lg:hidden mt-[21px] lg:mt-[60px] text-[20px] lg:text-[30px] font-medium font-['Sharp-Grotesk-Medium']">
            <h1>Maximise Your Lead Generation Effortlessly</h1>
          </div>
          <div className="hidden lg:block lg:mt-[60px] lg:text-[30px] font-medium leading-[45px] font-['Sharp-Grotesk-Medium']">
            <h1>Maximise Your Lead</h1>
            <h1>Generation Effortlessly</h1>
          </div>

          <div className="block lg:hidden text-center mt-[21px] lg:mt-[24px] text-[#9A9AB5] font-['Poppins'] text-[14px] lg:text-[16px]">
            <h1>
              With EvolvePro.AI, say goodbye to missed opportunities. Our
              intelligent AI doesn't just wait for customers to reach out – it
              proactively engages them, understanding their needs and guiding
              them through your sales funnel. Imagine waking up to a list of
              warm leads every morning, all thanks to a chatbot that never
              sleeps.
            </h1>
          </div>
          <div className="hidden lg:block lg:mt-[24px] text-[#9A9AB5] font-['Poppins'] lg:text-[16px]">
            <h1>With EvolvePro.AI, say goodbye to missed opportunities. Our</h1>
            <h1>
              intelligent AI doesn't just wait for customers to reach out – it
            </h1>
            <h1>proactively engages them, understanding their needs and</h1>
            <h1>
              guiding them through your sales funnel. Imagine waking up to
            </h1>
            <h1>
              a list of warm leads every morning, all thanks to a chatbot that
            </h1>
            <h1>never sleeps.</h1>
          </div>

          <div>
            <h1 className="lg:text-[16px] mt-[42px] mb-[75px] lg:mb-[0px] lg:mt-[90px] font-['Poppins'] font-normal text-center lg:text-start text-[#fff]">
              <span className="py-[20px] lg:py-[22px] px-[32px] lg:px-[35px] border-b-[3px] border-[#0084CB] shadow-2xl bg-[linear-gradient(180deg,_#36DAFE_0%,_#129CE9_100%)] rounded-[20px]">
                Start Your Free Trial Today 》
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row lg:flex justify-center lg:mt-[50px] lg:gap-[80px]">
        <div className="lg:ml-[140px]">
          <div className="block text-center lg:hidden mt-[21px] lg:mt-[60px] text-[20px] lg:text-[30px] font-medium font-['Sharp-Grotesk-Medium']">
            <h1>What If Every Customer Felt Like Your Only Customer?</h1>
          </div>
          <div className="hidden lg:block lg:mt-[60px] lg:text-[30px] font-medium leading-[45px] font-['Sharp-Grotesk-Medium']">
            <h1>What If Every Customer</h1>
            <h1>Felt Like Your Only</h1>
            <h1>Customer?</h1>
          </div>
          <div className="block lg:hidden text-center mt-[21px] lg:mt-[24px] text-[#9A9AB5] font-['Poppins'] text-[14px] lg:text-[16px]">
            <h1>
              EvolvePro.AI brings a personal touch to every conversation. It
              learns from each interaction, ensuring that your customers feel
              heard and understood. This isn't just a chatbot; it's a
              relationship builder, tailored to make every customer feel like
              your only customer.
            </h1>
          </div>
          <div className="hidden lg:block lg:mt-[24px] text-[#9A9AB5] font-['Poppins'] lg:text-[16px]">
            <h1>
              EvolvePro.AI brings a personal touch to every conversation. It
            </h1>
            <h1>learns from each interaction, ensuring that your customers</h1>
            <h1>
              feel heard and understood. This isn't just a chatbot; it's a
            </h1>
            <h1>
              relationship builder, tailored to make every customer feel like
            </h1>
            <h1>your only customer.</h1>
          </div>
          <div>
            <h1 className="lg:text-[16px] mt-[42px] mb-[75px] lg:mb-[0px] lg:mt-[90px] font-['Poppins'] font-normal text-center lg:text-start text-[#fff]">
              <span className="py-[20px] lg:py-[22px] px-[32px] lg:px-[35px] border-b-[3px] border-[#0084CB] shadow-2xl bg-[linear-gradient(180deg,_#36DAFE_0%,_#129CE9_100%)] rounded-[20px]">
                Start Your Free Trial Today 》
              </span>
            </h1>
          </div>
        </div>
        <img src={gifTwo} alt="imageTwo" />
      </div>
      <div className="lg:flex justify-center lg:mt-[50px] lg:gap-[80px]">
        <img src={gifThree} alt="imageThree" />
        <div>
          <div className="block text-center lg:hidden mt-[21px] lg:mt-[60px] text-[20px] lg:text-[30px] font-medium font-['Sharp-Grotesk-Medium']">
            <h1>Looking for the Secret to Turning Browsers into Buyers?</h1>
          </div>
          <div className="hidden lg:block lg:mt-[60px] lg:text-[30px] font-medium leading-[45px] font-['Sharp-Grotesk-Medium']">
            <h1>Looking for the Secret</h1>
            <h1>to Turning Browsers</h1>
            <h1>into Buyers?</h1>
          </div>
          <div className="block lg:hidden text-center mt-[21px] lg:mt-[24px] text-[#9A9AB5] font-['Poppins'] text-[14px] lg:text-[16px]">
            <h1>
              Sales aren’t just about having the right product; it’s about
              timing and understanding. EvolvePro.AI is your 24/7 sales expert,
              identifying and acting on buying signals, providing the right
              information at the right time to seal the deal.
            </h1>
          </div>
          <div className="hidden lg:block lg:mt-[24px] text-[#9A9AB5] font-['Poppins'] lg:text-[16px]">
            <h1>
              Sales aren’t just about having the right product; it’s about
            </h1>
            <h1>timing and understanding. EvolvePro.AI is your 24/7 sales</h1>
            <h1>
              expert, identifying and acting on buying signals, providing the
            </h1>
            <h1>right information at the right time to seal the deal.</h1>
          </div>
          <div>
            <h1 className="lg:text-[16px] mt-[42px] mb-[75px] lg:mb-[0px] lg:mt-[90px] font-['Poppins'] font-normal text-center lg:text-start text-[#fff]">
              <span className="py-[20px] lg:py-[22px] px-[32px] lg:px-[35px] border-b-[3px] border-[#0084CB] shadow-2xl bg-[linear-gradient(180deg,_#36DAFE_0%,_#129CE9_100%)] rounded-[20px]">
                Start Your Free Trial Today 》
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div
        className="hidden lg:block absolute top-[-280px] right-0  overflow-hidden z-10 "
        ref={ref}
      >
        <animated.img
          src={firstHand}
          alt="firstHand"
          style={{
            ...bounceAnimation,
            width: "740px",
            marginTop: "60px",
            paddingLeft: "30px",
          }}
        />
      </div>
    </div>
  );
};

export default Meet;
