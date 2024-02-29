import { FolderThreeItem } from '.'
import { FolderItem } from './folder-item'

const folders: FolderThreeItem[] = [
  {
    name: 'node_modules',
    path: './node_modules',
    items: []
  },
  {
    name: 'main',
    path: './main',
    items: [
      {
        name: 'index.html',
        path: './main/index.html'
      },
      {
        name: 'index.jsx',
        path: './main/index.jsx'
      }
    ]
  },
  {
    name: 'test',
    path: './test',
    items: [
      {
        name: 'index-html',
        path: './main/index-html',
        items: [
          {
            name: 'renderer',
            path: './renderer',
            items: []
          },
          {
            name: 'index.tsx',
            path: './main/index.tsx'
          }
        ]
      },
      {
        name: 'index.js',
        path: './main/index.js'
      }
    ]
  },
  {
    name: 'preload',
    path: './preload',
    items: [
      {
        name: 'preload.ts',
        path: './main/preload.ts'
      },
      {
        name: 'renderer',
        path: './renderer',
        items: [
          {
            name: 'main',
            path: './main/main',
            items: [
              {
                name: 'preload.scss',
                path: './main/preload.scss'
              },
              {
                name: 'preload',
                path: './preload',
                items: [
                  {
                    name: 'preload.md',
                    path: './main/preload.md'
                  },
                  {
                    name: 'renderer',
                    path: './renderer',
                    items: [
                      {
                        name: 'index.json',
                        path: './main/index.json'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'renderer',
    path: './renderer',
    items: [
      {
        name: 'index.sass',
        path: './main/index.sass'
      },
      {
        name: 'index.vue',
        path: './main/index.vue'
      },
      {
        name: 'index.yml',
        path: './main/index.yml'
      }
    ]
  },
  {
    name: 'index.styl',
    path: './main/index.styl'
  },
  {
    name: 'index.css',
    path: './main/index.css'
  },
  {
    name: 'index.less',
    path: './main/index.less'
  },
  {
    name: 'index.jpg',
    path: './main/index.jpg'
  },
  {
    name: 'index.png',
    path: './main/index.png'
  },
  {
    name: 'index.ico',
    path: './main/index.ico'
  },
  {
    name: 'index.svg',
    path: './main/index.svg'
  },
  {
    name: 'index.btt',
    path: './main/index.btt'
  }
]

export function FolderThree() {
  return (
    <div className="h-full w-full flex flex-col px-2">
      {folders.map((item, index) => (
        <FolderItem key={index} threeItem={item} />
      ))}
    </div>
  )
}
