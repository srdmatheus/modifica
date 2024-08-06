import { navItems } from "@/config/site";

import { NavItem } from "./nav-item";

export const Nav = () => {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-2">
        {navItems.map((item) => (
          <NavItem key={item.href} {...item} />
        ))}
      </ul>
    </nav>
  );
};
