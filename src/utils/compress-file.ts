import imageCompression, { Options } from "browser-image-compression";

type CompressFileProps = {
  file: File;
  maxSizeMB: number;
};

export const compressFile = async ({ file, maxSizeMB }: CompressFileProps) => {
  const options: Options = {
    maxSizeMB
  };

  try {
    return await imageCompression(file, options);
  } catch (error) {
    console.error("Erro ao comprimir o arquivo: ", error);
    throw error;
  }
};
