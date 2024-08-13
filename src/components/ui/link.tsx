import { ReactNode } from "react";
import NextLink, { LinkProps } from "next/link";

import { cn } from "@/lib/utils";

type Props = LinkProps & {
  className?: string;
  children: ReactNode;
};

export const Link = ({ className, children, href, ...props }: Props) => {
  const isInternal = String(href).startsWith("/");
  return (
    <NextLink
      href={href}
      className={cn(
        "font-heading font-bold text-primary hover:underline",
        !isInternal && "cursor-alias",
        className
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
};
