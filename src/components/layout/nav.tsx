import { ComponentProps } from "react";

import { navItems } from "@/config/site";
import { cn } from "@/lib/utils";

import { NavItem } from "./nav-item";

type NavProps = ComponentProps<"nav">;

export const Nav = ({ className, ...props }: NavProps) => {
  return (
    <nav className={cn("", className)} {...props}>
      <ul className="flex items-center justify-center gap-1.5 md:gap-2">
        {navItems.map((item) => (
          <NavItem key={item.href} {...item} />
        ))}
      </ul>
    </nav>
  );
};
