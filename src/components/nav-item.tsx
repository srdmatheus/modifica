import Link from "next/link";

import { NavItemModel } from "@/models/nav-item";

export const NavItem = ({ label, href }: NavItemModel) => {
  return (
    <li>
      <Link
        href={href}
        className="rounded-lg p-2 transition-all hover:bg-foreground-muted/10"
      >
        {label}
      </Link>
    </li>
  );
};
