"use client";

import { useState } from "react";

import { useFileCompressStore } from "@/stores/fileCompressStore";
import { compressFile } from "@/utils/compress-file";

import { FileActions } from "@/components/app/file-actions";
import { FileDetails } from "@/components/app/file-details";
import { Status } from "@/components/app/status";
import { Button, Icon } from "@/components/ui";

export const FileCompress = () => {
  const [compressedFiles, setCompressedFiles] = useState<File[]>([]);
  const [isCompressing, setIsCompressing] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [maxSizeMB, setMaxSizeMB] = useState<number[]>([]);

  const { files, removeFile, clearFiles } = useFileCompressStore();

  const handleCompress = async () => {
    setIsCompressing(true);
    const outputFiles = await Promise.all(
      files.map(async (file, index) => {
        return await compressFile({
          file,
          maxSizeMB: maxSizeMB[index]
        });
      })
    );
    setCompressedFiles(outputFiles);
    setIsCompressing(false);
    setIsDone(true);
  };

  const downloadUnique = (index: number) => {
    const file = compressedFiles[index];
    if (!file) return;

    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadAll = () => {};

  const handleRemoveFileByName = (name: string) => {
    if (files.length === 1) {
      reset();
      return;
    }
    removeFile(name);
  };

  const reset = () => {
    clearFiles();
    setCompressedFiles([]);
    setIsDone(false);
  };

  return (
    <section className="flex w-full flex-col items-end gap-4 pb-10">
      {files.map(({ name, size, type }, index) => (
        <div
          key={name}
          className="flex w-full items-center justify-between rounded-2xl border p-6"
        >
          <FileDetails name={name} type={type} size={size} />

          {!isCompressing && !isDone && (
            <div className="flex items-center justify-center gap-2">
              <label
                htmlFor="maxsize"
                className="text-sm text-foreground-muted"
              >
                Tamanho máximo (MB):{" "}
              </label>
              <input
                id="maxsize"
                className="outer h-8 w-20 rounded-xl border text-center"
                min={1}
                max={50}
                type="number"
                value={maxSizeMB[index] || "1"}
                onChange={(e) => {
                  const newSizeMB = Number(e.target.value);
                  setMaxSizeMB((prev) => {
                    const updatedSizes = [...prev];
                    updatedSizes[index] = newSizeMB;
                    return updatedSizes;
                  });
                }}
              />
            </div>
          )}
          <Status isProcessing={isCompressing} isDone={isDone} />

          <FileActions
            onRemoveFile={() => handleRemoveFileByName(name)}
            hasDownload={compressedFiles.length >= 1}
            onDownloadFile={() => downloadUnique(index)}
          />
        </div>
      ))}

      {files.length && isDone ? (
        <div className="flex flex-col gap-4">
          <Button onClick={downloadAll}>
            Baixar {files.length > 1 && "todos"}
          </Button>
          <Button
            className="w-44 bg-foreground dark:text-background"
            onClick={reset}
          >
            Converter outro(s)
          </Button>
        </div>
      ) : (
        <Button
          onClick={handleCompress}
          disabled={isCompressing}
          className="w-44"
        >
          {isCompressing ? (
            <Icon.loading className="size-4 animate-spin" />
          ) : (
            "Converter agora"
          )}
        </Button>
      )}
    </section>
  );
};
