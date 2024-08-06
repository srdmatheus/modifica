import { FileConverter } from "@/components/file-converter";

export default function Home() {
  return (
    <main className="container mx-auto flex h-dvh flex-col items-center px-4">
      <div className="flex w-2/3 flex-col gap-6 py-14">
        <h1 className="text-center text-4xl font-medium tracking-tight">
          Conversor de arquivos ilimitado <br /> e gratuito para sempre!! 🥳
        </h1>
        <p className="text-center text-foreground-muted">
          A solução online perfeita para transformar e otimizar seus arquivos
          multimídia de maneira rápida e gratuita. Converta e comprima imagens,
          áudios e vídeos sem limitações, e dê vida nova ao seu conteúdo com
          facilidade. Comece a usar o <strong>Modifica</strong> hoje e descubra
          uma nova maneira de criar e compartilhar!
        </p>
      </div>

      <FileConverter />
    </main>
  );
}
