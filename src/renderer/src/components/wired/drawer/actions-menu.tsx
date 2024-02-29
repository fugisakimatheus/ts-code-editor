import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger
} from '@/components/ui/menubar'

export function ActionsMenu() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>Ctrl+N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New File <MenubarShortcut>Ctrl+Alt+N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>Ctrl+Shift+N</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Open File <MenubarShortcut>Ctrl+O</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Open Folder <MenubarShortcut>Ctrl+K Ctrl+O</MenubarShortcut>
          </MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>Open Recent</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Save <MenubarShortcut>Ctrl+S</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Save As <MenubarShortcut>Ctrl+Shift+S</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Exit <MenubarShortcut>Ctrl+Q</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Command Palette <MenubarShortcut>Ctrl+Shift+P</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Search <MenubarShortcut>Ctrl+Shift+F</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Terminal <MenubarShortcut>Ctrl+Shift+´</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Toggle Sidebar <MenubarShortcut>Ctrl+B</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Shortcuts <MenubarShortcut>Ctrl+K Ctrl+S</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Settings <MenubarShortcut>Ctrl+K Ctrl+O</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
