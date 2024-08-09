"use client";

import { useFileStore } from "@/stores/fileStore";

import { FileConverter } from "./file-converter";
import { FileUploader } from "./file-uploader";

export const FileHandler = () => {
  const { files } = useFileStore();

  return <>{files.length ? <FileConverter /> : <FileUploader />}</>;
};
