import type { Editor } from 'grapesjs';
import loadBlocks from './blocks';
import loadComponents from './components';
import loadStyles from './styles';

export default function loadHeader(editor: Editor) {
  loadBlocks(editor);
  loadComponents(editor);
  loadStyles(editor);
};
