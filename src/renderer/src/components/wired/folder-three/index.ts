export type FolderThreeItemType = 'file' | 'folder'

export type FolderThreeItem = {
  name: string
  path: string
  items?: FolderThreeItem[]
}

export { FolderThree } from './folder-three'
