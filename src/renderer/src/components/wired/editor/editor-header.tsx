import { Icon } from '@/components/ui/icon'

type EditorHeaderProps = {
  hideTabs?: boolean
}

export function EditorHeader({ hideTabs = false }: EditorHeaderProps) {
  return (
    <div className=" w-full h-8 flex flex-row justify-between bg-zinc-900 z-[999999]">
      <div className={hideTabs ? 'hidden' : 'flex flex-row'}>
        <div className="px-2 py-1 bg-[#24292e] flex flex-row items-center justify-center cursor-pointer text-white w-max">
          <div className="flex flex-row items-center gap-[6px]">
            <span className="text-xs">
              header.tsx <span className="text-[10px] ml-[2px]">wired</span>
            </span>
            <div className="p-1 hover:bg-zinc-500/30 rounded hover:text-white">
              <Icon name="MdClose" size="xs" />
            </div>
          </div>
        </div>

        <div className="px-2 py-1 hover:bg-zinc-600/10 flex flex-row items-center justify-center cursor-pointer text-zinc-500 w-max group">
          <div className="flex flex-row items-center gap-[6px]">
            <span className="text-xs">
              button.tsx <span className="text-[10px] ml-[2px]">ui</span>
            </span>
            <div className="p-1 hover:bg-zinc-500/30 rounded hover:text-white">
              <Icon className="invisible group-hover:visible" name="MdClose" size="xs" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full drag-window"></div>

      <div className="flex flex-row text-zinc-200">
        <div className="hover:bg-zinc-600/15 py-1 px-3 flex flex-row items-center justify-center">
          <Icon name="MdMinimize" size="sm" />
        </div>

        <div className="hover:bg-zinc-600/15 py-1 px-3 flex flex-row items-center justify-center">
          <Icon name="MdOutlineSquare" size="14px" />
        </div>

        <div className="hover:bg-red-600/40 py-1 px-3 flex flex-row items-center justify-center">
          <Icon name="MdClose" size="sm" />
        </div>
      </div>
    </div>
  )
}
