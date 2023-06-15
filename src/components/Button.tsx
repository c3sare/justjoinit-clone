"use client";

type ButtonType = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonType> = ({ children, onClick }) => (
  <button
    className="rounded-full flex items-center justify-center h-10 px-4 text-white bg-pink-500 hover:bg-pink-700 transition-colors text-sm"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
