"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const ResizableSidebar = ({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) => {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={20}>{sidebar}</ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel defaultSize={80}>{children}</ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default ResizableSidebar;
