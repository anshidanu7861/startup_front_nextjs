"use client";

import React, { ChangeEvent, useState } from "react";
import CustomInput from "../commons/CustomInputs/CustomInput";
import CommonButton from "../commons/Buttons/CommonButton";
import { useRouter } from "next/navigation";

function ForgotPasswordEmailConfirmPage() {
  const [err, setErr] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  

  const router = useRouter();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {};

  const handleSubmit = () => {
    try {
      router.push(`/newPassword/${12}`);
    } catch (error: any) {
      console.log(error);
      setErr(error.response.data.err || error.response.data.error);
    }
  };

  return (
    <div className="bg-white w-full h-screen">
      <div className="py-32 flex justify-center">
        <div className="bg-white shadow-2xl shadow-slate-400 h-96 w-96 p-5 rounded-xl">
          <div>
            <h1 className="text-xl font-bold">Forgot Password</h1>
          </div>
          {err ? (
            <div className="pt-2">
              <div className=" border bg-red-200 h-10 rounded-md flex justify-center items-center">
                <h1 className="text-red-500 ">{err}</h1>
              </div>
            </div>
          ) : (
            ""
          )}
          <CustomInput
            type="email"
            label={"Email address *"}
            value={email}
            onchangeHandler={onChangeHandler}
            name={"email"}
            placeHolder="example@gmail.com"
            varient={"PRIMARY"}
            isDesabled={false}
          />

          <div className="pt-4">
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

export default ForgotPasswordEmailConfirmPage;
