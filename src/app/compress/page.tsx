import { CompressHandler } from "./components/compress-handler";

export default function CompressPage() {
  return (
    <main className="container mx-auto flex flex-col items-center px-4">
      <div className="flex max-w-[58ch] flex-col items-center gap-6 py-8 md:py-14">
        <h1 className="text-center font-heading text-2xl font-extrabold tracking-tight md:text-4xl">
          Comprima suas imagens de forma ilimitada e 100% gratuita! 👌
        </h1>
        <p className="text-center text-sm text-foreground-muted md:text-base">
          Solte, comprima! Tão simples quanto parece!
        </p>
      </div>
      <CompressHandler />
    </main>
  );
}
