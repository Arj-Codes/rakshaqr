import chargin_logo from "../../assets/navbar/ev_chargin_yellow_cropped.png";
import close_icon from "../../assets/navbar/modalexit.png";
import { IRootState } from "../../store/store";
import { setOpen } from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
const Modalbar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state: IRootState) => state.user);
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
  return (
    <div className="w-full min-h-[100vh] bg-[#151515] text-[#fff] max-h-[100vh]">
      <div className="wrapper w-[95%] mx-auto min-h-[100vh] flex flex-col py-5 justify-between">
        <div className="top flex items-center justify-between">
          <div className="left flex gap-2 items-center">
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
          <div className="right text-[0.75rem]">
            <h1
              onClick={(e) => {
                e.preventDefault();
                dispatch(setOpen(false));
              }}
            >
              <img src={close_icon} alt="" className="w-[2rem]" />
            </h1>
          </div>
        </div>
        <div className="middle">
          <div className={`navitems flex flex-col gap-3`}>
            {navitems.map((n) => {
              return (
                <div
                  className="all h-[10vh] flex items-center relative"
                  key={n.id}
                >
                  {n.id !== 2 ? (
                    <div
                      className={`eachitem cursor-pointer z-40 font-[500] ${
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
                      className={`eachitem cursor-pointer z-40 font-[500] ${
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
                      <img src={chargin_logo} alt="" className="w-[5rem]" />
                    </div>
                  )}
                  {active === n.id && (
                    <div className="parent rounded-full absolute z-30 top-2 left-[1rem] blur bg-[#151515]">
                      <div className="circle w-[3rem] h-[3rem] rounded-full bg-hd-yellow blur-2xl"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="button">
          <h1>Logout</h1>
        </div>
      </div>
    </div>
  );
};

export default Modalbar;
