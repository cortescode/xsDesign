import type { Component, ProjectData } from "grapesjs";
import type { Domain } from "../../publish/domains/interfaces/Domain";
import type { Route } from "./Route";




export interface WebsiteConfig {
    favicon_url?: string ;
    social_image_url?: string;
    domains?: Domain[];
    start_of_head?: string;
    end_of_head?: string;
    start_of_body?: string;
    end_of_body?: string;
}

export interface Website {
    id: string; // Unique
    user_uid: string;
    name: string;
    description: string;
    data: ProjectData;
    routes: Route[];
    sharedComponents?: string[]; // Saves the cid of the components shared across pages
    published: boolean;
    config: WebsiteConfig;
}
