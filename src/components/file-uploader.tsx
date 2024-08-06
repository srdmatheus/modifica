"use client";

import { useFileStore } from "@/stores/fileStore";
import ReactDropzone from "react-dropzone";

const accepted_files = {
  "image/*": [
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".bmp",
    ".webp",
    ".ico",
    ".tif",
    ".tiff",
    ".raw",
    ".tga"
  ],
  "audio/*": [],
  "video/*": []
};

export const FileUploader = () => {
  const { addFiles } = useFileStore();

  const onDrop = (acceptedFiles: File[]) => {
    addFiles(acceptedFiles);
  };

  return (
    <ReactDropzone onDrop={onDrop} accept={accepted_files}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <div
          {...getRootProps()}
          className="flex h-60 w-full cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed bg-foreground-muted/5 transition-all hover:bg-foreground-muted/[.08]"
        >
          <input {...getInputProps()} />
          <p className="text-2xl font-medium tracking-tight">
            {isDragActive
              ? "Solte os arquivos aqui..."
              : "Clique ou solte seus arquivos aqui"}
          </p>
        </div>
      )}
    </ReactDropzone>
  );
};
