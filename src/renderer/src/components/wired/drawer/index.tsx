import { FolderThree } from '../folder-three'
import { DrawerHeader } from './drawer-header'

export function Drawer() {
  return (
    <div className="w-full h-svh bg-zinc-900">
      <DrawerHeader />

      <div className="px-3 text-zinc-400/90 uppercase text-xs font-semibold py-1 bg-zinc-800/30 mb-1">
        ts-code-editor
      </div>

      <FolderThree />
    </div>
  )
}
