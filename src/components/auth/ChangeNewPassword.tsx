"use client";

import React, { useState } from "react";
import CustomInput from "../commons/CustomInputs/CustomInput";
import CommonButton from "../commons/Buttons/CommonButton";
import { useRouter } from "next/navigation";

function ChangeNewPassword() {
  const [data, setData] = useState({
    otp: "",
    password: "",
    confirmPassword: "",
  });
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const onChangeHandler = () => {};

  const handleSubmit = () => {
    try {
      router.push("/signin");
    } catch (error: any) {
      setErr(error.response.data.err || error.response.data.error);
    }
  };

  return (
    <div className="bg-white w-full h-screen">
      <div className="py-32 flex justify-center">
        <div className="bg-white shadow-2xl shadow-slate-400 h-auto w-96 p-5 rounded-xl">
          <div>
            <h1 className="text-xl font-bold">Change Password</h1>
          </div>
          {err ? (
            <div className="pt-2">
              <div className=" border bg-red-200 h-auto p-2 rounded-md flex justify-center items-center">
                <h1 className="text-red-500 ">{err}</h1>
              </div>
            </div>
          ) : (
            ""
          )}
          <CustomInput
            type="number"
            label={"OTP *"}
            value={data.otp}
            onchangeHandler={onChangeHandler}
            name={"otp"}
            placeHolder="example@gmail.com"
            varient={"PRIMARY"}
            isDesabled={false}
          />
          <CustomInput
            type="password"
            label={"Password *"}
            value={data.password}
            onchangeHandler={onChangeHandler}
            name={"password"}
            placeHolder="******"
            varient={"PRIMARY"}
            isDesabled={false}
          />
          <CustomInput
            type="password"
            label={"Confirm password *"}
            value={data.confirmPassword}
            onchangeHandler={onChangeHandler}
            name={"confirPassword"}
            placeHolder="******"
            varient={"PRIMARY"}
            isDesabled={false}
          />

          <div className="pt-4 ">
            <CommonButton
              varient={"PRIMARY"}
              text={"Continue"}
              onSubmitHandler={handleSubmit}
              isDesabled={false}
              loading={isLoading}
              type="button"
            />
          </div>
          <div className="pt-4 flex justify-center">
            <a
              href="/signin"
              className="border-2 text-center border-myblue text-blue-800 p-2 w-full rounded-lg"
            >
              Back to SignIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeNewPassword;
