import Link from "next/link";

import { NavItemModel } from "@/models/nav-item";

export const NavItem = ({ label, href }: NavItemModel) => {
  return (
    <li>
      <Link
        href={href}
        className="rounded-2xl px-2 py-1 text-sm transition-all hover:bg-foreground-muted/10 md:px-3.5 md:py-2 md:text-base"
      >
        {label}
      </Link>
    </li>
  );
};
