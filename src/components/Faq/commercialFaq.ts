import React, { useEffect, useState } from "react";


const data = {
    title: "Common Commercial Painting Questions",
    rows: [
        {
            title: "What distinguishes commercial painting from residential painting?",
            content: `Commercial painting refers to larger-scale projects such as office buildings, shopping centers, schools, hospitals, and warehouses. It often requires specialized equipment, like lifts or scaffolds, and may involve additional considerations, such as adhering to corporate branding colors or working during off-hours to minimize business disruptions. Residential painting, on the other hand, typically involves homes and living spaces and has a more personal touch, focusing on aesthetics and individual preferences.`,
        },
        {
            title: "How often should I repaint the exterior of my commercial building?",
            content:
                "On average, the exterior of a commercial building should be repainted every 5-10 years. However, this can vary based on several factors, including the type of paint used, the quality of the previous paint job, the building's location, and its exposure to natural elements. Regular maintenance and inspections can help in determining the right time for a repaint.",
        },
        {
            title: "How long will the commercial painting process take?",
            content: `The duration of a commercial painting project depends on the size of the building, the complexity of the job, weather conditions, and other factors. A small office might only take a few days, while a large commercial complex could take several weeks. It's essential to discuss timelines with your painting contractor to plan accordingly.`,
        },
        {
            title: "How can I ensure minimal disruption to my business during the painting process?",
            content: "Professional commercial painting contractors often offer flexible scheduling, including evenings, weekends, or off-business hours, to minimize disruptions. It's also a good idea to inform employees and clients in advance, set up temporary signage if necessary, and create alternative pathways or entrances when certain areas are being painted."
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
    openOnload: 0,
    expandIcon: "+",
    collapseIcon: "-",
};


export {data, styles, config};