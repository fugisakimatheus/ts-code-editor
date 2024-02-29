import { useEffect, useRef } from 'react'
import { XTerm } from 'xterm-for-react'
import { WebLinksAddon } from 'xterm-addon-web-links'

export function EditorTerminal() {
  const xtermRef = useRef<any>(null)

  const webLinksAddon = new WebLinksAddon()

  useEffect(() => {
    xtermRef.current.terminal.writeln('Hello, World!')
  }, [])

  return (
    <XTerm
      ref={xtermRef}
      addons={[webLinksAddon]}
      className="h-[200px] w-full absolute bottom-0"
      options={{
        fontFamily: 'JetBrains Mono, monospace'
      }}
    />
  )
}
