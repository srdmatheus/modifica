import { DetailedHTMLProps, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type TitleProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const Title = ({
  children,
  className,
  variant = "h1",
  ...props
}: TitleProps) => {
  const Comp = variant;
  return (
    <Comp
      className={cn(
        "text-center font-heading text-2xl font-extrabold tracking-tight md:text-4xl",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};
