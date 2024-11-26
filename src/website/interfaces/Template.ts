import type { Component, Page, ProjectData } from "grapesjs"



export interface Template {
    uid: string
    name: string
    image_url: string
    data: ProjectData
    shared_components?: any[]
}