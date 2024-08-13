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

export const APP_CONFIG = {
  APP_NAME: "Modifica",
  APP_DEFAULT_TITLE: "Modifica",
  APP_TITLE_TEMPLATE: "%s - App",
  APP_DESCRIPTION:
    "Converta e comprima facilmente suas imagens para vários formatos como PNG, JPEG, GIF e outros!"
};
