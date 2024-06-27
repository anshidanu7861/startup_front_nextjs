import React from "react";
import BtnLoader from "../loders/ButtonLoder";

interface ButtonActions {
  onSubmitHandler: () => void;
  text: string;
  loading: boolean;
}

function CommonButton({ onSubmitHandler, text, loading }: ButtonActions) {
  return (
    <div>
      {!loading ? (
        <button
          onClick={() => {
            onSubmitHandler();
          }}
          className="uppercase bg-primary text-white w-full h-10 rounded-md "
        >
          {text}
        </button>
      ) : (
        <button className="bg-primary text-white w-full h-10 rounded-md">
          <BtnLoader />
        </button>
      )}
    </div>
  );
}

export default CommonButton;
