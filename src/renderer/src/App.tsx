import { shikiToMonaco } from '@shikijs/monaco'
import * as monaco from 'monaco-editor'
import { useEffect, useRef, useState } from 'react'
import { getHighlighter } from 'shiki'
import { supportedLanguages } from './shared/constants/languages'

export const App = (): JSX.Element => {
  const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null)
  const monacoEl = useRef(null)

  useEffect(() => {
    const loadEditor = async (): Promise<void> => {
      const highlighter = await getHighlighter({
        themes: ['min-dark', 'tokyo-night', 'dracula', 'github-dark', 'catppuccin-mocha'],
        langs: supportedLanguages
      })

      supportedLanguages.forEach((lang) => {
        monaco.languages.register({ id: lang })
      })

      shikiToMonaco(highlighter, monaco)

      if (monacoEl) {
        setEditor((editor) => {
          // if (editor) return editor

          return monaco.editor.create(monacoEl.current!, {
            value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
            language: 'typescript',
            theme: 'dracula',
            fontFamily: 'JetBrains Mono',
            fontLigatures: true,
            fontSize: 14,
            bracketPairColorization: { enabled: true, independentColorPoolPerBracketType: true },
            showFoldingControls: 'always',
            automaticLayout: true
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
