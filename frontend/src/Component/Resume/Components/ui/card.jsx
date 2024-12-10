import React from "react";

import { cn } from "@/lib/utils";

export const Card = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return (
    <div
      ref={ref}
      className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
      {...rest}
    />
  );
});
Card.displayName = "Card";

export const CardHeader = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...rest}
    />
  );
});
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return (
    <h3
      ref={ref}
      className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
      {...rest}
    />
  );
});
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...rest}
    />
  );
});
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return (
    <div
      ref={ref}
      className={cn("p-6 pt-0", className)}
      {...rest}
    />
  );
});
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...rest}
    />
  );
});
CardFooter.displayName = "CardFooter";
