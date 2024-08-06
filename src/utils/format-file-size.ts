export const formatFileSize = (bytes: number) => {
  if (bytes === 0) return "0 Bytes";

  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const size = (bytes / Math.pow(1024, i)).toFixed(2);

  const unit = sizes[i];
  const plural = size === "1.00" && unit !== "Bytes" ? "" : "s";

  return `${size} ${unit}${plural}`;
};
