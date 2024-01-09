/* eslint-disable no-irregular-whitespace */
import oneImage from "../assets/imgOne.svg";
import twoImage from "../assets/imgTwo.svg";
import video from "../assets/vdo.mp4";

// ... (previous code)

const Banner = () => {
  const handlePlayButtonClick = () => {
    const video = document.querySelector("video");
    video.play();
    const playButton = document.getElementById("playButton");
    if (playButton) {
      playButton.style.display = "none";
    }
  };

  return (
    <div className="bg-[linear-gradient(180deg,_#dedede00_0%,_#174aff4d_100%)] ">
      <div className="pt-[64px] lg:pt-[150px] px-[26px] lg:px-[250px] flex items-center justify-center relative">
        <video
          src={video}
          width="100%"
          height="auto"
          controls
          className="border-10 border-solid border-[#fff] rounded-lg"
        />
        {/* Centering the play button */}
        <div
          id="playButton"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          style={{ color: "#fff", fontSize: "48px" }}
          onClick={handlePlayButtonClick}
        >
          ▶️
        </div>
      </div>
      <div className="px-[26px] overflow-y-auto no-scrollbar block lg:hidden flex gap-[16px] text-[#9A9AB5] text-[12px] font-['Poppins]">
        <div className="py-[16px] px-[24px] bg-[#fff] mt-[32px] border-4 border-[#fffff66] rounded-3xl min-w-[310px]">
         <div className="grid grid-cols-4 gap-x-4">
          <img src={oneImage} alt="oneImg" />
          <div className="col-span-3">
            <h1>“Finished the book and WOW… this is hands-down the greatest book on personality-driven copywriting I’ve ever read!”</h1>
            <br />
            <h1 className="font-semibold">- Dan Henry, 9-figure digital marketer</h1>
          </div>
          </div>
        </div>
        <div className="py-[16px] px-[24px] bg-[#fff] mt-[32px] border-4 border-[#fffff66] rounded-3xl min-w-[310px]">
         <div className="grid grid-cols-4 gap-x-4">
          <img src={twoImage} alt="twoImg" />
          <div className="col-span-3">
            <h1>“Finished the book and WOW… this is hands-down the greatest book on personality-driven copywriting I’ve ever read!”</h1>
            <br />
            <h1 className="font-semibold">- Dan Henry, 9-figure digital marketer</h1>
          </div>
          </div>
        </div>
      </div>

      <div className="pb-[64px] px-[26px]">
        <h1 className="text-center lg:text-[32px] font-['Poppins'] font-bold text-[#fff]  mt-[64px] lg:mt-[100px] lg:mb-[150px]">
          <span className="py-[20px] px-[32px] lg:py-[29px] lg:px-[44px] border-b-[3px] border-[#0084CB] shadow-2xl bg-[linear-gradient(180deg,_#36DAFE_0%,_#129CE9_100%)] rounded-[20px]">
            Start Your Free Trial Today 》
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
