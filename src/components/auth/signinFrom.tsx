import Link from "next/link";

export default function SigninForm() {
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
          <div className="pt-2">
            <div>
              <h1 className="font-bold text-xl">Sign in</h1>
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
            <div>
              <label className="text-sm"> Email address</label>
            </div>
            <div>
              <input
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
                type="password"
                className="w-full h-9 outline-none border-gray-300 border rounded-md p-2"
              />
            </div>
          </div>
          <div className="pt-4">
            <button className="uppercase bg-primary text-white w-full h-10 rounded-md ">
              continue
            </button>
          </div>
          <div className="pt-7">
            <p className="text-xs">
              No account?
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
