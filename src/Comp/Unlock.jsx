/* eslint-disable react/no-unescaped-entities */
import gif from "../assets/gif.gif";
import recImage from "../assets/recImage.svg";
import boxImage from "../assets/boxIcon.svg";

const Unlock = () => {
  return (
    <div className="relative">
      <div className="bg-[#27272E] lg:bg-[url('./assets/bgG.svg')] px-[16px] lg:px-[0px] pt-[64px] lg:pt-[60px] pb-[402px] lg:pb-[125px] lg:flex justify-center lg:gap-[70px] bg-cover">
        <div className="lg:ml-[140px]">
          <div className="block lg:hidden lg:mt-[70px] text-[28px] lg:text-[50px] font-['Sharp-Grotesk-medium'] text-[#fff] text-center">
            <h1>Unlock the Full Power of Your Website with EvolvePro.AI</h1>
          </div>
          <div className="hidden lg:block lg:mt-[70px] text-[50px] font-['Sharp-Grotesk-medium'] leading-[58px] text-[#fff]">
            <h1>Unlock the Full Power</h1>
            <h1>of Your Website with</h1>
            <h1>EvolvePro.AI</h1>
          </div>
          <div className="block lg:hidden text-[14px] lg:text-[18px] font-['Poppins'] mt-[24px] font-normal text-[#999FAE] text-center">
            <h1>
              Discover the Future of Business Interaction with EvolvePro.AI: A
              Revolutionary Tool Designed to Skyrocket Your Leads, Personalise
              Customer Engagement, and Streamline Your Operations. Experience
              the Unparalleled Efficiency of AI-Powered Communication, Tailored
              to Elevate Your Business in Today's Digital Landscape.
            </h1>
          </div>
          <div className="hidden lg:block text-[14px] lg:text-[18px] font-['Poppins'] mt-[24px] font-normal text-[#999FAE]">
            <h1>
              Discover the Future of Business Interaction with EvolvePro.AI: A
            </h1>
            <h1>Revolutionary Tool Designed to Skyrocket Your Leads,</h1>
            <h1> Personalise Customer Engagement, and Streamline Your</h1>
            <h1>Operations. Experience the Unparalleled Efficiency of AI-</h1>
            <h1>Powered Communication, Tailored to Elevate Your Business in</h1>
            <h1>Today's Digital Landscape.</h1>
          </div>
          <div className="block lg:hidden mt-[24px] lg:mt-[48px] font-medium lg:flex lg:gap-[18px]">
            <div className="flex justify-center items-center">
              <img src={recImage} alt="recImage" />
            </div>
            <h1 className="text-[16px] font-['Poppins'] text-[#fff] text-center mt-[24px]">
              YES! EvolvePro.AI Integrates Perfectly With:
            </h1>
          </div>
          <div className="hidden lg:block mt-[24px] lg:mt-[48px] font-medium lg:flex lg:gap-[18px]">
            <img src={recImage} alt="recImage" />
            <h1 className="lg:text-[16px] font-['Poppins'] text-[#fff]">
              YES! EvolvePro.AI Integrates Perfectly With:
            </h1>
          </div>
          <div className="mt-[20px] lg:mt-[32px] lg:ml-[53px]">
            <div className="lg:grid grid-cols-2 lg:gap-[92px]">
              <div className="px-[30px] lg:px-[0px] flex gap-[12px] font-normal lg:text-[16px] text-[#999FAE] font-['Poppins']">
                <img src={boxImage} alt="boxImage" />
                <h1>E-Commerce Stores</h1>
              </div>
              <div className="px-[30px] lg:px-[0px] mt-[8px] lg:mt-[0px] flex gap-[12px] font-normal lg:text-[16px] text-[#999FAE] font-['Poppins']">
                <img src={boxImage} alt="boxImage" />
                <h1>Info Products</h1>
              </div>
            </div>
            <div className="lg:grid grid-cols-2 lg:gap-[92px] lg:mt-[24px]">
              <div className="px-[30px] lg:px-[0px] mt-[8px] lg:mt-[0px] flex gap-[12px] font-normal lg:text-[16px] text-[#999FAE] font-['Poppins']">
                <img src={boxImage} alt="boxImage" />
                <h1>Coaching Services</h1>
              </div>
              <div className="px-[30px] lg:px-[0px] mt-[8px] lg:mt-[0px] flex gap-[12px] font-normal lg:text-[16px] text-[#999FAE] font-['Poppins']">
                <img src={boxImage} alt="boxImage" />
                <h1>Sales Funnels</h1>
              </div>
            </div>
            <div className="lg:grid grid-cols-2 lg:gap-[92px] lg:mt-[24px]">
              <div className="px-[30px] lg:px-[0px] mt-[8px] lg:mt-[0px] flex gap-[12px] font-normal lg:text-[16px] text-[#999FAE] font-['Poppins']">
                <img src={boxImage} alt="boxImage" />
                <h1>Brick & Mortar Business Websites</h1>
              </div>
              <div className="px-[30px] lg:px-[0px] mt-[8px] lg:mt-[0px] flex gap-[12px] font-normal lg:text-[16px] text-[#999FAE] font-['Poppins']">
                <img src={boxImage} alt="boxImage" />
                <h1>And More...!!</h1>
              </div>
            </div>
            <div className="lg:grid grid-cols-2 lg:gap-[92px] lg:mt-[24px]">
              <div className="px-[30px] lg:px-[0px] mt-[8px] lg:mt-[0px] flex gap-[12px] font-normal lg:text-[16px] text-[#999FAE] font-['Poppins']">
                <img src={boxImage} alt="boxImage" />
                <h1>Consulting Businesses</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src={gif} alt="gif" />
        </div>
      </div>
      <div>
        <div className="block absolute lg:hidden top-[65%]">
          <img src={gif} alt="gif" />
        </div>
      </div>
    </div>
  );
};

export default Unlock;
