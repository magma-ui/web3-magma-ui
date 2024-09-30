"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";

const sidebarItems = [
  { name: "Buttons", href: "/user-components/button" },
  { name: "A", href: "/user-components/a" },
  { name: "B", href: "/user-components/b" },
  { name: "C", href: "/user-components/c" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-44 flex-shrink-0 dark:bg-gray-800 border-r overflow-y-auto">
        <nav className="space-y-2">
          {sidebarItems.map((item, index) => (
            <Button
              key={index}
              href={item.href}
              as="a"
              color={pathname === item.href ? "primary" : "default"}
              variant={pathname === item.href ? "flat" : "light"}
              className="w-full justify-start"
            >
              {item.name}
            </Button>
          ))}
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}