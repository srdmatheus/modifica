import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";

export const convertFile = async (
  ffmpeg: FFmpeg,
  file: File,
  outputFormat: string
): Promise<{ url: string; name: string }> => {
  const inputFileName = file.name;
  const outputFileName =
    inputFileName.replace(/\.[^/.]+$/, "") + "." + outputFormat;

  await ffmpeg.writeFile(inputFileName, await fetchFile(file));
  await ffmpeg.exec(["-i", inputFileName, outputFileName]);

  const data = (await ffmpeg.readFile(outputFileName)) as Uint8Array;
  const url = URL.createObjectURL(
    new Blob([data.buffer], { type: `image/${outputFormat}` })
  );

  return { url, name: outputFileName };
};
