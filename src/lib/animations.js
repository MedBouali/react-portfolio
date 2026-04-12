export const fadeIn = (delay = 0, duration = 0.5) => ({
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay, duration, ease: "easeOut" }
})

export const fadeUp = (delay = 0, y = 20, duration = 0.6) => ({
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.6 },
    transition: { delay, duration, ease: "easeOut" }
})

export const fadeDown = (delay = 0, y = -20, duration = 0.6) => ({
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.6 },
    transition: { delay, duration, ease: "easeOut" }
})

export const fadeLeft = (delay = 0, x = 20, duration = 0.6) => ({
    initial: { opacity: 0, x },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.6 },
    transition: { delay, duration, ease: "easeOut" }
})

export const fadeRight = (delay = 0, x = -20, duration = 0.6) => ({
    initial: { opacity: 0, x },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.6 },
    transition: { delay, duration, ease: "easeOut" }
})

export const scaleIn = (delay = 0, scale = 0.96, duration = 0.5) => ({
    initial: { opacity: 0, scale },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { delay, duration, ease: "easeOut" }
})

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0) => ({
    hidden: {},
    visible: {
        transition: {
            staggerChildren,
            delayChildren
        }
    }
})

export const staggerItem = (y = -8) => ({
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0 }
})