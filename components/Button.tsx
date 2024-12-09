import React from "react";

interface ButtonProps {
  onClick(): any;
  buttonText: String;
}

const Button = ({ buttonText, onClick }: ButtonProps) => {
  return (
    <div
      className="bg-primaryColor text-gray-100 px-6 md:px-10 py-2 rounded-sm hover:bg-blue-900 text-sm md:text-md transition-colors cursor-pointer"
      onClick={onClick}
    >
      {buttonText}
    </div>
  );
};

export default Button;
