"use client";
import axiosConfig from "@/config/axios.config";
import Link from "next/link";
import { useState, ChangeEvent } from "react";
import { BiSolidError } from "react-icons/bi";
import CommonButton from "@/components/commons/Buttons/CommonButton";

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
              <div>
                <div>
                  <label className="text-sm">First name</label>
                </div>
                <div>
                  <input
                    name="name"
                    value={data.name}
                    onChange={(e) => {
                      onChangeHandler(e);
                    }}
                    type="text"
                    className="w-full h-9 outline-none border-gray-300 border rounded-md p-2"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="text-sm">Last name</label>
                </div>
                <div>
                  <input
                    value={data.last_name}
                    name="last_name"
                    onChange={(e) => {
                      onChangeHandler(e);
                    }}
                    type="text"
                    className="w-full h-9 outline-none border-gray-300 border rounded-md p-2"
                  />
                </div>
              </div>
              <div></div>
            </div>
          </div>

          <div className="pt-1">
            <div>
              <label className="text-sm"> Email address</label>
            </div>
            <div>
              <input
                name="email"
                value={data.email}
                onChange={(e) => {
                  onChangeHandler(e);
                }}
                type="email"
                className="w-full h-9 outline-none border-gray-300 border rounded-md p-2"
              />
            </div>
          </div>
          <div className="pt-2">
            <div>
              <label className="text-sm">Password</label>
            </div>
            <div>
              <input
                name="password"
                value={data.password}
                onChange={(e) => {
                  onChangeHandler(e);
                }}
                type="password"
                className="w-full h-9 outline-none border-gray-300 border rounded-md p-2"
              />
            </div>
          </div>
          <div className="pt-4">
            <CommonButton
              onSubmitHandler={handleSubmit}
              text={"Register"}
              loading={isLoading}
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
