import type { Editor } from 'grapesjs';
import { cmdImport } from '$designer/consts';

export default function openImport(editor: Editor) {
  const pfx = editor.getConfig('stylePrefix');

  const modalImportTitle = "Import"
  const importLabel = "";
  const importCnt: String = '';

  const importViewerOptions = {}

  editor.Commands.add(cmdImport, {
    codeViewer: null as any,
    container: null as HTMLElement | null,

    run(editor) {
      const codeContent = importCnt;
      const codeViewer = this.getCodeViewer();
      editor.Modal.open({
        title: modalImportTitle,
        content: this.getContainer(),
      }).onceClose(() => editor.stopCommand(cmdImport));
      codeViewer.setContent(codeContent ?? '');
      codeViewer.refresh();
      setTimeout(()=> codeViewer.focus(), 0);
    },

    stop() {
      editor.Modal.close();
    },

    getContainer() {
      if (!this.container) {
        const codeViewer = this.getCodeViewer();
        const container = document.createElement('div');
        container.className = `${pfx}import-container`;

        // Import Label
        if (importLabel) {
          const labelEl = document.createElement('div');
          labelEl.className = `${pfx}import-label`;
          labelEl.innerHTML = importLabel;
          container.appendChild(labelEl);
        }

        container.appendChild(codeViewer.getElement());

        // Import button
        const btnImp = document.createElement('button');
        btnImp.type = 'button';
        btnImp.innerHTML = "Import";
        btnImp.className = `${pfx}btn-prim ${pfx}btn-import`;
        btnImp.onclick = () => {
          editor.Css.clear();
          editor.setComponents(codeViewer.getContent().trim());
          editor.Modal.close();
        };
        container.appendChild(btnImp);

        this.container = container;
      }

      return this.container;
    },

    /**
     * Return the code viewer instance
     * @returns {CodeViewer}
     */
    getCodeViewer() {
      if (!this.codeViewer) {
        this.codeViewer = editor.CodeManager.createViewer({
          codeName: 'htmlmixed',
          theme: 'hopscotch',
          readOnly: false,
          ...importViewerOptions,
        });
      }

      return this.codeViewer;
    },
  });
};