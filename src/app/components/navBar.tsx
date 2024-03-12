import { Logo } from "@/app/components/logo";
import { LookAtMe } from "@/app/components/lookAtMe";
import { Menu } from "@/app/components/menu";
import { ThemeToggle } from "@/app/components/themeToggle";
import Resume from "@/app/components/buttonResume";

export const NavBar = () => {
  return (
    <nav className="flex gap-3 justify-between w-full px-5 items-center text-black dark:text-white border-b-1 dark:border-slate-800 border-slate-300">
      <Logo />
      <LookAtMe />
      <Menu />
      <ThemeToggle />
      <Resume />
    </nav>
  );
};
