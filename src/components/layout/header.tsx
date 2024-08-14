import Link from "next/link";

import { links } from "@/config/site";
import { Button, Icon } from "@/components/ui";

import { RevealAnimation } from "../animation/reveal-animation";
import { Logo } from "../app/logo";
import { Nav } from "./nav";

export const Header = () => {
  return (
    <RevealAnimation directionY={-40} delay={0.2}>
      <header className="container mx-auto flex h-20 w-full items-center justify-between px-4">
        <Link
          href="/"
          className="hidden w-full max-w-[200px] text-foreground md:flex"
        >
          <span className="sr-only">Voltar à página inicial</span>
          <Logo />
        </Link>
        <Nav />
        <Button asChild className="flex gap-2 rounded-full text-xs md:text-sm">
          <Link href={links.githubRepo} target="_blank">
            <Icon.github className="size-4" /> Repositório
          </Link>
        </Button>
      </header>
    </RevealAnimation>
  );
};
