import Sidebar from "@/components/sidebar";
import React, { ReactElement } from "react";
import { cn } from "@/lib/utils";

interface ComponentsLayoutProps {
  children: React.ReactNode;
}

export default function ComponentsLayout({ children }: ComponentsLayoutProps) {
  return (
    <Sidebar>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // Ensure that the child accepts `className`
          return React.cloneElement(child as ReactElement<{ className?: string }>, {
            className: cn(child.props.className, "w-full") as React.HTMLAttributes<HTMLElement>["className"],
          });
        }
        return child;
      })}
    </Sidebar>
  );
}
