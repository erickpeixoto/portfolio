import { Logo } from "@/app/components/logo";
import { LookAtMe } from "@/app/components/lookAtMe";
import { Menu } from "@/app/components/menu";
import { ThemeToggle } from "@/app/components/themeToggle";
import { Schedule } from "@/app/components/buttonSchedule";
import { MenuMobile } from "@/app/components/menu/mobile";

export const NavBar = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 hidden md:flex gap-3 justify-between w-full px-5 items-center text-black dark:text-white border-b border-[--surface-border] bg-white/80 dark:bg-[#080808]/80 backdrop-blur-md">
        <Logo />
        <LookAtMe />
        <Menu />
        <ThemeToggle />
        <Schedule />
      </nav>
      <MenuMobile />
    </>
  );
};
