import * as React from "react";

import { cn } from "@/lib/utils";

export const Section = React.forwardRef<
  HTMLElement,
  {
    id: string;
    className?: string;
    children: React.ReactNode;
  }
>(function Section({ id, className, children }, ref) {
  return (
    <section
      ref={ref}
      id={id}
      className={cn("scroll-mt-24 py-16 sm:py-24 lg:py-32", className)}
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">{children}</div>
    </section>
  );
});

