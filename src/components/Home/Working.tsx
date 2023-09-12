import icon1 from "../../assets/working/hospital.png";
import icon2 from "../../assets/working/notification.png";
import icon3 from "../../assets/working/scanner.png";
import icon4 from "../../assets/working/securityuser.png";
import icon5 from "../../assets/working/sms.png";

const Working = () => {
  const work_items = [
    {
      id: 1,
      name: "Accident Use Case",
      fields: [
        {
          id: 1,
          icon: icon1,
          content:
            "Bystander/good Samaritan would scan the Raksha QR code on the vehicle and can connect to your family and update about the accident.",
        },
        {
          id: 2,
          icon: icon2,
          content:
            "The family person would receive sms with vehicle insurance and medical insurance details.",
        },
        {
          id: 3,
          icon: icon3,
          content:
            "highway delite team would call a near by hospital and police station.",
        },
      ],
    },
    {
      id: 2,
      name: "In Case of unattended",
      fields: [
        {
          id: 1,
          icon: icon4,
          content:
            "In case of unattended, Bystander/traffic police/parking person would scan RakshaQR and initiate call or sms to notify about vehicle status.",
        },
        {
          id: 2,
          icon: icon5,
          content:
            "You can get notified about unauthorised parking, wrong parking, vehicle being towed, or any other unusual activities such as unattended pets, fuel leaks, etc.",
        },
      ],
    },
  ];
  return (
    <div className="min-h-[100vh] sm:max-h-[100vh] md:min-h-fit flex flex-col justify-center xl:justify-between xxl:justify-start gap-5 lg:gap-10 xxl:gap-[5rem] w-full py-10 xxl:mb-[10rem]">
      <div className="title w-[95%] mx-auto">
        <h1 className="text-[1.2rem] xl:text-[2rem] xxl:text-[3.5rem] font-[600]">How it works</h1>
      </div>
      <div className="wrapper w-[95%] flex flex-col md:flex-row p-2 gap-5 mx-auto rounded-xl bg-[#f6f6f6]">
        {work_items.map((w) => {
          return (
            <div
              className="eachitem w-full md:w-[50%] flex flex-col gap-3 xxl:gap-[5rem] p-2 xl:p-3 mx-auto rounded-xl bg-white"
              key={w.id}
            >
              <div className="title">
                <h1 className="text-[1rem] xl:text-[1.5rem] xxl:text-[2.5rem] font-[700]">{w.name}</h1>
              </div>
              <div className="content flex flex-col gap-5">
                {w.fields.map((m) => {
                  return (
                    <div
                      className="eachitem flex w-full justify-between items-center"
                      key={m.id}
                    >
                      <div className="bg w-[20%] flex justify-center min-h-full">
                        <div className="icon flex items-center justify-center bg-black w-[2.3rem] h-[2.3rem] xs:w-[2.5rem] xs:h-[2.5rem] xl:w-[3rem] xl:h-[3rem] xxl:w-[5.5rem] xxl:h-[5.5rem] rounded-full">
                          <img
                            src={m.icon}
                            alt=""
                            className="w-[1.2rem] xs:w-[1.5rem] xl:w-[1.5rem] xxl:w-[3rem]"
                          />
                        </div>
                      </div>
                      <div className="content text-[0.65rem] xs:text-[0.85rem] xl:text-[1.1rem] xxl:text-[2rem] w-[80%]">
                        <p className="">{m.content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Working;
