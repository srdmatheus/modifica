import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

type FileActionProps = {
  onRemoveFile: () => void;
  onDownloadFile: () => void;
  hasDownload: boolean;
};

export const FileActions = ({
  onRemoveFile,
  onDownloadFile,
  hasDownload
}: FileActionProps) => (
  <div className="flex items-center gap-2">
    {hasDownload ? (
      <Button
        title="Baixar arquivo"
        onClick={onDownloadFile}
        className="transitional-all flex items-center justify-center rounded-2xl bg-transparent p-2.5 text-foreground transition-all hover:bg-foreground-muted/10"
      >
        <span className="sr-only">Baixar arquivo</span>
        <Icon.download className="size-5" />
      </Button>
    ) : (
      <Button
        title="Excluir arquivo"
        onClick={onRemoveFile}
        className="transitional-all flex items-center justify-center rounded-2xl bg-transparent p-2.5 text-foreground transition-all hover:bg-foreground-muted/10"
      >
        <span className="sr-only">Excluir arquivo</span>
        <Icon.close className="size-5" />
      </Button>
    )}
  </div>
);
