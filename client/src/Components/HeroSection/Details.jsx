import React, { useState } from "react";
import { Button } from "../Button/Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Details() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const token = import.meta.env.VITE_SECRET_TOKEN;

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
        background: "#333333",
        color: "#fff",
        fontWeight: "bold",
        padding: window.innerWidth < 768 ? "8px" : "12px",
        fontSize: window.innerWidth < 768 ? "12px" : "16px",
        borderRadius: "8px",
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
    <div className="font-roboto h-[200px] sm:h-[250px] md:h-[450px] lg:h-[768px] justify-center flex flex-col text-white space-y-1 md:space-y-5">
      <section className="w-1/3 lg:w-1/2 leading-5 md:leading-8 lg:leading-20 text-sm md:text-3xl lg:text-7xl">
        Instant Ambulance Service
      </section>
      <section className="text-[7px] md:text-base">
        Fast, Simple & Reliable
      </section>

      <section className="flex flex-col justify-center backdrop-blur-md w-1/3 rounded-2xl md:rounded-4xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-2 md:p-6 lg:p-8 space-y-2 md:space-y-5 lg:space-y-8"
        >
          <div className="flex flex-col md:space-y-1">
            <input
              {...register("userName", { required: "Name is required" })}
              className="w-full outline-none border-b-[0.5px] md:border-b-2 text-[7px] md:text-[16px] lg:text-[20px] p-1"
              placeholder="Name*"
              type="text"
            />
            {errors.userName && (
              <p className="text-red text-[5px] md:text-sm">
                {errors.userName.message}
              </p>
            )}
          </div>
          <div className="flex flex-col md:space-y-1">
            <input
              {...register("userPhone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits",
                },
              })}
              className="w-full outline-none border-b-[0.5px] md:border-b-2 text-[7px] md:text-[16px] lg:text-[20px] p-1 md:p-2"
              placeholder="Phone*"
              type="tel"
            />
            {errors.userPhone && (
              <p className="text-red text-[5px] md:text-sm">
                {errors.userPhone.message}
              </p>
            )}
          </div>

          <div className="flex pt-1  justify-end ">
            <Button
              text="Submit"
              width="w-3/5 md:w-2/4 lg:w-5/12 max-w-[250px]"
              height="px-2 pr-4 py-1 md:py-2"
              textsize="text-[6px] md:text-[10px] lg:text-[16px]"
              iconsize="w-3.5 h-3.5 md:w-5 md:h-5 lg:w-8 lg:h-8"
            />
          </div>
        </form>
      </section>

      {isSuccessModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-offwhite text-black px-16 py-10 rounded-4xl w-[500px] shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Thank you for using our service!
            </h2>
            <div className="flex flex-col gap-2 justify-center items-center">
              <p className=" text-gray text-center leading-5">
                You will receive a call in less than 60 seconds. If you don't
                receive the call, please contact us at:
              </p>
              <span className=" text-red text-xl font-bold">1234567890</span>
            </div>
            <div className=" flex justify-center items-center mt-6">
              <button
                onClick={() => setIsSuccessModalOpen(false)}
                className="cursor-pointer px-8 uppercase py-2 bg-[#D9D9D9] text-darkgray font-bold rounded-4xl"
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
