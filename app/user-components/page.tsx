import { title } from "@/components/primitives";
import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"



export default function userComponentsPage() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel maxSize={25} className="p-40 bg-white text-black">One</ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel className="p-40 bg-black text-white">Two</ResizablePanel>
    </ResizablePanelGroup>
  )
}
