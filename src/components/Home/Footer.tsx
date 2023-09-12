
import InstagramIcon from "../../assets/footer/InstagramIcon.png";
import FacebookIcon from "../../assets/footer/FacebookIcon.png";
import TwitterIcon from "../../assets/footer/TwitterIcon.png";
import WhatsappIcon from "../../assets/footer/WhatsappIcon.png";
import logo from "../../assets/footer/logo2.webp";

// import { useSelector } from "react-redux";
// import { IRootState } from "../../redux/store";

// import { useLocation } from "react-router-dom";

const Footer = () => {
  // const { active } = useSelector((state: IRootState) => state.nav);
  interface insideProp {
    id: number;
    text: string;
  }
  interface footeritemProp {
    id: number;
    title: string;
    fields: insideProp[];
  }
  const footeritems: footeritemProp[] = [
    {
      id: 1,
      title: "Quick links",
      fields: [
        {
          id: 1,
          text: "About us",
        },
        {
          id: 2,
          text: "Our services",
        },
        {
          id: 3,
          text: "EV chargers",
        },
        {
          id: 4,
          text: "Blog",
        },
      ],
    },
    {
      id: 2,
      title: "Useful links",
      fields: [
        {
          id: 1,
          text: "Terms of service",
        },
        {
          id: 2,
          text: "Privacy policy",
        },
        {
          id: 3,
          text: "Cancellation policy",
        },
        {
          id: 4,
          text: "Guidelines and policies",
        },
      ],
    },
  ];

  const handleClick = (f: number, ff: number) => {
    console.log(f, ff);
    if (f === 1 && (ff === 1 || ff === 2)) {
      window.open("https://highwaydelite.com/#/home", "_blank");
    } else if (f === 1 && ff === 4) {
      window.open("https://blog.highwaydelite.com/", "_blank");
    } else if (f === 1 && ff === 3) {
      window.open("https://highwaydelite.com/#/chargin", "_blank");
    } else if (f === 2 && ff === 1) {
      window.open(
        "https://highwaydelite.com/#/policy/terms-of-service",
        "_blank"
      );
    } else if (f === 2 && ff === 2) {
      window.open(
        "https://highwaydelite.com/#/policy/privacy-policy",
        "_blank"
      );
    } else if (f === 2 && ff === 3) {
      window.open(
        "https://highwaydelite.com/#/policy/cancellation-policy",
        "_blank"
      );
    } else if (f === 2 && ff === 4) {
      window.open(
        "https://highwaydelite.com/#/policy/guidelines-and-policies",
        "_blank"
      );
    }
  };

  return (
    <div className="full mt-10 h-fit sm:h-[100vh] flex flex-col justify-between lg:h-fit lg:gap-10">
      <div className="bottom flex flex-col justify-end items-center">
        <div className="top flex flex-col w-full p-5 bg-[#090909] gap-8">
          <div className="part1 flex flex-col md:flex-row lg:justify-between gap-8">
            <div className="first">
              <img src={logo} alt="" className="w-[6rem] xxl:w-[10rem]" />
            </div>
            <div className="second flex flex-col md:flex-row lg:w-[35%] lg:justify-between gap-8">
              {footeritems.map((f) => (
                <div className="eachitem flex flex-col" key={f.id}>
                  <div className="title mb-6 md:text-sm xl:text-lg xxl:text-4xl">
                    <h1 className="text-hd-yellow">{f.title}</h1>
                  </div>
                  <div className="content flex flex-col gap-3">
                    {f.fields.map((ff) => (
                      <div className="inneritem" key={ff.id}>
                        <h1
                          className="text-[#909090] cursor-pointer text-[0.85rem] md:text-[0.65rem] xl:text-[0.85rem] xxl:text-[1.5rem]"
                          onClick={(e) => {
                            e.preventDefault();
                            handleClick(f.id, ff.id);
                          }}
                        >
                          {ff.text}
                        </h1>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="third flex flex-col gap-5">
              <div className="title">
                <h1 className="text-hd-yellow md:text-sm xl:text-lg xxl:text-4xl">
                  Contact Us
                </h1>
              </div>
              <div className="content text-[#909090] text-[0.75rem]">
                <p className="leading-relaxed text-[0.65rem] lg:text-[0.85rem] xxl:text-[1.5rem]">
                  highway delite <br /> Param People Infotech Solutions Pvt Ltd{" "}
                  <br /> Keonics k-wings/Nasscom 10,000 start-up warehouse{" "}
                  <br /> 27th Main Rd, 1st sector,2nd Floor <br /> HSR
                  Layout(behind HSR Police Station)
                </p>
                <p className="text-[0.65rem] xl:text-[0.85rem] xxl:text-[1.5rem]">
                  Bangaluru - 560102
                </p>
                <p className="mt-1 xxl:text-2xl">
                  {" "}
                  <span className="text-hd-yellow ">Ph</span>- 9986844448{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="part2">
            <div className="fourth flex justify-between">
              <div className="left flex flex-col w-fit gap-3">
                <div className="icons flex gap-2">
                  <img
                    src={InstagramIcon}
                    alt=""
                    className="w-[1.2rem] xxl:w-[3rem] cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://www.instagram.com/highwaydelite/#",
                        "_blank"
                      );
                    }}
                  />
                  <img
                    src={FacebookIcon}
                    alt=""
                    className="w-[1.2rem] xxl:w-[3rem] cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://www.facebook.com/highwaydelite",
                        "_blank"
                      );
                    }}
                  />
                  <img
                    src={TwitterIcon}
                    alt=""
                    className="w-[1.2rem] xxl:w-[3rem] cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://twitter.com/highwaydelite",
                        "_blank"
                      );
                    }}
                  />
                </div>
                <h1 className="text-[#909090] text-[0.65rem] xxl:text-2xl">
                  highway delite
                </h1>
              </div>
              <div
                className="right flex flex-col w-fit gap-3 items-center cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  const url = `https://wa.me/${9986844448}`;
                  window.open(url, "_blank");
                }}
              >
                <img
                  src={WhatsappIcon}
                  alt=""
                  className="w-[1.2rem] xxl:w-[3rem]"
                />
                <h1 className="text-[#909090] text-[0.65rem] xxl:text-2xl">
                  Contact Us
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`bottom bg-[#fefefe]  h-[10vh] flex justify-center text-[#191919] items-center text-[0.55rem] w-full lg:text-sm xxl:text-2xl`}
        >
          All the copyrights are reserved to @highway delite - 2023
        </div>
      </div>
    </div>
  );
};

//${active ===2 ? "text-chargin-green" : "text-hd-yellow"}

export default Footer;
