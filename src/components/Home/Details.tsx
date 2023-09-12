import { openLink } from "../../Service/Webpage";
import raksha_icon from "../../assets/navbar/nav_icon.png";
const Details = () => {
  return (
    <section className="min-h-[100vh] h-fit sm:max-h-[100vh] md:min-h-fit py-10 xl:max-h-[80vh] xxl:min-h-[70vh] w-full flex justify-center items-center">
      <div className="wrapper xl:w-[80%] mx-auto rounded-3xl p-4 bg-[#f6f6f6] flex flex-col gap-5 bxshadowv1">
        <div className="top rounded-3xl bg-white flex flex-col sm:flex-row w-full p-3 xxl:p-8">
          <div className="left sm:w-[50%] flex flex-col xxl:justify-start gap-7 xxl:gap-10 order-2 sm:order-1">
            <div className="title">
              <h1 className=" text-xl xs:text-4xl xxl:text-6xl font-[700]">
                RakshaQR
              </h1>
            </div>
            <div className="content flex flex-col gap-5 font-[400] text-[#515151] text-sm xxl:text-2xl">
              <p className="">
                Raksha QR saves the information of vehicle owner and family
                emergency contact in encrypted manner.
              </p>
              <p>
                {" "}
                In case of accident, the bystander can scan the QR and connect
                with family person of vehicle owner and get emergency assistance
                through highway delite.
              </p>
              <p>
                {" "}
                In case vehicle needs attention, bystander can connect with
                vehicle owner to notify about the attention scenarios.
              </p>
            </div>
            <div className="button flex gap-3 w-full justify-center lg:justify-start">
              <button
                className="text-[0.65rem] xs:text-[0.85rem] xxl:text-[1.5rem] w-[5rem] xs:w-[8rem] xxl:w-fit xxl:h-fit xxl:p-5 xxl:text-2xl whitespace-nowrap sm:w-[10rem] sm:h-[3rem] font-[500] bg-black text-hd-yellow hover:bg-hd-yellow hover:text-black hover:border hover:border-black transition-all ease-in duration-150 rounded-3xl border border-black"
                onClick={(e) => {
                  e.preventDefault();
                  openLink("https://highwaydelite.com/#/new-order");
                }}
              >
                Buy Now
              </button>
              <button
                className="border xxl:text-[1.5rem] xs:text-[0.85rem] w-fit border-black text-xs p-2 sm:p-1 xxl:p-2 whitespace-nowrap bg-white rounded-3xl"
                onClick={(e) => {
                  e.preventDefault();
                  openLink("https://highwaydelite.com/#/replacement-order");
                }}
              >
                Order replacement
              </button>
            </div>
          </div>
          <div className="right max-h-min sm:w-[50%] flex items-center justify-center sm:justify-end xxl:justify-center order-1 sm:order-2">
            <img
              src={raksha_icon}
              alt=""
              className="h-[10rem] xs:h-[18rem] xxl:h-[30rem]"
              loading="lazy"
            />
          </div>
        </div>
        {/* <div className="bottom w-full flex items-center justify-center p-3">
          <div className="buttons flex gap-8 ">
            <button
              className="bg-white xxl:text-3xl font-[600] w-[7rem] xs:w-[9rem] xxl:w-[12rem] p-2 shadowbtn rounded-3xl"
              onClick={(e) => {
                e.preventDefault();
                openLink("https://rakshaqr.com/home");
              }}
            >
              Renew
            </button>
            <button
              className="bg-white xxl:text-3xl font-[600] w-[7rem] xs:w-[9rem] xxl:w-[12rem] p-2 shadowbtn rounded-3xl"
              onClick={(e) => {
                e.preventDefault();
                openLink("https://rakshaqr.com/home");
              }}
            >
              Update Details
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Details;
