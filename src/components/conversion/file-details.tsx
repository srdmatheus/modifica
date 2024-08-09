import { compressFileName } from "@/utils/compress-filename";
import { formatFileSize } from "@/utils/format-file-size";

import { FileIcon } from "./file-icon";

type FileDetailsProps = {
  name: string;
  size: number;
  type: string;
};

export const FileDetails = ({ name, size, type }: FileDetailsProps) => {
  return (
    <div className="flex items-center gap-2">
      <FileIcon type={type} />
      <p>{compressFileName(name)}</p>
      <span className="pr-2 text-sm text-foreground-muted">
        {formatFileSize(size)}
      </span>
    </div>
  );
};
