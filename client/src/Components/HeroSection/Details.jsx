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
        background: "#000",
        color: "#fff",
        fontWeight: "bold",
        padding: "12px",
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
          background: "#000",
          color: "#fff",
          fontWeight: "bold",
          padding: "12px",
          borderRadius: "8px",
        },
      });
    }
  };

  return (
    <div className="font-roboto text-white space-y-8">
      <section className="w-[650px] text-7xl">
        Instant Ambulance Service
      </section>
      <section className="h-[16px]">Fast, Simple & Reliable</section>

      <section className="flex flex-col justify-center items-center backdrop-blur-md w-[540px] rounded-4xl">
        <form onSubmit={handleSubmit(onSubmit)} className="p-16 space-y-12">
          <div className="flex flex-col space-y-2">
            <input
              {...register("userName", { required: "Name is required" })}
              className="w-[392px] outline-none border-b-2 text-[20px] p-2"
              placeholder="Name*"
              type="text"
            />
            {errors.userName && (
              <p className="text-red text-sm">{errors.userName.message}</p>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <input
              {...register("userPhone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits",
                },
              })}
              className="w-[392px] outline-none border-b-2 text-[20px] p-2"
              placeholder="Phone*"
              type="tel"
            />
            {errors.userPhone && (
              <p className="text-red text-sm">{errors.userPhone.message}</p>
            )}
          </div>

          <div className="flex justify-end w-[392px] pb-8">
            <Button
              text="Book Now"
              className="px-6 py-2 bg-red text-white rounded-lg"
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
