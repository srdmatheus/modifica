import { FileHandler } from "./components/conversion-handler";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col items-center px-4">
      <div className="flex max-w-[58ch] flex-col items-center gap-6 py-8 md:py-14">
        <h1 className="text-center font-heading text-2xl font-extrabold tracking-tight md:text-4xl">
          Conversor de imagens ilimitado e 100% gratuito para sempre!! 🥳
        </h1>
        <p className="text-center text-sm text-foreground-muted md:text-base">
          Solte, escolha o formato, converta! Tão simples quanto parece!
        </p>
      </div>

      <FileHandler />
    </main>
  );
}
