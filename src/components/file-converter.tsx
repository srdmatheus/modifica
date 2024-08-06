"use client";

import { useFileStore } from "@/stores/fileStore";
import { formatFileSize } from "@/utils/format-file-size";

import { Button } from "./button";
import { FileIcon } from "./file-icon";
import { FileUploader } from "./file-uploader";
import { Icon } from "./icon";

export const FileConverter = () => {
  const { files, removeFile } = useFileStore();
  return (
    <>
      {files.length ? (
        <section className="flex w-full flex-col items-end gap-8">
          {files.map((file) => (
            <div
              key={file.name}
              className="flex w-full items-center justify-between rounded-2xl border p-6"
            >
              <div className="flex items-center gap-2">
                <FileIcon type={file.type} />
                <p>{file.name}</p>
                <span className="pr-2 text-xs text-foreground-muted">
                  {formatFileSize(file.size)}
                </span>
              </div>
              <div className="flex space-x-96">
                <div>
                  <span>Converter para</span>
                  <select name="" id="">
                    <option value="TS">Ts</option>
                  </select>
                </div>
                <button
                  title="Excluir arquivo"
                  onClick={() => removeFile(file.name)}
                  className="flex items-center justify-center rounded-2xl p-2.5 transition-all hover:bg-foreground-muted/10"
                >
                  <span className="sr-only">Excluir arquivo</span>
                  <Icon.close className="size-5" />
                </button>
              </div>
            </div>
          ))}
          <Button>Converter agora</Button>
        </section>
      ) : (
        <FileUploader />
      )}
    </>
  );
};
