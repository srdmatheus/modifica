import { Icon } from "./icon";

export const FileIcon = ({ type }: { type: string }) => {
  if (type.includes("image")) {
    return <Icon.image className="size-5 text-primary" />;
  }

  if (type.includes("document")) {
    return <Icon.file className="size-5 text-primary" />;
  }

  if (type.includes("video")) {
    return <Icon.video className="size-5 text-primary" />;
  }
};
