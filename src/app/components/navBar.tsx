import { Logo } from "@/app/components/logo";
import { LookAtMe } from "@/app/components/lookAtMe";
import { Menu } from "@/app/components/menu";
import { ThemeToggle } from "@/app/components/themeToggle";

export const NavBar = () => {
  return (
    <nav>
      <Logo />
      <LookAtMe />
      <Menu />
      <ThemeToggle />
    </nav>
  );
};
