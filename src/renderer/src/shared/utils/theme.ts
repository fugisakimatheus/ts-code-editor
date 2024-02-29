import { IconNames } from '@/components/ui/icon'
import { BundledTheme, bundledThemes } from 'shiki'

export const getTheme = async (theme: BundledTheme) => {
  const themeData = await bundledThemes[theme]()
  return themeData.default
}

export const iconByExtension: Record<string, IconNames> = {
  ts: 'SiTypescript',
  js: 'SiJavascript',
  tsx: 'FaReact',
  jsx: 'FaReact',
  html: 'FaCode',
  css: 'FaCss3',
  json: 'VscJson',
  scss: 'FaSass',
  sass: 'FaSass',
  less: 'SiLess',
  styl: 'SiStylus',
  md: 'FaMarkdown',
  vue: 'SiVuedotjs',
  yml: 'SiYaml',
  ico: 'FiImage',
  jpg: 'FiImage',
  jpeg: 'FiImage',
  png: 'FiImage',
  icns: 'FiImage',
  gif: 'FiImage',
  svg: 'FaVectorSquare'
}

export const iconColorByExtension: Record<string, string> = {
  ts: 'text-blue-600',
  js: 'text-yellow-400',
  tsx: 'text-blue-600',
  jsx: 'text-yellow-400',
  html: 'text-orange-600',
  css: 'text-cyan-600',
  json: 'text-yellow-500',
  scss: 'text-pink-600',
  sass: 'text-pink-600',
  less: 'text-blue-700',
  styl: 'text-lime-600',
  md: 'text-white',
  vue: 'text-green-600',
  yml: 'text-indigo-500',
  ico: 'text-purple-400',
  icns: 'text-purple-400',
  jpg: 'text-purple-400',
  jpeg: 'text-purple-400',
  png: 'text-purple-400',
  gif: 'text-purple-400',
  svg: 'text-fuchsia-400'
}
