"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuLinkProps = {
  children: React.ReactNode;
  href: string;
};

const MenuLink: React.FC<MenuLinkProps> = ({ children, href }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={clsx(
        "text-sm font-medium text-gray-400",
        pathname === href ? "text-pink-500" : "hover:text-pink-300"
      )}
    >
      {children}
    </Link>
  );
};

export default MenuLink;
