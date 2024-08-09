import Link from "next/link";

import { NavItemModel } from "@/models/nav-item";

export const NavItem = ({ label, href }: NavItemModel) => {
  return (
    <li>
      <Link
        href={href}
        className="rounded-2xl px-3.5 py-2 transition-all hover:bg-foreground-muted/10"
      >
        {label}
      </Link>
    </li>
  );
};
