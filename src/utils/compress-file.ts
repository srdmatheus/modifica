import imageCompression, { Options } from "browser-image-compression";

type CompressFileProps = {
  file: File;
};

export const compressFile = async ({ file }: CompressFileProps) => {
  const options: Options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true
  };

  try {
    return await imageCompression(file, options);
  } catch (error) {
    console.error("Erro ao comprimir o arquivo: ", error);
    throw error;
  }
};
