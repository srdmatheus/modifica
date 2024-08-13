"use client";

import { useFileCompressStore } from "@/stores/fileCompressStore";
import { useFileStore } from "@/stores/fileStore";
import ReactDropzone from "react-dropzone";

import { accepted_files } from "@/config/accepted-files";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";

type FileUploaderProps = {
  toStore?: "fileStore" | "compressStore";
  className?: string;
};

export const FileUploader = ({
  className,
  toStore = "fileStore"
}: FileUploaderProps) => {
  const addFileStore = useFileStore((state) => state.addFiles);
  const addCompressFileStore = useFileCompressStore((state) => state.addFiles);

  const onDrop = (acceptedFiles: File[]) => {
    if (toStore === "fileStore") {
      addFileStore(acceptedFiles);
    }

    if (toStore === "compressStore") {
      addCompressFileStore(acceptedFiles);
    }
  };

  return (
    <ReactDropzone onDrop={onDrop} accept={accepted_files}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <div
          {...getRootProps()}
          className={cn(
            "flex h-80 w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed bg-foreground-muted/5 transition-all hover:bg-foreground-muted/[.08]",
            className
          )}
        >
          <input {...getInputProps()} />
          <Icon.upload className="size-12" />
          <p className="text-center text-xl font-medium tracking-tight md:text-2xl">
            {isDragActive
              ? "Solte aqui..."
              : "Clique ou solte suas imagens aqui"}
          </p>
        </div>
      )}
    </ReactDropzone>
  );
};
