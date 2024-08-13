import { create } from "zustand";

type FileCompressStore = {
  files: File[];
  addFiles: (files: File[]) => void;
  removeFile: (fileName: string) => void;
  clearFiles: () => void;
};

export const useFileCompressStore = create<FileCompressStore>((set) => ({
  files: [],
  addFiles: (files) => set((state) => ({ files: [...state.files, ...files] })),
  removeFile: (fileName) =>
    set((state) => ({
      files: state.files.filter((file) => file.name !== fileName)
    })),
  clearFiles: () => set({ files: [] })
}));
