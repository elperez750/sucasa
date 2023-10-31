const data = {
    title: "Common Interior Painting Questions",
    rows: [
        {
            title: "Is it safe to stay in my home while the interior is being painted?",
            content: `Yes, but it's advisable to keep the area well-ventilated by opening windows and using fans. If using oil-based paints, which often have stronger fumes, consider staying elsewhere for a day or two. Always keep children and pets away from freshly painted rooms.`,
        },
        {
            title: "How do I choose the right paint finish?",
            content:
                "The choice of paint finish (e.g., matte, eggshell, satin, semi-gloss, high gloss) depends on the room's function and desired aesthetic. High-traffic areas like kitchens might benefit from semi-gloss due to its ease of cleaning, while bedrooms might look best in matte or eggshell.",
        },
        {
            title: "How many coats of paint do I need?",
            content: ` It often depends on the color you're covering and the color you're applying. Lighter colors over dark ones or vice versa might require multiple coats. A primer can help with coverage and reduce the number of needed paint coats.`,
        },
        {
            title: "Can I paint over wallpaper?",
            content: "While it's possible, it's not always recommended. If the wallpaper is peeling or textured, painting over it might not yield the best results. It's usually best to remove the wallpaper, prepare the walls, and then paint."
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