import {
  CopyIcon,
  File,
  GithubIcon,
  ImageIcon,
  LucideProps,
  VideoIcon,
  XIcon,
  type LucideIcon
} from "lucide-react";

export const Icon = {
  close: XIcon,
  copy: CopyIcon,
  file: File,
  github: GithubIcon,
  image: ImageIcon,
  video: VideoIcon
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
