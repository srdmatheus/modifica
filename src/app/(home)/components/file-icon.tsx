import { Icon } from "@/components/ui/icon";

export const FileIcon = ({ type }: { type: string }) => {
  if (type.includes("image")) {
    return <Icon.image className="size-5 text-primary" />;
  }

  if (type.includes("video")) {
    return <Icon.video className="size-5 text-primary" />;
  }

  return <Icon.file className="size-5 text-primary" />;
};
