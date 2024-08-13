"use client";

import { useFileStore } from "@/stores/fileStore";

import { FileUploader } from "@/components/app/file-uploader";

import { FileConverter } from "./file-converter";

export const FileHandler = () => {
  const { files } = useFileStore();

  return <>{files.length ? <FileConverter /> : <FileUploader />}</>;
};
