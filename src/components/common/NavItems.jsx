import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import { NAV_LINKS } from "@/constants/navigation"

const baseLinkClass =
    "relative pb-1 transition duration-300"

const underlineClass =
    "after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300"

const linkInactiveClass =
    `${baseLinkClass} hover:text-primary after:w-0 hover:after:w-1/2 ${underlineClass}`

const linkActiveClass =
    `${baseLinkClass} text-primary after:w-1/2 ${underlineClass}`

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0 },
}

function NavItems({
    onClick,
    mobile = false,
}) {
    return (
        <motion.div
            className="flex flex-col md:flex-row items-center gap-4 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {NAV_LINKS.map((link) => (
                <motion.div
                    key={link.path}
                    variants={itemVariants}
                >
                    <NavLink
                        to={link.path}
                        onClick={onClick}
                        className={({ isActive }) =>
                            mobile
                                ? isActive
                                    ? "text-primary"
                                    : "hover:text-primary"
                                : isActive
                                    ? linkActiveClass
                                    : linkInactiveClass
                        }
                    >
                        {link.name}
                    </NavLink>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default NavItems