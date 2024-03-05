import type { Route } from "./Route";

export interface Website {
    id: string;
    user_uid: string;
    name: string;
    data: any;
    routes: Route[];
}
