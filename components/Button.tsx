import React from "react";

interface ButtonProps {
  buttonText: String;
}

const Button = ({ buttonText }: ButtonProps) => {
  return (
    <div className="bg-primaryColor text-gray-100 px-10 py-2 rounded-sm hover:bg-blue-900 transition-colors cursor-pointer">
      {buttonText}
    </div>
  );
};

export default Button;
