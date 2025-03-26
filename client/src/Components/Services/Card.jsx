import React, { useState, useEffect, useRef } from "react";

function Card({ item }) {
  const [isCentered, setIsCentered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const centerY = window.innerHeight / 2;

        if (
          window.innerWidth < 1024 &&
          rect.top < centerY &&
          rect.bottom > centerY
        ) {
          setIsCentered(true);
        } else {
          setIsCentered(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const equipmentData =
    item.heading === "Patient Transfer"
      ? [
          {
            name: "Oxygen\nSupply",
            image:
              "/assets/patient_transfer_equipment_assets/oxygen_supply.png",
          },
          {
            name: "First\nAid",
            image:
              "/assets/patient_transfer_equipment_assets/first_aid_supply.png",
          },
          {
            name: "WheelChair",
            image:
              "/assets/patient_transfer_equipment_assets/wheelchair_access.png",
          },
          {
            name: "Spinal\nImmobilization",
            image:
              "/assets/patient_transfer_equipment_assets/spinal_immobilization_kit.png",
          },
          {
            name: "Patient\nMonitoring",
            image:
              "/assets/patient_transfer_equipment_assets/patient_monitoring_equipment.png",
          },
        ]
      : item.heading === "Advanced Life Support"
      ? [
          {
            name: "Defibrillator",
            image: "/assets/advanced_life_support/defibrillator.png",
          },
          {
            name: "Advanced\nAirway",
            image:
              "/assets/advanced_life_support/advanced_airway_equipment.png",
          },
          {
            name: "IV\nAdministration",
            image: "/assets/advanced_life_support/iv_administration_kit.png",
          },
          {
            name: "Cardiac\nMonitoring",
            image:
              "/assets/advanced_life_support/cardiac_monitoring_equipment.png",
          },
          {
            name: "Medication\nSupply",
            image: "/assets/advanced_life_support/medication_supplies.png",
          },
        ]
      : item.heading === "Basic Life Support"
      ? [
          {
            name: "CPR",
            image: "/assets/basic_life_support/cpr_equipment.png",
          },
          {
            name: "Oxygen\nMask",
            image: "/assets/basic_life_support/oxygen_mask.png",
          },
          {
            name: "Automated\nDefibrillator",
            image:
              "/assets/basic_life_support/autmated_external_defibrillator.png",
          },
          {
            name: "WheelChair",
            image: "/assets/basic_life_support/wheelchair_access.png",
          },
          {
            name: "First\nAid",
            image: "/assets/basic_life_support/first_aid_supply.png",
          },
        ]
      : [];

  return (
    <div
      ref={cardRef}
      className={`group cursor-pointer lg:h-[650px] font-roboto rounded-4xl lg:w-1/3 transition-all duration-300 ease-in-out flex flex-col 
        ${
          isCentered && window.innerWidth < 1024
            ? "bg-red text-white"
            : "bg-lightgray text-black"
        } 
        hover:bg-red hover:text-white`}
    >
      <img src={item.image} alt="" className="rounded-t-4xl" />
      <div className="flex group-hover:text-white flex-col flex-grow justify-between px-6 pb-4">
        <div className="mt-6 space-y-2">
          <h1 className="text-[20px] md:text-[30px] font-semibold">
            {item.heading}
          </h1>
          <p className="text-sm md:text-lg leading-4 md:leading-5.5">
            {item.para}
          </p>
        </div>

        <div className="font-roboto text-black group-hover:text-white mt-6">
          <p
            className={`uppercase y ${
              isCentered && window.innerWidth < 1024
                ? "text-white"
                : "text-gray"
            }  text-xs md:text-base group-hover:text-lightgray font-semibold`}
          >
            Equipment
          </p>
          <div className="flex mt-5 justify-around pb-4">
            {equipmentData.map((item, index) => (
              <div
                key={index}
                className="flex p-1 flex-col space-y-2 justify-baseline items-center"
              >
                <div className="bg-white rounded-full">
                  <img
                    src={item.image}
                    alt=""
                    className="w-9 h-9 bg-offwhite rounded-full"
                  />
                </div>
                <p
                  className={`${
                    isCentered && window.innerWidth < 1024
                      ? "text-white"
                      : "text-gray"
                  }  text-xs md:text-base group-hover:text-lightgray font-semibold} text-center text-[9px] md:text-[12px] font-roboto`}
                >
                  {item.name.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Card };
