import { RevealAnimation } from "@/components/animation/reveal-animation";
import { Link, Title } from "@/components/ui";

export default function AboutPage() {
  return (
    <main className="container mx-auto flex flex-col items-center gap-6 px-4 py-8 md:py-14">
      <RevealAnimation delay={0.2}>
        <Title>Sobre</Title>
      </RevealAnimation>
      <div className="max-w-[800px] leading-relaxed [&>*:not(:last-child)]:pb-4">
        <RevealAnimation delay={0.3}>
          <p>
            Este projeto foi desenvolvido para facilitar a{" "}
            <strong>conversão e compressão de imagens</strong> para diversos
            formatos, como PNG, JPEG, TIFF, WEBP, entre outros.
          </p>
        </RevealAnimation>
        <RevealAnimation delay={0.4}>
          <p>
            Usamos tecnologias open-source de alta qualidade, como{" "}
            <Link href="https://github.com/ffmpegwasm/ffmpeg.wasm">
              ffmpeg.wasm
            </Link>{" "}
            e{" "}
            <Link href="https://github.com/Donaldcwl/browser-image-compression">
              browser-image-compression
            </Link>
            , para garantir que todo o processo ocorra no seu{" "}
            <strong>próprio navegador</strong>, sem a necessidade de enviar
            arquivos para servidores externos. Isso significa que seus dados
            permanecem totalmente seguros.
          </p>
        </RevealAnimation>
        <RevealAnimation delay={0.5}>
          <p>
            Além disso, o projeto foi pensado para ser acessível e fácil de usar
            por qualquer pessoa. Ele conta com uma interface simples e
            intuitiva, que se adapta ao modo claro ou escuro, conforme a sua
            preferência. Você também pode instalá-lo como um{" "}
            <strong>Progressive Web App (PWA)</strong>, o que permite usá-lo
            como um aplicativo normal, mesmo sem conexão com a internet.
          </p>
        </RevealAnimation>
        <RevealAnimation delay={0.6}>
          <p>
            Confira mais dos meus projetos no{" "}
            <Link href="https://github.com/srdmatheus">GitHub</Link>. Para
            conversas e colaborações, me encontre no{" "}
            <Link href="https://linkedin.com/in/srdmatheus">LinkedIn</Link>.
          </p>
        </RevealAnimation>
      </div>{" "}
    </main>
  );
}
