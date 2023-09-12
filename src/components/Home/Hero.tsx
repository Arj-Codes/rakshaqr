import raksha_icon from "../../assets/navbar/nav_icon.png";
import circle2 from "../../assets/hero/Groupbottom.png";
import circle1 from "../../assets/hero/Grouptop.png";
import { IRootState } from "../../store/store";
import Modalbar from "./Modalbar";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { openLink } from "../../Service/Webpage";

const Hero = () => {
  const handleClick =(e:React.MouseEvent)=>{
    e.preventDefault();
    window.open("https://www.youtube.com/watch?v=TrhRkuSaT00", "_blank");
  }
  const { isOpen } = useSelector((state: IRootState) => state.user);
  return (
    <div
      className={`w-full min-h-[100vh] lg:max-h-[100vh] flex flex-col bg-black`}
    >
      {isOpen ? (
        <Modalbar />
      ) : (
        <div className="hero w-full">
          <Navbar />
          <div className="hero_content min-h-[88vh] sm:max-h-[88vh] flex flex-col sm:flex-row gap-3 items-center">
            <div className="filterblur circle w-[8vw] xxl:w-[10vw] z-10 h-[8vw] xxl:h-[10vw] absolute top-1/3 bg-[#ffe141] rounded-full right-1/2 left-1/2"></div>
            <div className="left order-2 sm:order-1 py-3 sm:py-0 w-[95%] sm:w-[40%] lg:w-[45%] xl:w-[40%] xxl:w-[45%] mx-auto flex flex-col gap-5 lg:gap-8 xxl:gap-12">
              <div className="title font-[700] text-white text-[1.5rem] lg:text-[2.2rem] xxl:text-[3.5rem]">
                <h1>Your Vehicle and Personal Emergency Care Assistant</h1>
              </div>
              <div className="content text-[0.75rem] lg:text-[0.95rem] xxl:text-[1.5rem] xs:w-[70%] sm:w-[100%]">
                <p className="text-[#909090]">
                  RakshaQR Revolutionising safety & parking! Our innovative
                  solution saves lives by ensuring prompt assistance and tackles
                  unattended parking. Join us in making a difference
                </p>
              </div>
              <div className="w-full flex items-center justify-between xs:justify-start xs:gap-5">
                <button
                  className="button-var-2"
                  onClick={(e) => handleClick(e)}
                >
                  Know More
                </button>
                <button
                  className="button-var-2"
                  onClick={(e) => {
                    e.preventDefault();
                    openLink("https://highwaydelite.com/#/new-order");
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
            <div className="right w-full sm:w-[48%] flex items-center justify-center order-1 sm:order-2 min-h-[50vh]">
              <div className="container relative min-h-[50vh] xl:min-h-[70vh] w-full xs:w-[65%] sm:w-[100%] md:w-[80%] lg:w-[90%] xl:w-[80%] xs:mx-auto flex items-center justify-center">
                <div className=" bg-[#090909] rounded-3xl w-[15rem] h-[15rem] lg:w-[22rem] lg:h-[22rem] xl:w-[28rem] xl:h-[28rem] xxl:w-[50rem] xxl:h-[50rem] flex justify-center items-center">
                  <img
                    src={raksha_icon}
                    alt=""
                    loading="lazy"
                    className="w-[12rem] lg:w-[18rem] xl:w-[25rem] xxl:w-[40rem]"
                  />
                </div>
                {!isOpen && (
                  <div className="img">
                    <img
                      src={circle1}
                      alt=""
                      className="absolute z-10 top-[2rem] xxl:top-[6rem] left-[0.5rem] w-[4rem] lg:w-[6rem] xxl:w-[12rem]"
                      loading="lazy"
                    />
                    <img
                      src={circle2}
                      alt=""
                      className="absolute z-10 bottom-[2rem] xxl:bottom-[8rem] right-[0.5rem] w-[4rem] lg:w-[6rem] xxl:w-[12rem]"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
