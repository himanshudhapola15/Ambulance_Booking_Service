import React from "react";
import { Button } from "../Button/Button";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Contact() {
  const token = import.meta.env.VITE_SECRET_TOKEN;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data,event) => {
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
      const response = await axios.post(
        `http://localhost:3000/api/contact/submit`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(response.data.message || "Successful!", {
        id: loadingToast,
        style: {
          background: "#000",
          color: "#fff",
          fontWeight: "bold",
          padding: "12px",
          borderRadius: "8px",
        },
      });


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
    <div className="mx-20 font-roboto space-y-10 mb-20">
      <div className="space-y-2">
        <h1 className=" text-7xl font-bold text-black">Get in touch</h1>
        <p className=" text-gray">
          Feel free to reach out to our friendly team!
        </p>
      </div>
      <div className="flex gap-60">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border rounded-4xl p-16 space-y-10"
        >
          <div className="flex space-x-10">
            <div className="flex flex-col space-y-3 w-1/2">
              <label className="font-bold">Name*</label>
              <input
                {...register("userName", { required: "Name is required" })}
                className="outline-none border-b-2 text-[20px] p-2"
                placeholder="Name"
                type="text"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div className="flex flex-col space-y-3 w-1/2">
              <label className="font-bold">Phone*</label>
              <input
                {...register("userPhone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Phone number must be 10 digits",
                  },
                })}
                className="outline-none border-b-2 text-[20px] p-2"
                placeholder="Phone"
                type="text"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <label className="font-bold">Email*</label>
            <input
              {...register("userEmail", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                  message: "Email must be a valid Gmail address",
                },
              })}
              className="outline-none border-b-2 text-[20px] p-2"
              placeholder="Email"
              type="text"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col space-y-3">
            <label className="font-bold">Message*</label>
            <input
              {...register("userMessage", { required: "Message is required" })}
              className="outline-none border-b-2 text-[20px] p-2"
              placeholder="Message"
              rows="3"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          <div className="flex justify-end">
            <Button text="Submit" />
          </div>
        </form>
        <div className="space-y-8 flex flex-col justify-center">
          <div className="flex gap-3 items-center">
            <div className="w-11 h-11 bg-red text-2xl flex justify-center items-center rounded-2xl">
              <IoLocation className="text-white self-center" />
            </div>
            <p className="w-[241px] cursor-pointer hover:underline">
              1234 Maple Grove Lane, Rivertown, XY 78901
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-11 h-11 bg-red text-2xl flex justify-center items-center rounded-2xl">
              <FaPhoneAlt className="text-white self-center" />
            </div>
            <p className="cursor-pointer hover:underline">+91-90985 xxxxx</p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-11 h-11 bg-red text-2xl flex justify-center items-center rounded-2xl">
              <IoMdMail className="text-white self-center" />
            </div>
            <p className="cursor-pointer hover:underline">
              sandhutravels@gmail.com
            </p>
          </div>
          <div className="space-y-3">
            <p className="uppercase font-medium text-gray text-[20px]">
              Contact With us at
            </p>
            <div className="flex gap-5">
              <FaFacebook className="text-5xl cursor-pointer" />
              <AiFillInstagram className="text-5xl cursor-pointer" />
              <FaXTwitter className="text-5xl cursor-pointer" />
              <FaWhatsapp className="text-5xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Contact };
