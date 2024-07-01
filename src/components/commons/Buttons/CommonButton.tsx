import React from "react";
import BtnLoader from "../loders/ButtonLoder";

interface ButtonActions {
  onSubmitHandler: () => void;
  text: string;
  loading: boolean;
  type: "submit" | "button";
  varient: string;
  isDesabled: boolean;
}

const style = {
  PRIMARY: "uppercase bg-primary text-white w-full h-10 rounded-md ",
  SECONDARY:
    "uppercase bg-white border-2 border-primary text-white w-full h-10 rounded-md ",
};

function CommonButton({
  onSubmitHandler,
  text,
  loading,
  type,
  varient,
  isDesabled,
}: ButtonActions) {
  return (
    <div className="pt-2">
      {!loading ? (
        <button
          type={type}
          onClick={() => {
            onSubmitHandler();
          }}
          className={varient === "PRIMARY" ? style.PRIMARY : style.SECONDARY}
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
