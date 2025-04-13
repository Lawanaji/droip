import * as React from "react";
import { cn } from "../../lib/utils";

const CustomCard = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-secondary p-4 shadow-sm transition-all hover:shadow-md dark:bg-secondary/80",

      className
    )}
    {...props}
  />
));

CustomCard.displayName = "CustomCard";

export { CustomCard };
