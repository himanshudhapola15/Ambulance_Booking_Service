import React from "react";
import { Button } from "../Button/Button";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
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
          background: "#33363d",
          color: "#fff",
          fontWeight: "bold",
          padding: window.innerWidth < 768 ? "8px" : "12px",
          fontSize: window.innerWidth < 768 ? "12px" : "16px",
          borderRadius: "8px",
        },
      });

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
          fontFamily: "Roboto, sans-serif",
        },
      });
    }
  };

  return (
    <div className="font-roboto lg:pl-25 w-full space-y-10 mb-20 mt-20 md:mt-40 sm:px-10">
      <div className="text-center sm:text-left">
        <p className="text-4xl sm:text-6xl font-extrabold text-black">
          Get in touch
        </p>
        <p className="text-gray font-bold text-lg sm:text-2xl">
          Feel free to reach out to our friendly team!
        </p>
      </div>
      <div className="flex lg:gap-40 md:mx-0 mx-5 gap-10 lg:space-y-10 flex-wrap items-center">
        <form
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
          className="border w-full lg:w-1/2 rounded-3xl p-6 sm:p-10 lg:p-16 space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col md:space-y-2">
              <label className="font-bold text-[12px] md:text-lg">Name*</label>
              <input
                {...register("userName", { required: "Name is required" })}
                className="outline-none text-[12px] border-b-2 md:text-lg py-2"
                placeholder="Name"
                type="text"
              />
              {errors.userName && (
                <p className="text-red text-[11px] md:text-sm">
                  {errors.userName.message}
                </p>
              )}
            </div>
            <div className="flex flex-col md:space-y-2">
              <label className="font-bold text-[12px] md:text-lg">Phone*</label>
              <input
                {...register("userPhone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Phone number must be 10 digits",
                  },
                })}
                className="outline-none border-b-2 text-[12px] md:text-lg py-2"
                placeholder="Phone"
                type="text"
              />
              {errors.userPhone && (
                <p className="text-red text-[11px] md:text-sm">
                  {errors.userPhone.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col md:space-y-2">
            <label className="font-bold text-[12px] md:text-lg">Email*</label>
            <input
              {...register("userEmail", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                  message: "Email must be a valid Gmail address",
                },
              })}
              className="outline-none border-b-2 text-[12px] md:text-lg py-2"
              placeholder="Email"
              type="email"
            />
            {errors.userEmail && (
              <p className="text-red text-[11px] md:text-sm">
                {errors.userEmail.message}
              </p>
            )}
          </div>
          <div className="flex flex-col md:space-y-2">
            <label className="font-bold text-[12px] md:text-lg">Message*</label>
            <input
              {...register("userMessage", { required: "Message is required" })}
              className="outline-none border-b-2 text-[12px] md:text-lg py-2 resize-none"
              placeholder="Message"
              rows="3"
            />
            {errors.userMessage && (
              <p className="text-red text-[11px] md:text-sm">
                {errors.userMessage.message}
              </p>
            )}
          </div>

          <div className="flex pt-1 justify-end ">
            <Button
              text="Submit"
              width="w-1/2 md:w-2/3 lg:w-5/12 max-w-[250px]"
              height="px-4 py-2 md:py-3"
              textsize="text-sm md:text-base lg:text-lg"
              iconsize="w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9"
            />
          </div>
        </form>
        <div className="space-y-2 lg:space-y-6 flex flex-col md:justify-center">
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 bg-red text-xl flex justify-center items-center rounded-xl">
              <IoLocation className="text-white" />
            </div>
            <p className="text-xs md:text-base hover:underline cursor-pointer w-[280px] md:w-[300px]">
              <a
                href="https://www.google.com/maps/place/P.G.I.+Hospital/@30.7616094,76.7770877,17z/data=!3m1!4b1!4m6!3m5!1s0x390fedc82fffffff:0x8fffa3a3543256b2!8m2!3d30.7616094!4d76.7796626!16s%2Fg%2F11f53qqy7p?entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                P.G.I. Hospital, Government High School, Road, Sector 35D,
                Sector 35, Chandigarh, 160022
              </a>
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 bg-red text-xl flex justify-center items-center rounded-xl">
              <FaPhoneAlt className="text-white" />
            </div>
            <p className="text-xs md:text-base hover:underline">
              <a href="tel:+917347478882">+91-7347478882</a>
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 bg-red text-xl flex justify-center items-center rounded-xl">
              <IoMdMail className="text-white" />
            </div>
            <a
              href="mailto:prabhat.akhoon.work@gmail.com"
              className="text-xs md:text-base hover:underline"
            >
              sandhu.travels.services@gmail.com
            </a>
          </div>
          <div className="space-y-3 mt-5">
            <p className="uppercase text-center md:text-left font-medium text-gray text-lg">
              Contact with us at
            </p>
            <div className="flex gap-4 justify-center sm:justify-start">
              {/* <FaFacebook className="text-3xl hover:text-blue-600 cursor-pointer" />
              <AiFillInstagram className="text-3xl hover:text-pink-500 cursor-pointer" /> */}
              <FaWhatsapp
                className="text-3xl hover:text-green-500 cursor-pointer"
                onClick={() => {
                  window.open("https://wa.me/917347478882", "_blank");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Contact };
