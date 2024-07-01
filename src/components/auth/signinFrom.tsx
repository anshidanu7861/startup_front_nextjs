"use client";

import Link from "next/link";
import CommonButton from "@/components/commons/Buttons/CommonButton";
import { ChangeEvent, useState } from "react";
import axiosConfig from "@/config/axios.config";
import { BiSolidError } from "react-icons/bi";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { setUserEnitialData } from "@/redux/slieces/general.slice";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../commons/CustomInputs/CustomInput";

import Router from "next/router";

export default function SigninForm() {
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [err, setErr] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await axiosConfig.post("/login", data);
      setIsLoading(false);
      dispatch(
        setUserEnitialData({
          name: response.data.data.name,
          email: response.data.data.email,
          token: response.data.data.jwtToken,
        })
      );
      Router.push("/home");
    } catch (error: any) {
      setIsLoading(false);
      setErr(error?.response?.data.error || error?.response?.data?.err);
      console.log(error);
    }
  };

  const googleLoginHandler = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userInfo = await axios
          .get("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: { Authorization: `Bearer${tokenResponse.access_token}` },
          })
          .then((req) => req.data);

        if (userInfo) {
          emailLogin(userInfo.name, userInfo.email);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  const emailLogin = async (name: string, email: string) => {
    try {
      let data = {
        name,
        email,
      };
      const response = await axiosConfig.post("/login-email", data);

      dispatch(
        setUserEnitialData({
          name: response.data.data.name,
          email: response.data.data.email,
          token: response.data.data.jwtToken,
        })
      );
      Router.push("/home");
    } catch (error: any) {
      setErr(error?.response?.data.error || error?.response?.data?.err);
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
              <h1 className="font-bold text-xl">Sign in</h1>
            </div>
            <div className="pt-1">
              <h1 className="text-sm font-light">to continue to Speranza</h1>
            </div>
          </div>
          <div className="pt-7">
            <button
              onClick={() => googleLoginHandler()}
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

          <CustomInput
            name="email"
            value={data.email}
            onchangeHandler={handleChange}
            type="email"
            label="Email address"
            placeHolder="example@gmail.com"
            varient="PRIMARY"
            isDesabled={false}
          />
          <CustomInput
            name="password"
            value={data.password}
            onchangeHandler={handleChange}
            type="password"
            label="Password"
            placeHolder="******"
            varient="PRIMARY"
            isDesabled={false}
          />
          <div className="pt-4">
            <CommonButton
              onSubmitHandler={handleSubmit}
              text="SignIn"
              loading={isLoading}
              type="button"
              varient="PRIMARY"
              isDesabled={false}
            />
          </div>

          <div className="flex justify-end py-2">
            <Link href={"/emailVerification"}>
              <p>Forgot Password</p>
            </Link>
          </div>
          <div className="pt-7">
            <p className="text-xs">
              No account?{" "}
              <Link href={"/signup"} className="text-violet-500">
                Sign up{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
