'use client'
import { usePathname } from 'next/navigation'
import Link from "next/link";

const NavLink = ({href, children}) => {
    const pathname = usePathname()
    const isActive = href === pathname
    return (
        <div>
            <Link href={href} className={`${isActive ? "text-cyan-500 border-b-2 border-cyan-500 pb-1 font-semibold transition-all duration-75" : "text-gray-600 hover:text-cyan-500 transition-colors font-medium"}`}>
            {children}
            </Link>
        </div>
    );
};

export default NavLink;