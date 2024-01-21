import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const Visitor = () => {
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

  return (
    <div className="px-[16px] lg:px-[16px] pt-[64px] lg:pt-[150px] pb-[40px] lg:pb-[80px] text-center font-['Sharp-Grotesk-Medium']" ref={ref}>
      <h1 className="text-[#9A9AB5] text-[16px] lg:text-[20px] lg:font-medium">
        Are You Ready to...
      </h1>
      <animated.div style={fadeUpAnimation}>
        <div className="hidden lg:block text-[#292930] text-[28px] lg:text-[71px] lg:font-medium mt-[16px] lg:mt-[24px] leading-none">
          <h1>Turn Every Website Visitor into</h1>
          <h1>a Potential Customer?</h1>
        </div>
      </animated.div>
      <animated.div style={fadeUpAnimation}>
        <div className="block lg:hidden text-[#292930] text-[28px] lg:text-[71px] lg:font-medium mt-[16px] lg:mt-[24px] leading-none">
          <h1>Turn Every Website Visitor into a Potential Customer?</h1>
        </div>
      </animated.div>
    </div>
  );
};

export default Visitor;
