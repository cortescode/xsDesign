import type { Template } from "$website/interfaces/Template";
import { agencyTemplate } from "./sites/agency";
import { blankTemplate } from "./sites/blank";
import { fitnessTemplate } from "./sites/fitness";
import { mobileAppTemplate } from "./sites/mobileApp";
import { restaurantTemplate } from "./sites/restaurant";


export const templatesList: any = {
    "0": blankTemplate,
    "1": agencyTemplate,
    "2": fitnessTemplate,
    "3": mobileAppTemplate,
    "4": restaurantTemplate
}