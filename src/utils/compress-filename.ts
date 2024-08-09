export const compressFileName = (fileName: string): string => {
  const maxSubstrLength = 24;

  if (fileName.length <= maxSubstrLength) {
    return fileName.trim();
  }

  const lastDotIndex = fileName.lastIndexOf(".");
  const fileNameWithoutExtension = fileName.slice(0, lastDotIndex);
  const fileExtension = fileName.slice(lastDotIndex + 1);

  const charsToKeep = maxSubstrLength - fileExtension.length - 3;

  const compressedFileName = `${fileNameWithoutExtension.slice(
    0,
    charsToKeep
  )}...${fileNameWithoutExtension.slice(-charsToKeep)}.${fileExtension}`;

  return compressedFileName;
};
