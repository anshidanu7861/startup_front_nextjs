import React, { ChangeEvent } from "react";

interface CustomInputTypes {
  label: string;
  type: string;
  varient: string;
  isDesabled: boolean;
  onchangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
  value: any;
  name: string;
}

const style = {
  PRIMARY:
    "p-3 w-full h-10 border outline-none focus:border-green-500 rounded-lg",
  SECONDARY:
    "p-3 w-32 h-10 border outline-none focus:border-green-500 rounded-lg",
};

function CustomInput({
  label,
  type,
  varient,
  onchangeHandler,
  value,
  name,
  placeHolder,
}: CustomInputTypes) {
  return (
    <div className="pt-2">
      <div>
        <label className="text-sm text-primary">{label}</label>
      </div>
      <div>
        <input
          type={type}
          onChange={(e) => onchangeHandler(e)}
          value={value}
          name={name}
          className={varient === "PRIMARY" ? style.PRIMARY : style.SECONDARY}
          placeholder={placeHolder}
        />
      </div>
    </div>
  );
}

export default CustomInput;
