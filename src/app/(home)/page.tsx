import { Title } from "@/components/ui/title";
import { RevealAnimation } from "@/components/animation/reveal-animation";

import { FileHandler } from "./components/conversion-handler";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col items-center px-4">
      <div className="flex max-w-[58ch] flex-col items-center gap-6 py-8 md:py-14">
        <RevealAnimation delay={0.2}>
          <Title>
            Conversor de imagens ilimitado e 100% gratuito para sempre!! 🥳
          </Title>
        </RevealAnimation>
        <RevealAnimation delay={0.4}>
          <p className="text-center text-sm text-foreground-muted md:text-base">
            Solte, escolha o formato, converta! Tão simples quanto parece!
          </p>
        </RevealAnimation>
      </div>

      <RevealAnimation delay={0.6}>
        <FileHandler />
      </RevealAnimation>
    </main>
  );
}
