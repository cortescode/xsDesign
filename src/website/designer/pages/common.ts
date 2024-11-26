import type { Route } from "$website/interfaces/Route";
import type { Editor } from "grapesjs";
import { setRouteNameOnPanel } from "$website/designer/panels";


export function sanitizeSlug(slug:string): string {
    return slug.toLowerCase()
        .replace(/ /g, '-') // Replace spaces with hyphens
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Replace 'ú', 'ù', 'ü', 'û' with 'u'
        .replace(/[ñ]/g, 'n') // Replace 'ñ' with 'n'
        .replace(/[ç]/g, 'c') // Replace 'ç' with 'c'
        .replace(/[<>\"#%{}|\\^~\[\]`;\/?:@=&$+]/g, '') // Remove unsafe characters
        .replace(/[^a-z0-9-]/g, '') 
}


export function selectRoute(editor:Editor, route:Route) {
    editor?.Pages?.select(route.page_id)

    editor.trigger('page:change', { route: route });

    let selectedRouteMainComponent = editor.Pages.getSelected()?.getMainComponent()
    if(selectedRouteMainComponent) {
        editor.LayerManager.setRoot(selectedRouteMainComponent)
        editor.LayerManager.render()
    }
    
    document.dispatchEvent(new Event("close-pages"))

    setTimeout(() => setRouteNameOnPanel(route.slug), 100)

}