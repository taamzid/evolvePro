import connectedImage from "../assets/connectedImage.svg";
import connectedImageMobile from "../assets/connected-image-mobile.svg";
import leftArrow from "../assets/LeftArrow.svg";
import RightArrow from "../assets/RightArrow.svg";

const Connected = () => {
  return (
    <div className="pt-[80px] lg:pt-[100px] pb-[80px] lg:pb-[120px] bg-[linear-gradient(180deg,_#dedede00_0%,_#174aff4d_100%)] rounded-[30px] lg:bg-none bg-cover">
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
      <div className="px-[16px] block flex justify-center lg:hidden">
        <img src={connectedImageMobile} alt="connectedImageMobile" />
      </div>
      <div className="hidden lg:block lg:flex items-center justify-center lg:mt-[80px]">
        <img src={connectedImage} alt="connectedImage" />
      </div>
      <div className="block hidden px-[38px]">
        <div className="absolute top-[38%] font-['Poppins'] overflow-hidden bg-[#fff] px-[24px] py-[40px]">
          <div>
            <h1 className="text-[#292930] text-[32px] font-medium">
              Why EvolvePro.AI?
            </h1>
          </div>
          <div className="lg:mt-[32px] text-[16px] text-[#999FAE] font-normal">
            <h1>Imagine a world where every website visitor is greeted with the same enthusiasm and expertise as a face-to-face meeting.</h1>
            <br />
            <h1>Where every query is met with insightful, personalised responses, and no sales opportunity slips through the cracks.</h1>
            <br />
            <h1>This is the world EvolvePro.AI creates for your business.</h1>
          </div>
          <div className="flex gap-[17px] lg:mt-[114px] ml-[8px]">
            <img src={leftArrow} alt="leftArrow" />
            <img src={RightArrow} alt="RightArrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connected;
