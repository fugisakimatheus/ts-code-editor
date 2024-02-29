import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { Drawer } from './drawer'
// import { Editor } from './editor'
import { EditorHeader } from './editor/editor-header'
import { InitialPage } from './initial-page'
// import { EditorTerminal } from './editor/editor-terminal'

export function Layout() {
  return (
    <div className="w-svw h-svh flex flex-col">
      <ResizablePanelGroup autoSaveId="persistent-panels" direction="horizontal" className="w-full">
        <ResizablePanel defaultSize={30} maxSize={60}>
          <Drawer />
        </ResizablePanel>

        <ResizableHandle className="bg-zinc-900" />

        <ResizablePanel className="relative">
          <EditorHeader hideTabs />
          {/* <Editor /> */}
          {/* <EditorTerminal /> */}
          <InitialPage />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
