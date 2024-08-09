import { Icon } from "@/components/ui/icon";

type ConversionStatusProps = {
  isConverting: boolean;
  isDone: boolean;
};

export const ConversionStatus = ({
  isConverting,
  isDone
}: ConversionStatusProps) => (
  <>
    {isConverting && (
      <span className="flex h-8 w-40 items-center justify-center gap-2 rounded-full bg-foreground-muted/10 py-0 text-sm font-semibold leading-none">
        <Icon.loading className="size-4 animate-spin" />
        Convertendo...
      </span>
    )}
    {isDone && (
      <span className="flex h-8 w-40 items-center justify-center gap-2 rounded-full bg-green-600 py-0 text-sm font-semibold leading-none text-white">
        <Icon.checkCircle className="size-4" />
        Concluído
      </span>
    )}
  </>
);
