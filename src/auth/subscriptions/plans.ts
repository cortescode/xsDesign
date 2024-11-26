

export enum PLANS {
    Starter = "starter",
    Professional = "professional",
    Business = "business"
}

export const plansInfo = {
    [PLANS.Starter]: {
        title: "Starter",
        price: 0, // 0$/month
        price_id: null, // As free uses don't have a price id
        characteristics: [
            "One site",
            "Up to 5 pages",
            "Custom domain",
            "Free SSL",
        ]
    },
    [PLANS.Professional]: {
        title: "Professional",
        price: 16, // 16$/month
        price_id: "price_1PtCyBDmMLvv6s9puc4l9snO", //"price_1PsT4gDmMLvv6s9pQTgwILV9"
        characteristics: [
            "Up to 5 sites",
            "Up to 20 pages",
            "Custom domains",
            "Free SSL",
            "No watermark",
        ]
    },
    [PLANS.Business]: {
        title: "Business",
        price: 47, // 47$/month
        price_id: "price_1PtCyODmMLvv6s9pAkHohorS", //"price_1PtBClDmMLvv6s9phHPdM56o"
        characteristics: [
            "Unlimited sites",
            "Unlimited pages",
            "Custom domains",
            "Free SSL",
            "No watermark",
            "Html sites export",
        ]
    }
}
