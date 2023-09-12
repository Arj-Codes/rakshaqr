import raksha_icon from "../../assets/navbar/nav_icon.png";
import open_icon from "../../assets/navbar/modal.png";
import chargin_logo from "../../assets/navbar/ev_chargin_yellow_cropped.png"
import { IRootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { setOpen } from "../../store/userSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const navitems = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Chargin",
    },
    {
      id: 3,
      name: "Raksha QR",
    },
    {
      id: 4,
      name: "FasTag",
    },
  ];
  const { active } = useSelector((state: IRootState) => state.user);
  return (
    <div className="navbar w-full h-[12vh] flex items-end">
      <div className="wrapper w-[95%] mx-auto px-3 rounded-3xl bg-[#151515] items-center flex justify-between z-0 h-[10vh] text-[#fff]">
        <img
          src={raksha_icon}
          alt=""
          className="w-[3rem] h-[3rem] xxl:w-[6rem] xxl:h-[6rem]"
        />
        <div className="right flex sm:w-[70%] lg:w-[60%] xl:w-[55%] justify-between items-center">
          <div
            className={`navitems hidden gap-4 xl:gap-6 xxl:gap-10 justify-between sm:flex items-center`}
          >
            {navitems.map((n) => {
              return (
                <div
                  className="all h-[10vh] flex items-center relative"
                  key={n.id}
                >
                  {n.id !== 2 ? (
                    <div
                      className={`eachitem cursor-pointer text-[0.75rem] md:text-[0.85rem] lg:text-[1rem] xl:text-[1.1rem] xxl:text-[1.8rem] z-40 font-[500] ${
                        active === n.id ? "text-hd-yellow" : "text-[#fff]"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        if (n.id === 1) {
                          window.open(
                            "https://www.highwaydelite.com",
                            "_blank"
                          );
                        } else if (n.id === 2) {
                          window.open(
                            "https://highwaydelite.com/#/chargin",
                            "_blank"
                          );
                        } else if (n.id === 4) {
                          window.open(
                            "https://highwaydelite.com/#/fastaghome",
                            "_blank"
                          );
                        }
                      }}
                    >
                      {n.name}
                    </div>
                  ) : (
                    <div
                      className={`eachitem cursor-pointer text-[0.85rem] lg:text-[1rem] xl:text-[1.1rem] xxl:text-[1.8rem] z-40 font-[500] ${
                        active === n.id ? "text-hd-yellow" : "text-[#fff]"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        if (n.id === 2) {
                          window.open(
                            "https://highwaydelite.com/#/chargin",
                            "_blank"
                          );
                        }
                      }}
                    >
                      <img src={chargin_logo} alt="" className="w-[3rem] md:w-[5rem] xxl:w-[8rem]"/>
                    </div>
                  )}

                  {active === n.id && (
                    <div className="parent rounded-full absolute z-30 top-2 xxl:top-5 right-[0.4rem] md:right-[1rem] xxl:right-[1rem] blur xxl:blur-lg bg-[#151515]">
                      <div className="circle w-[3rem] h-[3rem] xxl:w-[7rem] xxl:h-[7rem] rounded-full bg-hd-yellow blur-2xl"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <h1
            className="flex sm:hidden"
            onClick={(e) => {
              e.preventDefault();
              dispatch(setOpen(true));
            }}
          >
            <img src={open_icon} alt="" className="w-[1.5rem]" />
          </h1>

          <div className="right hidden sm:flex gap-2 xxl:gap-5 items-center">
            <div className="name flex flex-col">
              <button
                className="button-var-3"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://highwaydelite.com/#/sign-in", "_blank");
                }}
              >
                Login
              </button>
            </div>
            <div className="name flex flex-col">
              <button
                className="button-var-3"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://highwaydelite.com/#/sign-up", "_blank");
                }}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
