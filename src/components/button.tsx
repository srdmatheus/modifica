import { ComponentPropsWithoutRef, forwardRef } from "react";

import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  asChild?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "flex h-10 items-center justify-center gap-2 text-nowrap rounded-xl bg-primary px-4 font-medium text-background transition-all hover:opacity-90 dark:text-foreground",
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);

Button.displayName = "Button";
