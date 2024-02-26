import { useRef, useState, useEffect } from 'react'
import * as monaco from 'monaco-editor'
import { getHighlighter, bundledThemesInfo, bundledLanguagesInfo } from 'shiki'
import { shikiToMonaco } from '@shikijs/monaco'

export const App = (): JSX.Element => {
  const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null)
  const monacoEl = useRef(null)

  useEffect(() => {
    console.log(bundledLanguagesInfo)
    console.log(bundledThemesInfo)

    const loadEditor = async (): Promise<void> => {
      const highlighter = await getHighlighter({
        themes: ['min-dark', 'tokyo-night', 'catppuccin-mocha', 'dracula'],
        langs: ['javascript', 'typescript']
      })

      monaco.languages.register({ id: 'typescript' })
      monaco.languages.register({ id: 'javascript' })

      shikiToMonaco(highlighter, monaco)

      if (monacoEl) {
        setEditor((editor) => {
          if (editor) return editor

          return monaco.editor.create(monacoEl.current!, {
            value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
            language: 'typescript',
            theme: 'dracula'
          })
        })
      }
    }

    loadEditor()

    return () => editor?.dispose()
  }, [monacoEl.current])

  return <div className="w-svw h-svh" ref={monacoEl}></div>
}

export default App
