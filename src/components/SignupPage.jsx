/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../src/store/slices/userSlice";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      contact_number: "",
      profile_image: null,
      password: "",
    },
  });

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const onSubmit = (SignupData) => {
    dispatch(signupUser(SignupData));
  };
  return (
    <>
      <div className="login">
        <form
          className="flex flex-col items-center gap-2"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="Forfirst_name">
            <input
              className="border-black border-[1px] w-[35vw] mt-1 p-2 rounded-lg text-[1vw]"
              type="text"
              id="first_name"
              placeholder="Enter First Name"
              {...register("first_name", { required: "First Name Required!" })}
            />
            <p className="text-[1vw] text-red-500">
              {errors.first_name?.message}
            </p>
          </div>

          <div className="Forlast_name">
            <input
              className="border-black border-[1px] w-[35vw] mt-1 p-2 rounded-lg text-[1vw]"
              type="text"
              id="last_name"
              placeholder="Enter Last Name"
              {...register("last_name", { required: "Last Name Required!" })}
            />
            <p className="text-[1vw] text-red-500">
              {errors.last_name?.message}
            </p>
          </div>

          <div className="ForEmail">
            <input
              className="border-black border-[1px] w-[35vw] mt-1 p-2 rounded-lg text-[1vw]"
              type="email"
              id="Email"
              placeholder="Enter Email"
              {...register("email", {
                required: "Email Required!",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />
            <p className="text-[1vw] text-red-500">{errors.email?.message}</p>
          </div>

          <div className="Forcontact_number">
            <input
              className="border-black border-[1px] w-[35vw] mt-1 p-2 rounded-lg text-[1vw]"
              type="tel"
              id="contact_number"
              placeholder="Enter Contact Number"
              {...register("contact_number", {
                required: "Contact Number Required!",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid contact number",
                },
              })}
            />
            <p className="text-[1vw] text-red-500">
              {errors.contact_number?.message}
            </p>
          </div>

          <div className="Forprofile_image">
            <input
              className="border-black border-[1px] w-[35vw] mt-1 p-2 rounded-lg text-[1vw]"
              type="file"
              id="profile_image"
              {...register("profile_image", { required: "Profile Picture Required!" })}
            />
            <p className="text-[1vw] text-red-500">
              {errors.profile_image?.message}
            </p>
          </div>

          <div className="ForPassword">
            <input
              className="border-black border-[1px] w-[35vw] mt-1 p-2 rounded-lg text-[1vw]"
              type="password"
              id="Password"
              placeholder="Enter Password"
              {...register("password", {
                required: "Password Required!",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                  message: "Password must include letters and numbers",
                },
              })}
            />
            <p className="text-[1vw] text-red-500">
              {errors.password?.message}
            </p>
          </div>

          <button
            className="w-[30vw] bg-black text-white py-2 rounded-full"
            type="submit"
          >
            <span>Signup</span>
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
