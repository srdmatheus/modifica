"use client";

import { useFileStore } from "@/stores/fileStore";
import ReactDropzone from "react-dropzone";

import { accepted_files } from "@/config/accepted-files";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";

type FileUploaderProps = {
  className?: string;
};

export const FileUploader = ({ className }: FileUploaderProps) => {
  const { addFiles } = useFileStore();

  const onDrop = (acceptedFiles: File[]) => {
    console.log("Files dropped:", acceptedFiles);

    addFiles(acceptedFiles);
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
