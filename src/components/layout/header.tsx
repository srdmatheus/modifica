import Image from "next/image";
import Link from "next/link";

import { links } from "@/config/site";
import { Button, Icon } from "@/components/ui";

import { Nav } from "./nav";

export const Header = () => {
  return (
    <header className="container mx-auto flex h-20 w-full items-center justify-between px-4">
      <Link href="/">
        <Image
          src="/modifica-logo.svg"
          alt="Logotipo com a palavra 'modifica' em letras minúsculas, com setas vermelhas ao redor, uma apontando para a esquerda e outra para a direita, sugerindo um ciclo ou mudança."
          width={160}
          height={87}
        />
      </Link>
      <Nav />
      <Button asChild className="hidden gap-2 rounded-full text-sm md:flex">
        <Link href={links.githubRepo} target="_blank">
          <Icon.github className="size-4" /> Repositório
        </Link>
      </Button>
    </header>
  );
};
