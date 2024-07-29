import type { Template } from "$lib/interfaces/Template";
import { agencyTemplate } from "./sites/agency/indext";
import { blankTemplate } from "./sites/blank/indext";
import { fitnessTemplate } from "./sites/fitness/indext";
import { mobileAppTemplate } from "./sites/mobileApp/indext";
import { restaurantTemplate } from "./sites/restaurant/indext";


export const templatesList: any = {
    "0": blankTemplate,
    "1": agencyTemplate,
    "2": fitnessTemplate,
    "3": mobileAppTemplate,
    "4": restaurantTemplate
}