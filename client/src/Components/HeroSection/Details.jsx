import React, { useState } from "react";
import { Button } from "../Button/Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Details() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const token =
    "86691fb162ca864c6b473b7668c6ad2f7a1653b34d0c2880fffe0ae7e44329e8";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, event) => {
    event.preventDefault();

    const loadingToast = toast.loading("Please wait... 🚑", {
      style: {
        background: "#33363d",
        color: "#fff",
        fontWeight: "bold",
        padding: window.innerWidth < 768 ? "8px" : "12px",
        fontSize: window.innerWidth < 768 ? "12px" : "16px",
        borderRadius: "8px",
        fontFamily: "Roboto, sans-serif",
      },
    });

    try {
      await axios.post(`http://localhost:3000/api/ambulance/request`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      toast.dismiss(loadingToast);
      setIsSuccessModalOpen(true);
      reset();
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!", {
        id: loadingToast,
        style: {
          background: "#333333",
          color: "#fff",
          fontWeight: "bold",
          padding: window.innerWidth < 768 ? "8px" : "12px",
          fontSize: window.innerWidth < 768 ? "12px" : "16px",
          borderRadius: "8px",
        },
      });
    }
  };

  return (
    <div
      id="details"
      className="font-roboto h-[450px] sm:h-[400px] md:justify-center md:h-[550px] lg:h-[768px] md:mt-0 flex flex-col text-white space-y-1 md:space-y-3 lg:space-y-10"
    >
      <section className="text-center w-full font-bold md:font-normal md:text-left mt-10 px-10 md:px-0 md:w-2/3 leading-8 md:leading-10 lg:leading-20 text-[30px] md:text-5xl lg:text-7xl">
        Instant Ambulance Service
      </section>
      <section className="text-[16px] text-center md:my-0 my-4 md:text-left md:text-xl">
        Fast, Simple & Reliable
      </section>

      <section className="flex flex-col py-10 md:py-6 md:px-6 md:mt-8 justify-center md:mx-0 mx-10 backdrop-blur-sm lg:backdrop-blur-md lg:w-6/12 rounded-2xl md:rounded-4xl">
        <form
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
          className="p-2 md:p-8 lg:p-12 space-y-10 md:space-y-5 lg:space-y-8"
        >
          <div className="flex flex-col px-8 md:px-0 md:space-y-1">
            <input
              {...register("userName", { required: "Name is required" })}
              className="w-full placeholder-offwhite outline-none border-b-2 md:border-b-2 text-[16px] lg:text-[20px] p-1"
              placeholder="Name*"
              type="text"
            />
            {errors.userName && (
              <p className="text-red text-[14px] md:text-sm">
                {errors.userName.message}
              </p>
            )}
          </div>
          <div className="flex flex-col px-8 md:px-0 md:space-y-1">
            <input
              {...register("userPhone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits",
                },
              })}
              className="w-full placeholder-offwhite outline-none border-b-2 md:border-b-2 text-[16px] lg:text-[20px] p-1 md:p-2"
              placeholder="Phone*"
              type="tel"
            />
            {errors.userPhone && (
              <p className="text-red text-[14px] md:text-sm">
                {errors.userPhone.message}
              </p>
            )}
          </div>

          <div className="flex pt-1 md:justify-end px-8 md:px-0">
            <Button
              text="Submit"
              width="w-2/3 md:w-2/4 lg:w-6/12 max-w-[250px]"
              height="px-5 pr-4 py-2.5 md:py-4 lg:py-3"
              textsize="text-[16px] md:text-[15px] lg:text-[16px]"
              iconsize="w-7 h-7 md:w-9 md:h-9 lg:w-8 lg:h-8"
            />
          </div>
        </form>
      </section>

      {isSuccessModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-offwhite text-black px-5 md:px-16 py-10 rounded-4xl w-[350px] md:w-[500px] shadow-lg">
            <h2 className="text-lg md:text-3xl font-bold mb-4 text-center">
              Thank you for using our service!
            </h2>
            <div className="flex flex-col gap-2 justify-center items-center">
              <p className=" text-gray text-sm md:text-base text-center leading-5">
                You will receive a call in less than 60 seconds. If you don't
                receive the call, please contact us at:
              </p>
              <span className=" text-red text-base md:text-xl font-bold">
                1234567890
              </span>
            </div>
            <div className=" flex justify-center items-center mt-5">
              <button
                onClick={() => setIsSuccessModalOpen(false)}
                className="cursor-pointer text-xs md:text-base px-6 md:px-8 uppercase py-2 bg-[#D9D9D9] text-darkgray font-bold rounded-4xl"
              >
                close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { Details };
