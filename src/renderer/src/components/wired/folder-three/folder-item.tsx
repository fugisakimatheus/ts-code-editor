import { useState } from 'react'
import { FolderThreeItem } from '.'
import { Icon, IconNames } from '@/components/ui/icon'
import { iconByExtension, iconColorByExtension } from '@/shared/utils/theme'

export type FolderItemProps = {
  threeItem: FolderThreeItem
}

export function FolderItem(props: FolderItemProps) {
  const { threeItem } = props
  const [isOpen, setIsOpen] = useState(false)

  const isFolder = !!threeItem.items

  const items = (threeItem.items || []).sort((a, b) => {
    // sort by items
    if (a.items && !b.items) return -1
    if (!a.items && b.items) return 1
    // sort by name
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  })

  const extension = threeItem.name.split('.').pop()
  const icon: IconNames = extension ? iconByExtension[extension] ?? 'FiFile' : 'FiFile'
  const iconColor = extension ? iconColorByExtension[extension] ?? 'text-zinc-400' : 'text-zinc-400'

  return (
    <div className={`text-sm text-zinc-400 ${isFolder ? '' : 'pl-3'}`}>
      <div
        className="hover:bg-zinc-400/10 py-[2px] hover:text-zinc-200 flex flex-row items-center cursor-pointer px-1 transition-colors duration-100 ease-linear"
        onClick={() => setIsOpen((old) => !old)}
      >
        {isFolder && (
          <div className="flex flex-row items-center mr-2 gap-1">
            <Icon name="MdKeyboardArrowRight" size="sm" className={isOpen ? 'rotate-90' : ''} />
            <Icon name="MdOutlineFolder" />
          </div>
        )}
        {!isFolder && <Icon name={icon} className={`mr-2 ${iconColor}`} />}
        {threeItem.name}
      </div>

      {isOpen && (
        <div className="pl-3">
          {items.map((subItem, index) => (
            <FolderItem key={`${subItem.path}-${index}`} threeItem={subItem} />
          ))}
        </div>
      )}
    </div>
  )
}
