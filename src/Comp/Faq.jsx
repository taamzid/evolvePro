/* eslint-disable react/prop-types */
/* eslint-disable no-irregular-whitespace */
import { useState } from "react";
import plusFAQ from "../assets/plusFAQ.svg";
import minusFAQ from "../assets/minusFAQ.svg";

const AccordionItem = ({ num, question, answer, isOpen, onToggle }) => {
  const toggleAccordion = () => {
    onToggle(num);
  };

  return (
    <div className="p-[16px] lg:p-[0px] mb-4 border-b font-['Poppins'] grid">
      <div className="flex lg:justify-between lg:items-center cursor-pointer">
        <div className="flex lg:items-center lg:mt-[20px] lg:mb-[30px] space-x-[5px] md:space-x-[30px]">
          <span className="text-gray-500 text-[20px]">0{num}.</span>
          <h2 className="text-[18px] lg:text-[40px] font-medium md:text-left">
            {question}
          </h2>
        </div>
        <div className="">
          <span
            onClick={toggleAccordion}
            className="mt-[6px] lg:mb-[10px] w-8 h-8 text-gray-500 rounded-full border border-purple-500 items-center justify-center flex cursor-pointer"
          >
            {isOpen ? (
              <img src={minusFAQ} alt="minusFAQ" />
            ) : (
              <img src={plusFAQ} alt="plusFAQ" />
            )}
          </span>
        </div>
      </div>
      {isOpen && (
        <p className="my-[24px] lg:my-[48px] md:text-left ml-[26px] lg:ml-[60px] text-[#999FAE] text-[16px]">
          {answer}
        </p>
      )}
    </div>
  );
};

const Faq = () => {
  const faqItems = [
    {
      question: "Can Magnetic Story Selling work for MY business?",
      answer:
        "Yes. If you want to graduate from being a regular “marketer” and become an influential voice in your customers’ lives, so you can build not just a business, but an empire filled with die-hard loyalists, then Magnetic Story Selling is for you!",
    },
    {
      question: "Why is ‘Magnetic Story Selling’ priced at $1,997?",
      answer:
        "Yes, Flowbite is first conceptualized and designed using the Figma software.",
    },
    {
      question: "What if ‘Magnetic Story Selling’ doesn’t help me?",
      answer:
        "Check out the documentation on the official website for a guide on getting started.",
    },
    {
      question: "When will my copy of ‘Magnetic Story Selling’ get to me?",
      answer:
        "Check out the documentation on the official website for a guide on getting started.",
    },
    {
      question: "Where can I order ‘Magnetic Story Selling’?",
      answer:
        "Check out the documentation on the official website for a guide on getting started.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(1);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="pt-[24px] lg:pt-[150px] pb-[50px] lg:pb-[114px] bg-[linear-gradient(180deg,_#dedede00_0%,_#174aff4d_100%)] ">
      <div className="lg:max-w-[1350px] mx-auto">
        <h1 className="text-[32px] lg:text-[80px] text-center text-black mb-[56px] lg:mb-[32px] font-['Sharp-Grotesk-Medium']">
          FAQ’s
        </h1>
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            num={index + 1}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index + 1}
            onToggle={handleToggle}
          />
        ))}
      </div>
      <h1 className="text-center  lg:text-[32px] font-['Poppins'] font-bold text-[#fff] mt-[56px] lg:mt-[92px]">
        <span className="py-[20px] lg:py-[29px] px-[32px] lg:px-[44px] border-b-[3px] border-[#0084CB] shadow-2xl bg-[linear-gradient(180deg,_#36DAFE_0%,_#129CE9_100%)] rounded-[20px]">
          Start Your Free Trial Today 》
        </span>
      </h1>
    </div>
  );
};

export default Faq;
