import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <div className="flex justify-center items-center">
      <button
        className=" text-white my-10 px-10 py-4 rounded-md bg-sky-500"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
