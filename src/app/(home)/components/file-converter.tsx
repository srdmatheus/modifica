"use client";

import { useEffect, useRef, useState } from "react";

import { useFileStore } from "@/stores/fileStore";
import { convertFile } from "@/utils/convert-file";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { toBlobURL } from "@ffmpeg/util";

import { FileActions } from "../../../components/app/file-actions";
import { FileDetails } from "../../../components/app/file-details";
import { Status } from "../../../components/app/status";
import { Button } from "../../../components/ui/button";
import { Icon } from "../../../components/ui/icon";
import { FileConverterSkeleton } from "./file-converter-skeleton";
import { FormatSelector } from "./format-selector";

export const FileConverter = () => {
  const { files, removeFile, clearFiles } = useFileStore();
  const [isConverting, setIsConverting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const ffmpegRef = useRef<FFmpeg>(new FFmpeg());
  const messageRef = useRef<HTMLParagraphElement | null>(null);
  const [formats, setFormats] = useState<{ [key: string]: string }>({});
  const [outputFiles, setOutputFiles] = useState<
    { url: string; name: string }[]
  >([]);

  useEffect(() => {
    const loadFFmpeg = async () => {
      const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";
      const ffmpeg = ffmpegRef.current;
      ffmpeg.on("progress", ({ progress }) => {
        if (messageRef.current) messageRef.current.innerHTML = `${progress}`;
      });
      await ffmpeg.load({
        coreURL: await toBlobURL(
          `${baseURL}/ffmpeg-core.js`,
          "text/javascript"
        ),
        wasmURL: await toBlobURL(
          `${baseURL}/ffmpeg-core.wasm`,
          "application/wasm"
        )
      });
      setLoaded(true);
    };
    loadFFmpeg();
  }, []);

  const handleFormatChange = (fileName: string, format: string) => {
    setFormats((prev) => ({ ...prev, [fileName]: format }));
  };

  const transcode = async () => {
    setIsConverting(true);
    const ffmpeg = ffmpegRef.current;
    const outputFiles = await Promise.all(
      files.map(async (file) => {
        const format = formats[file.name] || "png"; // Default format
        return await convertFile(ffmpeg, file, format);
      })
    );
    setOutputFiles(outputFiles);
    setIsConverting(false);
    setIsDone(true);
  };

  const downloadUnique = (file: { url: string; name: string }) => {
    const a = document.createElement("a");
    a.href = file.url;
    a.download = file.name;
    a.click();
  };

  const downloadAll = () => {
    outputFiles.forEach((file) => {
      const a = document.createElement("a");
      a.href = file.url;
      a.download = file.name;
      a.click();
    });
  };

  const formatsIsNotSelected = Object.keys(formats).length < files.length;

  const handleRemoveByName = (fileName: string) => {
    removeFile(fileName);
    if (files.length === 1) {
      reset();
    }
  };

  const reset = () => {
    clearFiles();
    setOutputFiles([]);
    setFormats({});
    setIsDone(false);
  };

  if (!loaded) return <FileConverterSkeleton />;

  return (
    <section className="flex w-full flex-col items-end gap-4">
      {files.map((file, index) => (
        <div
          key={file.name}
          className="flex w-full items-center justify-between rounded-2xl border p-6"
        >
          <FileDetails name={file.name} type={file.type} size={file.size} />
          <div className="flex space-x-96">
            <Status isProcessing={isConverting} isDone={isDone} />

            {!isConverting && !isDone && (
              <FormatSelector
                format={formats[file.name] || ""}
                disabled={isDone}
                onFormatChange={(e) => handleFormatChange(file.name, e)}
              />
            )}

            <FileActions
              hasDownload={outputFiles.length >= 1}
              onDownloadFile={() => downloadUnique(outputFiles[index])}
              onRemoveFile={() => handleRemoveByName(file.name)}
            />
          </div>
        </div>
      ))}

      {files.length && isDone ? (
        <div className="flex flex-col gap-4">
          <Button onClick={downloadAll}>
            Baixar {files.length > 1 && "todos"}
          </Button>
          <Button
            className="w-44 bg-foreground dark:text-background"
            onClick={reset}
          >
            Converter outro(s)
          </Button>
        </div>
      ) : (
        <Button
          onClick={transcode}
          disabled={formatsIsNotSelected || isConverting}
          className="w-44"
        >
          {isConverting ? (
            <Icon.loading className="size-4 animate-spin" />
          ) : (
            "Converter agora"
          )}
        </Button>
      )}
    </section>
  );
};
