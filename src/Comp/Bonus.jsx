/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import one from "../assets/bonus/one.svg";
import two from "../assets/bonus/two.svg";
import three from "../assets/bonus/three.svg";
import four from "../assets/bonus/four.svg";
import oneMobile from "../assets/bonus/oneMobile.svg";
import twoMobile from "../assets/bonus/twoMobile.svg";
import threeMobile from "../assets/bonus/threeMobile.svg";
import fourMobile from "../assets/bonus/fourMobile.svg";
import blue from "../assets/bonus/blue.svg";
import thirdHand from "../assets/thirdHand.svg";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const Bonus = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const bounceAnimation = useSpring({
    transform: inView ? "scale(1.2)" : "scale(1)",
    config: { mass: 1, tension: 120, friction: 14, duration: 1000 },
  });

  return (
    <div className="mt-[92px] lg:mt-[330px] mb-[56px] lg:mb-[12px] relative">
      <div className="flex flex-col-reverse lg:flex-row lg:flex justify-center lg:ml-[100px] lg:gap-[80px]">
        <div className="px-[16px] lg:px-[0px]">
          <div className="block lg:hidden mt-[42px] lg:mt-[60px] text-[28px] lg:text-[48px] font-medium font-['Sharp-Grotesk-Medium']">
            <h1>Bonus #1 - The 5 Step Marketing Blueprint</h1>
          </div>
          <div className="hidden lg:block lg:mt-[60px] lg:text-[48px] font-medium leading-[45px] font-['Sharp-Grotesk-Medium']">
            <h1>Bonus #1 - The 5</h1>
            <h1>Step Marketing</h1>
            <h1>Blueprint</h1>
          </div>
          <div className="block lg:hidden mt-[16px] lg:mt-[24px] text-[#27272E] font-['Poppins'] lg:text-[18px]">
            <h1>
              The 5 Step Online Marketing Guide To Generating As Many Qualified
              Leads And Converting As Many Sales As Possible!
            </h1>
          </div>
          <div className="hidden lg:block lg:mt-[24px] text-[#27272E] font-['Poppins'] lg:text-[18px]">
            <h1>The 5 Step Online Marketing Guide To Generating As Many</h1>
            <h1>Qualified Leads And Converting As Many Sales As Possible!</h1>
          </div>
          <div className="mt-[32px] lg:mt-[64px]">
            <h1 className="font-['Sharp-Grotesk-Medium'] text-[16px]">
              Total Value
            </h1>
            <h1 className="font-['Sharp-Grotesk-Medium'] text-[48px]">
              $19.97
            </h1>
            <div className="block lg:hidden mt-[16px] text-[#999FAE] font-['Poppins']">
              <h1>
                When you begin your FREE Trial of EvolvePro.AI, we're including
                the exclusive "5 Step Marketing Blueprint" as a special bonus.
                This blueprint has been instrumental in guiding 1000s of
                businesses towards targeted, effective marketing strategies that
                attract their dream customers.
              </h1>
              <h1 className="mt-[16px]">
                Experience the transformative power of combining traditional
                marketing wisdom with cutting-edge AI technology.
              </h1>
              <h1 className="mt-[16px]">
                Get This For FREE When You Start Your FREE Trial of EvolvePro.AI
                Today!
              </h1>
            </div>
            <div className="hidden lg:block mt-[16px] text-[#999FAE] font-['Poppins']">
              <h1>
                When you begin your FREE Trial of EvolvePro.AI, we're including
                the
              </h1>
              <h1>
                exclusive "5 Step Marketing Blueprint" as a special bonus. This
              </h1>
              <h1>
                blueprint has been instrumental in guiding 1000s of businesses
              </h1>
              <h1>
                towards targeted, effective marketing strategies that attract
                their
              </h1>
              <h1>dream customers.</h1>
              <h1 className="mt-[16px]">
                Experience the transformative power of combining traditional
              </h1>
              <h1>marketing wisdom with cutting-edge AI technology.</h1>
              <h1 className="mt-[16px]">
                Get This For FREE When You Start Your FREE Trial of EvolvePro.AI
                Today!
              </h1>
            </div>
          </div>
        </div>
        <img src={one} alt="imageOne" className="hidden lg:block"/>
        <img src={oneMobile} alt="imageOne" className="block lg:hidden"/>
      </div>
      <div className="lg:flex justify-center mt-[40px] lg:mt-[50px] lg:gap-[80px]">
        <img src={two} alt="imageTwo" className="hidden lg:block"/>
        <img src={twoMobile} alt="imageTwo" className="lg:hidden block"/>
        <div className="lg:mr-[100px] px-[16px] lg:px-[0px]">
          <div className="block lg:hidden mt-[42px] lg:mt-[60px] text-[28px] lg:text-[30px] font-medium font-['Sharp-Grotesk-Medium']">
            <h1>Bonus #2 - The Closer's Checklist</h1>
          </div>
          <div className="hidden lg:block lg:mt-[60px] lg:text-[48px] font-medium leading-[45px] font-['Sharp-Grotesk-Medium']">
            <h1>Bonus #2 - The</h1>
            <h1>Closer's Checklist</h1>
          </div>
          <div className="mt-[16px] lg:mt-[24px] text-[#27272E] font-['Poppins'] lg:text-[18px]">
            <h1>Unlock the Secrets to Closing Every Sale with Confidence!</h1>
          </div>
          <div className="mt-[32px] lg:mt-[64px]">
            <h1 className="font-['Sharp-Grotesk-Medium'] text-[16px]">
              Total Value
            </h1>
            <h1 className="font-['Sharp-Grotesk-Medium'] text-[48px]">$147</h1>
            <div className="block lg:hidden mt-[16px] text-[#999FAE] font-['Poppins']">
              <h1>
                As part of your FREE Trial of EvolvePro.AI, we're excited to
                offer you the exclusive "Closer's Checklist." This comprehensive
                guide has been a game-changer for sales professionals globally,
                providing a step-by-step framework to close deals effectively.
              </h1>
              <h1 className="mt-[16px]">
                Discover the art of persuasive selling, from initial contact to
                final handshake. This checklist isn't just a guide; it's your
                roadmap to sales mastery, and when you integrate it with the
                booked appointments that EvolvePro.AI delivers to you - your
                success in sales will reach new heights.
              </h1>
              <h1 className="mt-[16px]">
                Get This For FREE When You Start Your FREE Trial of EvolvePro.AI
                Today!
              </h1>
            </div>
            <div className="hidden lg:block mt-[16px] text-[#999FAE] font-['Poppins']">
              <h1>
                As part of your FREE Trial of EvolvePro.AI, we're excited to
                offer you the
              </h1>
              <h1>
                exclusive "Closer's Checklist." This comprehensive guide has
                been a
              </h1>
              <h1>
                game-changer for sales professionals globally, providing a
                step-by-
              </h1>
              <h1>step framework to close deals effectively.</h1>
              <h1 className="mt-[16px]">
                Discover the art of persuasive selling, from initial contact to
                final
              </h1>
              <h1>
                handshake. This checklist isn't just a guide; it's your roadmap
                to sales
              </h1>
              <h1>
                mastery, and when you integrate it with the booked appointments
              </h1>
              <h1>
                that EvolvePro.AI delivers to you - your success in sales will
                reach
              </h1>
              <h1>new heights.</h1>
              <h1 className="mt-[16px]">
                Get This For FREE When You Start Your FREE Trial of EvolvePro.AI
                Today!
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row lg:flex justify-center lg:ml-[100px] mt-[40px] lg:mt-[50px] lg:gap-[80px]">
        <div className="px-[16px] lg:px-[0px]">
          <div className="block lg:hidden mt-[42px] lg:mt-[60px] text-[28px] lg:text-[48px] font-medium font-['Sharp-Grotesk-Medium']">
            <h1>Bonus #3 - First in Line: VIP Early Access</h1>
          </div>
          <div className="hidden lg:block lg:mt-[60px] lg:text-[48px] font-medium leading-[45px] font-['Sharp-Grotesk-Medium']">
            <h1>Bonus #3 - First in</h1>
            <h1>Line: VIP Early</h1>
            <h1>Access</h1>
          </div>
          <div className="mt-[16px] lg:mt-[24px] text-[#27272E] font-['Poppins'] lg:text-[18px]">
            <h1>Be the Pioneer: Experience Tomorrow's AI Innovations Today!</h1>
          </div>
          <div className="mt-[32px] lg:mt-[64px]">
            <h1 className="font-['Sharp-Grotesk-Medium'] text-[16px]">
              Total Value
            </h1>
            <h1 className="font-['Sharp-Grotesk-Medium'] text-[42px] lg:text-[48px]">
              PRICELESS
            </h1>
            <div className="block lg:hidden mt-[16px] text-[#999FAE] font-['Poppins']">
              <h1>
                When you embark on your journey with EvolvePro.AI, you're not
                just getting a cutting-edge AI tool; you're securing a ticket to
                the forefront of AI innovation.
              </h1>
              <h1 className="mt-[16px]">
                As a VIP Early Access member, you'll be the first to explore and
                leverage EvolvePro.AI's newest features. This privilege puts
                your business miles ahead, always in tune with the latest AI
                advancements. Imagine integrating the future into your
                strategies today - that's the power we're offering.
              </h1>
              <h1 className="mt-[16px]">
                Embrace this opportunity to lead the pack. Get VIP Early Access
                For FREE When You Start Your FREE Trial of EvolvePro.AI Now!
              </h1>
            </div>
            <div className="hidden lg:block mt-[16px] text-[#999FAE] font-['Poppins']">
              <h1>
                When you embark on your journey with EvolvePro.AI, you're not
                just
              </h1>
              <h1>
                getting a cutting-edge AI tool; you're securing a ticket to the
                forefront
              </h1>
              <h1>of AI innovation.</h1>
              <h1 className="mt-[16px]">
                As a VIP Early Access member, you'll be the first to explore and
              </h1>
              <h1>
                leverage EvolvePro.AI's newest features. This privilege puts
                your
              </h1>
              <h1>business miles ahead, always in tune with the latest AI</h1>
              <h1>
                advancements. Imagine integrating the future into your
                strategies
              </h1>
              <h1>today - that's the power we're offering.</h1>
              <h1 className="mt-[16px]">
                Embrace this opportunity to lead the pack. Get VIP Early Access
                For
              </h1>
              <h1>FREE When You Start Your FREE Trial of EvolvePro.AI Now!</h1>
            </div>
          </div>
        </div>
        <img src={three} alt="imageOne" className="hidden lg:block"/>
        <img src={threeMobile} alt="imageOne" className="block lg:hidden"/>
      </div>
      <div className="lg:flex justify-center mt-[40px] lg:mt-[50px] lg:gap-[80px]">
        <img src={four} alt="imageTwo" className="hidden lg:block"/>
        <img src={fourMobile} alt="imageTwo" className="block lg:hidden"/>
        <div className="lg:mr-[100px] px-[16px] lg:px-[0px]">
          <div className="block lg:hidden mt-[42px] lg:mt-[60px] text-[28px] lg:text-[48px] font-medium font-['Sharp-Grotesk-Medium']">
            <h1>Bonus #4 - Custom 15 Minute AI Audit Session</h1>
          </div>
          <div className="hidden lg:block lg:mt-[60px] lg:text-[48px] font-medium leading-[45px] font-['Sharp-Grotesk-Medium']">
            <h1>Bonus #4 -</h1>
            <h1>Custom 15 Minute</h1>
            <h1>AI Audit Session</h1>
          </div>
          <div className="mt-[16px] lg:mt-[24px] text-[#27272E] font-['Poppins'] lg:text-[18px]">
            <h1>Unlock Your AI Potential: Customised Strategy for Success!</h1>
          </div>
          <div className="mt-[32px] lg:mt-[64px]">
            <h1 className="font-['Sharp-Grotesk-Medium'] text-[16px]">
              Personalized Consultation Value
            </h1>
            <h1 className="font-['Sharp-Grotesk-Medium'] text-[48px]">$197</h1>
            <div className="block lg:hidden mt-[16px] text-[#999FAE] font-['Poppins']">
              <h1>
                Dive into the world of AI with a tailored strategy that fits
                your unique business needs. With our Custom 30 Minute AI Audit
                Session, you're not just adapting AI technology; you're
                mastering it.
              </h1>
              <h1 className="mt-[16px]">
                This exclusive session is your gateway to understanding where AI
                fits in your business landscape. Our experts will walk you
                through a comprehensive audit, pinpointing exactly how AI can
                elevate your operations. We don't just stop at EvolvePro.AI’s
                website chatbot capabilities; we explore the full spectrum of AI
                possibilities for your business.
              </h1>
              <h1 className="mt-[16px]">
                Transform your approach to AI from mere implementation to
                complete domination. This personalised session, usually valued
                at $197, is yours for FREE when you start your FREE Trial of
                EvolvePro.AI today. Seize this chance to craft an AI strategy
                that propels your business to new heights!
              </h1>
            </div>
            <div className="hidden lg:block mt-[16px] text-[#999FAE] font-['Poppins']">
              <h1>
                Dive into the world of AI with a tailored strategy that fits
                your unique
              </h1>
              <h1>
                business needs. With our Custom 30 Minute AI Audit Session,
                you're
              </h1>
              <h1>not just adapting AI technology; you're mastering it.</h1>
              <h1 className="mt-[16px]">
                This exclusive session is your gateway to understanding where AI
                fits
              </h1>
              <h1>
                in your business landscape. Our experts will walk you through a
              </h1>
              <h1>
                comprehensive audit, pinpointing exactly how AI can elevate your
              </h1>
              <h1>
                operations. We don't just stop at EvolvePro.AI’s website chatbot
              </h1>
              <h1>
                capabilities; we explore the full spectrum of AI possibilities
                for your
              </h1>
              <h1>business.</h1>
              <h1 className="mt-[16px]">
                Transform your approach to AI from mere implementation to
              </h1>
              <h1>
                {" "}
                complete domination. This personalised session, usually valued
                at
              </h1>
              <h1>
                $197, is yours for FREE when you start your FREE Trial of
                EvolvePro.AI
              </h1>
              <h1>
                today. Seize this chance to craft an AI strategy that propels
                your
              </h1>
              <h1>business to new heights!</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row lg:flex justify-center lg:ml-[100px] mt-[40px] lg:mt-[50px] lg:gap-[80px]">
        <div className="px-[16px] lg:px-[0px]">
          <div className="block lg:hidden mt-[42px] lg:mt-[60px] text-[28px] lg:text-[48px] font-medium font-['Sharp-Grotesk-Medium']">
            <h1>Bonus #5 - Free 60 Minute Marketing Strategy Session</h1>
          </div>
          <div className="hidden lg:block mt-[42px] lg:mt-[60px] lg:text-[48px] font-medium leading-[45px] font-['Sharp-Grotesk-Medium']">
            <h1>Bonus #5 - Free 60</h1>
            <h1>Minute Marketing</h1>
            <h1>Strategy Session</h1>
          </div>
          <div className="mt-[16px] lg:mt-[24px] text-[#27272E] font-['Poppins'] lg:text-[18px]">
            <h1>Evolve Your Marketing: Exclusive One-on-One Expert Session!</h1>
          </div>
          <div className="mt-[32px] lg:mt-[64px]">
            <h1 className="font-['Sharp-Grotesk-Medium'] text-[16px]">
              Expert Consultation Value
            </h1>
            <h1 className="font-['Sharp-Grotesk-Medium'] text-[48px]">$500</h1>
            <div className="block lg:hidden mt-[16px] text-[#999FAE] font-['Poppins']">
              <h1>
                Imagine having a roadmap to marketing success, tailored just for
                your business. That's exactly what you get with our Free 60
                Minute Marketing Strategy Session.
              </h1>
              <h1 className="mt-[16px]">
                In this power-packed hour, you'll sit down with our top
                marketing strategists. These are the minds behind some of the
                most successful campaigns in the industry, and they're all yours
                for a full 60 minutes. This isn't just a generic consultation;
                it's a deep dive into your unique business challenges and goals.
              </h1>
              <h1 className="mt-[16px]">
                We'll dissect your current marketing strategies, identify gaps,
                and unlock opportunities you might have never considered. From
                leveraging the latest digital trends to refining your target
                audience approach, this session is a goldmine of insights and
                actionable advice.
              </h1>
              <h1 className="mt-[16px]">
                This is more than just a strategy session; it's a
                transformational experience for your business. Valued at $500,
                this session is your key to unlocking marketing strategies that
                can skyrocket your growth. And it's completely FREE when you
                start your FREE Trial of EvolvePro.AI today. Don't miss this
                opportunity to reshape your marketing destiny!
              </h1>
            </div>
            <div className="hidden lg:block mt-[16px] text-[#999FAE] font-['Poppins']">
              <h1>
                Imagine having a roadmap to marketing success, tailored just for
              </h1>
              <h1>
                your business. That's exactly what you get with our Free 60
                Minute
              </h1>
              <h1>Marketing Strategy Session.</h1>
              <h1 className="mt-[16px]">
                In this power-packed hour, you'll sit down with our top
                marketing
              </h1>
              <h1>
                strategists. These are the minds behind some of the most
                successful
              </h1>
              <h1>
                campaigns in the industry, and they're all yours for a full 60
                minutes.
              </h1>
              <h1>
                This isn't just a generic consultation; it's a deep dive into
                your unique
              </h1>
              <h1>business challenges and goals.</h1>
              <h1 className="mt-[16px]">
                We'll dissect your current marketing strategies, identify gaps,
                and
              </h1>
              <h1>
                unlock opportunities you might have never considered. From
              </h1>
              <h1>
                leveraging the latest digital trends to refining your target
                audience
              </h1>
              <h1>
                approach, this session is a goldmine of insights and actionable
              </h1>
              <h1>advice.</h1>
              <h1 className="mt-[16px]">
                This is more than just a strategy session; it's a
                transformational
              </h1>
              <h1>
                experience for your business. Valued at $500, this session is
                your key
              </h1>
              <h1>
                to unlocking marketing strategies that can skyrocket your
                growth.
              </h1>
              <h1>
                And it's completely FREE when you start your FREE Trial of
                EvolvePro.AI
              </h1>
              <h1>
                today. Don't miss this opportunity to reshape your marketing
                destiny!
              </h1>
            </div>
          </div>
        </div>
        <img src={four} alt="imageTwo" className="hidden lg:block"/>
        <img src={fourMobile} alt="imageTwo" className="block lg:hidden"/>
      </div>
      <div>
        <h1 className="text-center lg:text-[32px] font-['Poppins'] font-bold text-[#fff] mt-[56px] lg:mt-[188px]">
          <span className="py-[20px] lg:py-[29px] px-[32px] lg:px-[44px] border-b-[3px] border-[#0084CB] shadow-2xl bg-[linear-gradient(180deg,_#36DAFE_0%,_#129CE9_100%)] rounded-[20px]">
            Start Your Free Trial Today 》
          </span>
        </h1>
        <h1 className="px-[16px] lg:px-[0px] mt-[42px] lg:mt-[48px] text-center text-[#6D6D6D] text-[14px] lg:text-[18px] font-['Poppins']">
          Get Started In Less Than 60 Seconds • Cancel Anytime
        </h1>
      </div>
      <img
        src={blue}
        alt="blue"
        style={{ position: "absolute", top: "310px", left: "150px" }}
        className="hidden lg:block"
      />
      <img
        src={blue}
        alt="blue"
        style={{ position: "absolute", top: "1190px", right: "200px" }}
        className="hidden lg:block"
      />
      <img
        src={blue}
        alt="blue"
        style={{ position: "absolute", top: "2110px", left: "150px" }}
        className="hidden lg:block"
      />
      <img
        src={blue}
        alt="blue"
        style={{ position: "absolute", top: "3030px", right: "200px" }}
        className="hidden lg:block"
      />
      <img
        src={blue}
        alt="blue"
        style={{ position: "absolute", top: "3950px", left: "150px" }}
        className="hidden lg:block"
      />
      <div
        className="hidden lg:block absolute top-[-580px] right-0 overflow-hidden z-10"
        ref={ref}
      >
        <animated.img
          src={thirdHand}
          alt="firstHand"
          style={{
            ...bounceAnimation,
            width: "760px",
            marginLeft: "95px",
            marginTop: "50px",
          }}
        />
      </div>
    </div>
  );
};

export default Bonus;
