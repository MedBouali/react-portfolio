import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import { NAV_LINKS } from "@/constants/navigation"
import { staggerContainer, staggerItem } from "@/lib/animations"

const baseLinkStyles =
    "relative pb-1 transition duration-300"

const underlineStyles =
    "after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300"

const linkInactiveStyles =
    `${baseLinkStyles} hover:text-primary after:w-0 hover:after:w-1/2 ${underlineStyles}`

const linkActiveStyles =
    `${baseLinkStyles} text-primary after:w-1/2 ${underlineStyles}`

function NavItems({
    onClick,
    mobile = false,
}) {
    return (
        <motion.div
            className="flex flex-col md:flex-row items-center gap-4 md:gap-8"
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate="visible"
        >
            {NAV_LINKS.map((link) => (
                <motion.div
                    key={link.path}
                    variants={staggerItem(-8)}
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
                                    ? linkActiveStyles
                                    : linkInactiveStyles
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