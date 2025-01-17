export const parentAnimation = {
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
        },
    },
    hidden: {
        y: 20,
        opacity: 0,
    },
};

export const childrenAnimation = {
    visible: {
        y: 0,
        opacity: 1,
    },
    hidden: {
        y: 20,
        opacity: 0,
    },
};
