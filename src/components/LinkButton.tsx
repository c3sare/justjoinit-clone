"use client";
import Link from "next/link";

type LinkButtonProps = {
  children: React.ReactNode;
  href: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="rounded-full border border-gray-200 flex items-center justify-center h-10 px-4 text-sm dark:border-neutral-700 dark:bg-neutral-700 dark:text-neutral-300 hover:dark:bg-neutral-800 hover:dark:border-neutral-800 transition-colors"
    >
      {children}
    </Link>
  );
};

export default LinkButton;
