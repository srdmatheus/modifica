import { NavItemModel } from "@/models/nav-item";

export const links = {
  githubProfile: "https://github.com/srdmatheus",
  githubRepo: "https://github.com/srdmatheus/modifica"
};

export const navItems: NavItemModel[] = [
  { label: "Converter", href: "/" },
  { label: "Comprimir", href: "/compress" },
  { label: "Sobre", href: "/about" }
];
