import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

type FileActionProps = {
  onRemoveFile: () => void;
  outputFile: { url: string; name: string } | undefined;
};

export const FileActions = ({ onRemoveFile, outputFile }: FileActionProps) => (
  <div className="flex items-center gap-2">
    {outputFile ? (
      <Button
        asChild
        className="transitional-all flex items-center justify-center rounded-2xl bg-transparent p-2.5 text-foreground transition-all hover:bg-foreground-muted/10"
      >
        <a href={outputFile.url} download={outputFile.name}>
          <span className="sr-only">Baixar arquivo</span>
          <Icon.download className="size-5" />
        </a>
      </Button>
    ) : (
      <Button
        onClick={onRemoveFile}
        className="transitional-all flex items-center justify-center rounded-2xl bg-transparent p-2.5 text-foreground transition-all hover:bg-foreground-muted/10"
      >
        <span className="sr-only">Excluir arquivo</span>
        <Icon.close className="size-5" />
      </Button>
    )}
  </div>
);
