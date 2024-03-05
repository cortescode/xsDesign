import type { Editor } from 'grapesjs';
import loadBlocks from './blocks';
import loadComponents from './components';

export default function loadHeader(editor: Editor) {
  loadBlocks(editor);
  loadComponents(editor);
};
