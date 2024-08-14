import { Title } from "@/components/ui/title";
import { RevealAnimation } from "@/components/animation/reveal-animation";

import { CompressHandler } from "./components/compress-handler";

export default function CompressPage() {
  return (
    <main className="container mx-auto flex flex-col items-center px-4">
      <div className="flex max-w-[58ch] flex-col items-center gap-6 py-8 md:py-14">
        <RevealAnimation delay={0.2}>
          <Title>
            Comprima suas imagens de forma ilimitada e 100% gratuita! 👌
          </Title>
        </RevealAnimation>
        <RevealAnimation delay={0.4}>
          <p className="text-center text-sm text-foreground-muted md:text-base">
            Solte, comprima! Tão simples quanto parece!
          </p>
        </RevealAnimation>
      </div>
      <RevealAnimation delay={0.6}>
        <CompressHandler />
      </RevealAnimation>
    </main>
  );
}
