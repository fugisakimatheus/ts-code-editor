import { CommandShortcut } from '../ui/command'
import { Logo } from '../ui/logo'

export function InitialPage() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-zinc-800/35">
      <Logo className="min-w-48 min-h-48 max-w-48 max-h-48 text-black/25" />
      <div className="flex flex-col justify-center mt-4 gap-4 w-full max-w-[300px]">
        <div className="flex flex-row items-center gap-1 text-zinc-300">
          <span className="text-zinc-500 mr-2 text-sm font-medium text-right w-[120px]">
            Show All Commands
          </span>

          <div className="flex flex-row items-center gap-[2px]">
            <CommandShortcut>Ctrl</CommandShortcut>+<CommandShortcut>Shift</CommandShortcut>+
            <CommandShortcut>P</CommandShortcut>
          </div>
        </div>

        <div className="flex flex-row items-center gap-1 text-zinc-300">
          <span className="text-zinc-500 mr-2 text-sm font-medium text-right w-[120px]">
            Open File
          </span>

          <div className="flex flex-row items-center gap-[2px]">
            <CommandShortcut>Ctrl</CommandShortcut>+<CommandShortcut>O</CommandShortcut>
          </div>
        </div>

        <div className="flex flex-row items-center gap-1 text-zinc-300">
          <span className="text-zinc-500 mr-2 text-sm font-medium text-right w-[120px]">
            Open Folder
          </span>

          <div className="flex flex-row items-center gap-[2px]">
            <CommandShortcut>Ctrl</CommandShortcut>+
            <CommandShortcut className="mr-2">K</CommandShortcut>
            <CommandShortcut>Ctrl</CommandShortcut>+<CommandShortcut>O</CommandShortcut>
          </div>
        </div>
      </div>
    </div>
  )
}
