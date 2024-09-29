"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { HomeIcon, FileIcon, ImageIcon, MessageCircleIcon, SettingsIcon } from "lucide-react"

interface SidebarProps {
  children: React.ReactNode
}

interface Topic {
  id: string
  title: string
  icon: React.ComponentType<{ className?: string }>
}

const topics: Topic[] = [
  { id: "home", title: "Home", icon: HomeIcon },
  { id: "files", title: "Files", icon: FileIcon },
  { id: "gallery", title: "Gallery", icon: ImageIcon },
  { id: "messages", title: "Messages", icon: MessageCircleIcon },
  { id: "settings", title: "Settings", icon: SettingsIcon },
]

export default function Sidebar({ children }: SidebarProps) {
  const [activeTopic, setActiveTopic] = useState(topics[0].id)

  return (
    <div className="flex h-screen bg-background">
      <div className="w-64 border-r rounded-l-xl overflow-hidden shadow-lg">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Topics</h2>
          <ScrollArea className="h-[calc(100vh-8rem)]">
            <div className="space-y-2">
              {topics.map((topic) => (
                <Button
                  key={topic.id}
                  variant={activeTopic === topic.id ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    activeTopic === topic.id && "light:bg-black dark:bg-white"
                  )}
                  onClick={() => setActiveTopic(topic.id)}
                >
                  <topic.icon className="mr-2 h-4 w-4" />
                  {topic.title}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
      <div className="flex-1 p-6 rounded-r-xl overflow-auto">
        {children}
      </div>
    </div>
  )
}