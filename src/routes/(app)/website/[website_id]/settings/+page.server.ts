import { goto } from "$app/navigation";
import { redirect } from "@sveltejs/kit";

export function load() {
    return redirect(301, "./settings/general")
}