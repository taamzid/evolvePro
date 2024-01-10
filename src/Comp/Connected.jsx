import connectedImage from "../assets/connectedImage.svg";
import connectedImageMobile from "../assets/robot-connected.svg";
import leftArrow from "../assets/LeftArrow.svg";
import RightArrow from "../assets/RightArrow.svg";
import { useState } from "react";

const Connected = () => {
  const slides = [
    {
      title: "Why EvolvePro.AI?",
      content: (
        <>
          <h1>Imagine a world where every website</h1>
          <h1>visitor is greeted with the same</h1>
          <h1>enthusiasm and expertise as a face-to-</h1>
          <h1>face meeting.</h1>
          <br />
          <h1>Where every query is met with insightful,</h1>
          <h1>personalized responses, and no sales</h1>
          <h1>opportunity slips through the cracks.</h1>
          <br />
          <h1>This is the world EvolvePro.AI creates for</h1>
          <h1>your business.</h1>
        </>
      ),
    },
    {
      title: ( 
        <>
          <h1>The Power of AI,</h1> 
          <h1>The Touch of</h1> 
          <h1>Human Empathy</h1>
        </>
      ),
      content: (
        <>
          <h1>EvolvePro.AI is not your average chatbot...</h1>
          <h1>It’s a sophisticated blend of artificial</h1>
          <h1>intelligence and a deep understanding of</h1>
          <h1>human interaction.</h1>
          <br />
          <h1>Our AI doesn’t just respond; it engages,</h1>
          <h1>learns, and adapts.</h1>
          <br />
          <h1>It’s like having a top-tier sales team that</h1>
          <h1>works tirelessly, 24/7, without ever losing its</h1>
          <h1>charm or efficiency.</h1>
        </>
      ),
    },
    {
      title: ( 
        <>
          <h1>Tailored to Your</h1> 
          <h1>Unique Business</h1> 
          <h1>Needs</h1>
        </>
      ),
      content: (
        <>
          <h1>Every business is unique, and so are its</h1>
          <h1>challenges.</h1>
          <br />
          <h1>EvolvePro.AI is designed to understand and</h1>
          <h1>adapt to your specific industry needs with</h1>
          <h1>our intuitive onboarding process.</h1>
          <br />
          <h1>Whether you’re in e-commerce, real</h1>
          <h1>estate, healthcare, or any other sector, our</h1>
          <h1>AI learns your business language and</h1>
          <h1>engages your customers as an industry</h1>
          <h1>insider.</h1>
        </>
      ),
    },
    {
      title: ( 
        <>
          <h1>A Seamless</h1> 
          <h1>Integration</h1> 
          <h1>Process</h1>
        </>
      ),
      content: (
        <>
          <h1>Integrating EvolvePro.AI into your existing</h1>
          <h1>digital platform (website, sales funnel,</h1>
          <h1>landing pages)</h1>
          <h1>is incredibly simple.</h1>
          <br />
          <h1>It works harmoniously and integrates with</h1>
          <h1>any website, providing a seamless</h1>
          <h1>experience for both you and your</h1>
          <h1>customers.</h1>
          <br />
           
          <h1>It’s not just a chatbot; it’s the central nerve</h1>
          <h1>of your digital presence.</h1>
        </>
      ),
    },
    {
      title: ( 
        <>
          <h1>Data-Driven</h1> 
          <h1>Insights for Your</h1> 
          <h1>Strategic Decisions.</h1>
        </>
      ),
      content: (
        <>
          <h1>With EvolvePro.AI, every interaction is an</h1>
          <h1>dopportunity to learn.</h1>
          <br />
          <h1>Our AI provides real-time insights into</h1>
          <h1>customer behavior, preferences, and</h1>
          <h1>feedback, empowering you to make data-</h1>
          <h1>driven decisions that propel your business</h1>
          <h1>forward.</h1>
        </>
      ),
    },
    {
      title: ( 
        <>
          <h1>Join the Evolution,</h1> 
          <h1>Adopt Change</h1> 
          <h1> Before your</h1>
          <h1>Competitors...</h1>
        </>
      ),
      content: (
        <>
          <h1>The future of business growth is here, and</h1>
          <h1>it’s powered by AI.</h1>
          <br />
            
          <h1>EvolvePro.AI is more than a tool; it’s a</h1>
          <h1>strategic partner that works tirelessly to</h1>
          <h1>bring you closer to your business goals.</h1>
          <br />
          <h1>Are you ready to evolve?</h1>
        </>
      ),
    },
    {
      title: ( 
        <>
          <h1>Take the First Step...</h1> 
          <h1>Start Your Free Trial</h1> 
          <h1>Today!</h1>
        </>
      ),
      content: (
        <>
          <h1>Experience the power of EvolvePro.AI with a</h1>
          <h1>FREE 14 Day Trial!</h1>
          <br />
          <h1>See firsthand how our AI can transform</h1>
          <h1>your customer engagement and</h1>
          <h1>bsupercharge your sales.</h1>
          <br />
          <h1>The future is waiting. Are you ready to be a</h1>
          <h1>part of it?</h1>
        </>
      ),
    },
  ];
  const slidesMobile = [
    {
      title: "Why EvolvePro.AI?",
      content: (
        <>
          <h1>Imagine a world where every website visitor is greeted with the same enthusiasm and expertise as a face-to-face meeting.</h1>
          <br />
          <h1>Where every query is met with insightful, personalized responses, and no sales opportunity slips through the cracks.</h1>
          <br />
          <h1>This is the world EvolvePro.AI creates for your business.</h1>
        </>
      ),
    },
    {
      title: ( 
        <>
          <h1>The Power of AI, The Touch of Human Empathy</h1>
        </>
      ),
      content: (
        <>
          <h1>EvolvePro.AI is not your average chatbot... It’s a sophisticated blend of artificial intelligence and a deep understanding of human interaction.</h1>
          <h1 className="mt-[10px]">Our AI doesn’t just respond; it engages, learns, and adapts.</h1>
          <h1 className="mt-[10px]">It’s like having a top-tier sales team that works tirelessly, 24/7, without ever losing its charm or efficiency.</h1>
        </>
      ),
    },
    {
      title: ( 
        <>
          <h1>Tailored to Your Unique</h1> 
          <h1>Business Needs</h1>
        </>
      ),
      content: (
        <>
          <h1>Every business is unique, and so are its challenges.</h1>
          <h1 className="mt-[10px]">EvolvePro.AI is designed to understand and adapt to your specific industry needs with our intuitive onboarding process.</h1>
          <h1 className="mt-[10px]">Whether you’re in e-commerce, real estate, healthcare, or any other sector, our AI learns your business language and engages your customers as an industry insider.</h1>
        </>
      ),
    },
    {
      title: ( 
        <>
          <h1>A Seamless Integration</h1>
          <h1>Process</h1>
        </>
      ),
      content: (
        <>
          <h1>Integrating EvolvePro.AI into your existing digital platform (website, sales funnel, landing pages) is incredibly simple.</h1>
          <h1 className="mt-[10px]">It works harmoniously and integrates with any website, providing a seamless experience for both you and your customers.</h1>
          <h1 className="mt-[10px]">It’s not just a chatbot; it’s the central nerve of your digital presence.</h1>
        </>
      ),
    },
    {
      title: ( 
        <>
          <h1>Data-Driven Insights for</h1> 
          <h1>Your Strategic Decisions.</h1>
        </>
      ),
      content: (
        <>
          <h1>With EvolvePro.AI, every interaction is an dopportunity to learn.</h1>
          <br />
          <h1>Our AI provides real-time insights into customer behavior, preferences, and feedback, empowering you to make data-driven decisions that propel your business forward.</h1>
        </>
      ),
    },
    {
      title: ( 
        <>
          <h1>Join the Evolution, Adopt</h1> 
          <h1>Change Before your</h1>
          <h1>Competitors...</h1>
        </>
      ),
      content: (
        <>
          <h1>The future of business growth is here, and it’s powered by AI.</h1>
          <br />
          <h1>EvolvePro.AI is more than a tool; it’s a strategic partner that works tirelessly to bring you closer to your business goals.</h1>
          <br />
          <h1>Are you ready to evolve?</h1>
        </>
      ),
    },
    {
      title: ( 
        <>
          <h1>Take the First Step...</h1> 
          <h1>Start Your Free Trial</h1> 
          <h1>Today!</h1>
        </>
      ),
      content: (
        <>
          <h1>Experience the power of EvolvePro.AI with a FREE 14 Day Trial!</h1>
          <br />
          <h1>See firsthand how our AI can transform your customer engagement and bsupercharge your sales.</h1>
          <br />
          <h1>The future is waiting. Are you ready to be a part of it?</h1>
        </>
      ),
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => {
      const nextSlide = prevSlide + 1;
      // Check if the next slide is the last one
      if (nextSlide >= slides.length) {
        // If it's the last slide, return the current slide without updating
        return prevSlide;
      }
      // If it's not the last slide, proceed to the next slide
      return nextSlide;
    });
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => {
      const prevSlideIndex = prevSlide - 1;
      // Check if the previous slide is before the first slide
      if (prevSlideIndex < 0) {
        // If it's before the first slide, return the current slide without updating
        return prevSlide;
      }
      // If it's not before the first slide, proceed to the previous slide
      return prevSlideIndex;
    });
  };

  const isLastSlide = currentSlide === slides.length - 1;

  return (
    <div className="relative pt-[80px] lg:pt-[100px] pb-[40px] lg:pb-[120px] rounded-[30px] bg-[linear-gradient(180deg,_#dedede00_0%,_#174aff4d_100%)] lg:bg-none">
      <div className="px-[16px] block lg:hidden text-center text-[14px] lg:text-[20px] font-normal text-[#9A9AB5] font-['Sharp-Grotesk-Medium']">
        <h1>
          In today’s fast-paced digital world, the difference between thriving
          and merely surviving in business often comes down to one critical element:</h1>
      </div>
      <div className="hidden lg:block text-center lg:text-[20px] font-normal text-[#9A9AB5] font-['Sharp-Grotesk-Medium']">
        <h1>
          In today’s fast-paced digital world, the difference between thriving
          and merely
        </h1>
        <h1>surviving in business often comes down to one critical element:</h1>
      </div>
      <div className="block lg:hidden px-[16px] py-[24px] text-[28px] text-center leading-[32px] font-['Sharp-Grotesk-Medium']">
        <h1>Meet EvolvePro.AI - The Revolutionary Chatbot Transforming How Businesses Connect, Communicate, and Convert Online</h1>
      </div>
      <div className="hidden lg:block lg:mt-[20px] text-center lg:text-[50px] font-medium leading-[58px] font-['Sharp-Grotesk-Medium']">
        <h1>Staying connected with your</h1>
        <h1>prospects around the clock.</h1>
      </div>
      <div className="lg:hidden block bg-black rounded-t-[30px] flex justify-center items-center mx-[16px]">
        <div className="px-[20px]">
          <div className="pb-[40px]"></div>
          <div className="font-['Poppins'] overflow-hidden min-w-[260px] bg-white px-[10px] pt-[24px] rounded-t-[30px] border-t-8 border-x-8 border-gray-300 h-[430px]">
            <div>
              <h1 className="text-[#292930] text-[20px] font-medium leading-[25px]">
              {slidesMobile[currentSlide].title}
              </h1>
            </div>
            <div className="mt-[12px] text-[16px] text-[#999FAE] font-normal">
              {slidesMobile[currentSlide].content}
            </div>
          </div>
          <div className="bg-white px-[12px] pb-[24px] rounded-b-[30px] border-b-8 border-x-8 border-gray-300"> 
              {isLastSlide ? (
                <div className="flex gap-[8px]">
                  <img
                        src={leftArrow}
                        alt="leftArrow"
                        onClick={handlePrevSlide}
                        className="cursor-pointer"
                  />
                  <button onClick={handleNextSlide} className="bg-[#3662FE] text-[14px] text-[#fff] px-[10px] py-[2px] rounded-[25px]">
                    Start Your Free Trial Today
                  </button>
                </div>
                ) : (
                  <div className="flex gap-[17px]"> 
                    <img
                      src={leftArrow}
                      alt="leftArrow"
                      onClick={handlePrevSlide}
                      className="cursor-pointer"
                    />
                    <img
                      src={RightArrow}
                      alt="RightArrow"
                      onClick={handleNextSlide}
                      className="cursor-pointer"
                    />
                  </div>
              )}
          </div>
          <div className="pt-[40px]"></div>
        </div>
      </div>
      <div className="px-[16px] block flex justify-center lg:hidden">
        <img src={connectedImageMobile} alt="connectedImageMobile" />
      </div>
      <div className="hidden lg:block lg:flex items-center justify-center lg:mt-[80px]">
        <img src={connectedImage} alt="connectedImage" />
      </div>
      <div className="px-[38px] hidden lg:block">
        <div className="absolute mt-[45px] top-[50%] lg:top-[50%] left-1/2 transform -translate-x-[100px] lg:-translate-x-[610px] -translate-y-1/2 font-['Poppins'] overflow-hidden px-[24px] py-[40px]">
          <div>
            <h1 className="text-[#292930] text-[32px] font-medium leading-[40px]">
            {slides[currentSlide].title}
            </h1>
          </div>
          <div className="lg:mt-[32px] text-[16px] text-[#999FAE] font-normal">
          {slides[currentSlide].content}
          </div>
        </div>
        {isLastSlide ? (
        <div className="flex gap-[17px] ml-[25px] absolute lg:top-[75%] left-1/2 transform -translate-x-[100px] lg:-translate-x-[610px] -translate-y-1/2">
          <img
                src={leftArrow}
                alt="leftArrow"
                onClick={handlePrevSlide}
                className="cursor-pointer"
          />
          <button onClick={handleNextSlide} className="bg-[#3662FE] text-[#fff] px-[20px] py-[10px] rounded-[25px]">
            Start Your Free Trial Today
          </button>
        </div>
        ) : (
          <div className="flex gap-[17px] ml-[25px] absolute lg:top-[75%] left-1/2 transform -translate-x-[100px] lg:-translate-x-[610px] -translate-y-1/2"> 
            <img
              src={leftArrow}
              alt="leftArrow"
              onClick={handlePrevSlide}
              className="cursor-pointer"
            />
            <img
              src={RightArrow}
              alt="RightArrow"
              onClick={handleNextSlide}
              className="cursor-pointer"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Connected;
