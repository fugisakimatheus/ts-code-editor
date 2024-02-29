import { Logo } from '@/components/ui/logo'
import { ActionsMenu } from './actions-menu'

export function DrawerHeader() {
  return (
    <div className="w-full flex flex-row items-center h-8">
      <div className="flex flex-row items-center justify-center h-full ml-3 py-1 pr-2">
        <Logo className="min-w-4 min-h-4 max-w-4 max-h-4 text-blue-600" />
      </div>
      <ActionsMenu />
      <div className="w-full h-full drag-window"></div>
    </div>
  )
}
