import { ActionsMenu } from './actions-menu'
import Logo from '@/assets/logo.svg'

export function DrawerHeader() {
  return (
    <div className="w-full flex flex-row items-center h-8">
      <div className="flex flex-row items-center justify-center h-full ml-3 py-1 pr-2">
        <img src={Logo} alt="Logo" className="min-w-4 min-h-4 max-w-4 max-h-4" />
      </div>
      <ActionsMenu />
      <div className="w-full h-full drag-window"></div>
    </div>
  )
}
