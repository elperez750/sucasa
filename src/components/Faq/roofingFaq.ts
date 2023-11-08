

const data = {
    title: "Common Roofing Questions",
    rows: [
        {
            title: "How do I know if I need a new roof?",
            content: `Signs that you might need a new roof include shingles that are missing, cracked, or curling, as well as leaks in your attic after a rainstorm or stains on interior ceilings and walls. If your roof is over 20 years old, it's also a good idea to start considering a replacement.`,
        },
        {
            title: "How long does a typical roof last?",
            content:
                "The lifespan of a roof can vary widely depending on the materials used, the quality of the installation, the climate, and how well it is maintained. On average, asphalt shingle roofs can last 20-30 years, while metal roofs can last 40-70 years, and slate, tile, and copper roofs can last over 50 years.",
        },
        {
            title: "Can I repair my roof myself?",
            content: `Roof repairs can be complex and potentially dangerous. While some minor repairs may be manageable for a DIY enthusiast with the right tools and safety equipment, most repairs are best left to professional roofers who have the experience and expertise to do the job safely and effectively.`,
        },
        {
            title: "Will a new roof installation disrupt my daily business operations or home routine?",
            content: "We strive to minimize any disruption to your daily activities. Our team works efficiently and will coordinate with you to find the most convenient times to perform the installation. We always aim to complete the job swiftly while maintaining our high standards of quality."
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