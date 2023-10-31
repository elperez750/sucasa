import React, { useEffect, useState } from "react";


const data = {
    title: "Common Exterior Painting Questions",
    rows: [
        {
            title: "How do I prepare my home for exterior painting?",
            content: `Preparation is key for a successful paint job. Before the painting begins, homeowners should trim shrubs or trees close to the house, remove any loose items from around the home, and ensure windows and doors are accessible. The painting crew will handle tasks like power washing, scraping off loose paint, caulking gaps, and priming bare spots.`,
        },
        {
            title: "How long does exterior paint need to dry?",
            content:
                "While the surface may dry to the touch within a few hours, it usually takes 24-48 hours for exterior paint to cure fully. It's best to avoid rain or heavy moisture for at least 48 hours after painting to ensure the paint adheres and dries correctly.",
        },
        {
            title: "What's the best time of year to paint the exterior of my home?",
            content: `The ideal time for exterior painting is during dry, mild weather conditions, typically in late spring, early summer, or early fall. Temperatures between 50°F to 85°F are generally optimal. Painting during overly humid, rainy, or cold conditions can affect the paint's adhesion and drying process.`,
        },
        {
            title: "How often should the exterior of my house be painted?",
            content: "Typically, the exterior of a home should be painted every 5-10 years. However, this frequency can vary based on the type of siding, the quality of the previous paint job, regional climate conditions, and the home's exposure to natural elements. For instance, wood sidings may need repainting sooner than vinyl or brick."
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "#E25141",
    rowTitleColor: "#12213E",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    animate: true,
    arrowIcon: "V",
    expandIcon: "+",
    collapseIcon: "-",
};


export {data, styles, config};