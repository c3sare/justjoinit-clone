"use client";

type SquareButtonType = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const SquareButton: React.FC<SquareButtonType> = ({ children, onClick }) => (
  <div className="h-full w-14 flex items-center justify-center hover:bg-gray-100 ">
    <button
      className="
        flex
        items-center
        justify-center
        text-sm
        w-full
        h-full
        border-x
        dark:border-zinc-700
        hover:dark:bg-zinc-900
        dark:text-zinc-400
      "
      onClick={onClick}
    >
      {children}
    </button>
  </div>
);

export default SquareButton;
