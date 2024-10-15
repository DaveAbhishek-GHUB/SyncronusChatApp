/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (LoginData) => {
    console.log(LoginData);
  };

  return (
    <>
      <div className="login">
        <form
          className="flex flex-col items-center gap-5"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="ForEmail">
            <input
              className="border-black border-[1px] w-[35vw] mt-2 p-2 rounded-lg text-[1vw]"
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

          <div className="ForPassword">
            <input
              className="border-black border-[1px] w-[35vw] mt-2 p-2 rounded-lg text-[1vw]"
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
            <span>Login</span>
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
