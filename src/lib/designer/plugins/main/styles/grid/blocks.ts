import type { Editor, PluginOptions } from 'grapesjs'
import { TYPES, BLOCKS } from './consts'

const { columns, row, column } = TYPES

export const rowBlock = {
  label: 'Row',
  category: 'Layout',
  attributes: {
    class: 'gjs-fonts gjs-f-b1',
  },
  content: {
    type: row,
    components: {
      type: columns,
      components: { type: column },
    },
  },
}

export const columnBlock = {
  label: 'Column',
  category: 'Layout',
  attributes: {
    class: 'gjs-fonts gjs-f-b3',
  },
  content: { type: TYPES.column },
}

export default (editor: Editor, options: PluginOptions ) => {
  const bm = editor.BlockManager

  const { blocks = [] } = options

  if (!blocks || !Array.isArray(blocks)) return
  if (blocks.includes(BLOCKS.row)) bm.add(BLOCKS.row, rowBlock)
  if (blocks.includes(BLOCKS.column)) bm.add(BLOCKS.column, columnBlock)
}