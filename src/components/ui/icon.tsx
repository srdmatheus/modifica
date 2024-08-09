import {
  ArrowUpFromLine,
  CheckCheckIcon,
  CopyIcon,
  DownloadIcon,
  File,
  GithubIcon,
  ImageIcon,
  LoaderCircleIcon,
  LucideProps,
  VideoIcon,
  XIcon,
  type LucideIcon
} from "lucide-react";

export const Icon = {
  close: XIcon,
  checkCircle: CheckCheckIcon,
  copy: CopyIcon,
  download: DownloadIcon,
  file: File,
  github: GithubIcon,
  image: ImageIcon,
  loading: LoaderCircleIcon,
  video: VideoIcon,
  upload: ArrowUpFromLine
};

export type IconType = LucideIcon;
export type IconName = keyof typeof Icon;

interface DynamicIconProps extends LucideProps {
  name: IconName;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const IconComponent = Icon[name];
  return <IconComponent {...props} />;
}
