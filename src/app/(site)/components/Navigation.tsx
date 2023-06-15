import ToggleSwitch from "@/components/ThemeSwitch";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import MenuLink from "@/components/MenuLink";
import LinkButton from "@/components/LinkButton";
import Button from "@/components/Button";
import SquareButton from "@/components/SquareButton";
import ButtonMui from "@/components/ButtonMui";

const Navigation = () => {
  return (
    <header className="flex items-center fixed top-0 left-0 w-full w-68px pl-8 justify-between border-b border-b-gray-200 dark:border-b-zinc-700">
      <div
        className={`
            flex
            items-center
        `}
      >
        <h1
          className={`
            flex
            justify-center
            items-center
            w-fit
            text-2xl
            font-bold
            h-full
            leading-6
            dark:text-zinc-300
        `}
        >
          <div className="h-fit">justjoin.it</div>
        </h1>
        <p className="px-0 pl-4 text-sm text-gray-400 dark:text-zinc-300">
          #1 Job Board for tech industry in Europe
        </p>
        <ToggleSwitch />
      </div>
      <div className="flex h-full">
        <div className="flex gap-3 items-center mr-3 h-full">
          <MenuLink href="/">Offers</MenuLink>
          <MenuLink href="/brands">Brand Stories</MenuLink>
          <MenuLink href="/geek">Geek</MenuLink>
          <MenuLink href="/matchmaking">Matchmaking</MenuLink>
          <LinkButton href="/add-offer">Post a Job</LinkButton>
          <Button>
            Sign in <IoIosArrowDown />
          </Button>
        </div>
        <SquareButton>PLN</SquareButton>
        <div className="h-16 w-16 flex items-center justify-center">
          <ButtonMui>
            <RxHamburgerMenu />
          </ButtonMui>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
