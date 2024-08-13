"use client";

import { useFileCompressStore } from "@/stores/fileCompressStore";

import { FileUploader } from "@/components/app/file-uploader";

import { FileCompress } from "./file-compress";

export const CompressHandler = () => {
  const { files } = useFileCompressStore();
  return (
    <>
      {files.length ? (
        <FileCompress />
      ) : (
        <FileUploader toStore="compressStore" />
      )}
    </>
  );
};
