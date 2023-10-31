import React, { useEffect, useState } from "react";


const data = {
    title: "Common Pressure Washing Questions",
    rows: [
        {
            title: "Is pressure washing safe for all surfaces?",
            content: `Not all surfaces are suitable for pressure washing. Delicate materials or aged surfaces may get damaged. `,
        },
        {
            title: "How often should I pressure wash my driveway?",
            content:
                "Typically, it's recommended to pressure wash driveways once a year to maintain their appearance and prevent buildup of mold and grime.",
        },
        {
            title: "What preparation is needed before pressure washing?",
            content: `It's beneficial to remove any movable items from the area, ensure windows and doors are closed, and inform your neighbors, especially if shared spaces or dividing walls are being cleaned.`,
        },
        {
            title: "Do I need to be home when you're pressure washing?",
            content: "While it's not mandatory, it's often a good idea to be available in case any issues arise or decisions need to be made."
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