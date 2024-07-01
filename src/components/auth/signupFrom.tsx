"use client";
import axiosConfig from "@/config/axios.config";
import Link from "next/link";
import { useState, ChangeEvent } from "react";
import { BiSolidError } from "react-icons/bi";
import CommonButton from "@/components/commons/Buttons/CommonButton";
import CustomInput from "../commons/CustomInputs/CustomInput";

export default function SignupForm() {
  const [data, setData] = useState({
    name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [err, setErr] = useState("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const res = await axiosConfig.post("/register", data);
      setIsLoading(false);
    } catch (error: any) {
      setErr(error?.response?.data.error || error?.response?.data?.err);
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="py-20 ">
      <div className="flex justify-center items-center ">
        <div className="bg-white  shadow-2xl shadow-slate-400 rounded-2xl w-[410px] h-auto p-7 ">
          <div className="w-24 h-24 rounded-full">
            <img
              className="object-cover w-full h-full rounded-full"
              src="https://media.istockphoto.com/id/1025274428/vector/education.jpg?s=612x612&w=0&k=20&c=0NPp6EkntOaMX9pemOoJ7byhupg94lcqTYe5mcUKn-c="
              alt=""
            />
          </div>
          {err ? (
            <div className="p-2 rounded-lg border border-gray-300 bg-slate-100 flex justify-center gap-2">
              <h1 className="text-lg text-red-500">
                <BiSolidError />
              </h1>
              <h1 className="text-sm">{err}</h1>
            </div>
          ) : (
            ""
          )}
          <div className="pt-2">
            <div>
              <h1 className="font-bold text-xl">Create your account</h1>
            </div>
            <div className="pt-1">
              <h1 className="text-sm font-light">to continue to NextCourse</h1>
            </div>
          </div>
          <div className="pt-7">
            <button
              type="button"
              className="flex items-start border border-gray-200 justify-center w-full p-2  rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-primary hover:bg-slate-50"
            >
              <img src="https://freesvg.org/img/1534129544.png" width={20} />
              <p className="-mt-0 ml-2 text-sm font-sans font-light">
                Continue with Google
              </p>
            </button>
          </div>
          <div className="flex items-center pt-7">
            <div className="border-b border-gray-300 flex-grow mx-1"></div>
            <h1 className="mx-1">or</h1>
            <div className="border-b border-gray-300 flex-grow mx-1"></div>
          </div>

          <div className="pt-5">
            <div className="grid md:grid-cols-2 gap-3">
              <CustomInput
                name="name"
                value={data.name}
                onchangeHandler={onChangeHandler}
                type="text"
                label="First name"
                placeHolder="Jhone"
                varient="PRIMARY"
                isDesabled={false}
              />
              <CustomInput
                name="last_name"
                value={data.last_name}
                onchangeHandler={onChangeHandler}
                type="text"
                label="Last name"
                placeHolder="Deo"
                varient="PRIMARY"
                isDesabled={false}
              />
            </div>
          </div>

          <CustomInput
            name="email"
            value={data.email}
            onchangeHandler={onChangeHandler}
            type="email"
            label="Email address"
            placeHolder="example@gmail.com"
            varient="PRIMARY"
            isDesabled={false}
          />
          <CustomInput
            name="password"
            value={data.password}
            onchangeHandler={onChangeHandler}
            type="password"
            label="Password"
            placeHolder="******"
            varient="PRIMARY"
            isDesabled={false}
          />
          <div className="pt-4">
            <CommonButton
              onSubmitHandler={handleSubmit}
              text={"Register"}
              loading={isLoading}
              isDesabled={false}
              type="button"
              varient="PRIMARY"
            />
          </div>
          <div className="pt-7">
            <p className="text-xs">
              Have an account?{" "}
              <Link href={"/signin"} className="text-violet-500">
                Sign in{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
