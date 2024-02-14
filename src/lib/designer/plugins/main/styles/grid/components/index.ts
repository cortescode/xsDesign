import Column from "./column";
import Columns from "./columns";
import Row from "./row";
import { GS_TYPES } from "../consts";
import type { Editor } from "grapesjs";

export default (editor: Editor, config = {}) => {
    const dc = editor.DomComponents;
    const opts = {
        ...config,
        editor,
    };

    [Row, Columns, Column].forEach((c) => c(dc, opts));

    editor.on("component:mount", (component) => {
        if (component.getAttributes()["data-gs-type"] === GS_TYPES.column) {
            const parent = component.parent()
            const row = parent.parent()
            const columns = component.getColumns && component.getColumns()
            component.removeColumns()
            !row && component.resetHandles(component, false)
            row && columns && component.setColumns(columns)
        }
    });
};