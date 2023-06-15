"use client";

type ButtonMuiType = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ButtonMui: React.FC<ButtonMuiType> = ({ children, onClick }) => (
  <button
    className="flex items-center justify-center w-12 h-12 text-xl rounded-full hover:bg-gray-100 hover:dark:bg-zinc-900 text-zinc-400"
    onClick={onClick}
  >
    {children}
  </button>
);

export default ButtonMui;
