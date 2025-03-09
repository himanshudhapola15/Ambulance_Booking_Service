import React from "react";
import { Button } from "../Button/Button";
import { useForm } from "react-hook-form";

function Details() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log("Booking Details:", data);
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
              {...register("name", { required: "Name is required" })}
              className="w-[392px] outline-none border-b-2 text-[20px] p-2"
              placeholder="Name*"
              type="text"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <input
              {...register("phone", {
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
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div className="flex justify-end w-[392px] pb-8">
            <Button
              text="Book Now"
              className="px-6 py-2 bg-red-500 text-white rounded-lg"
            >
              Book Now
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}

export { Details };
