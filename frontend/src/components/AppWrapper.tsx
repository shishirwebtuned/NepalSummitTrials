"use client";

import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer/Footer'
import { usePathname } from 'next/navigation';

type TrekNavItem = {
    id: string
    name: string
    slug: string
}

const AppWrapper = ({ children, treks = [] }: { children: React.ReactNode; treks: TrekNavItem[] }) => {

    const pathname = usePathname();

    const hideFooterRoutes = ["/login", "/dashboard"];
    const hideNavbarRoutes = ["/login", "/dashboard"];

    const hideFooter = hideFooterRoutes.some(route => pathname.startsWith(route));

    const hideNavbar = hideNavbarRoutes.some(route => pathname.startsWith(route));

    return (
        <div>
            {!hideNavbar && (
                <div className="sticky top-0 z-50">
                    <Navbar treks={treks} />
                </div>
            )}
            {children}
            {!hideFooter && <Footer />}
        </div>
    )
}

export default AppWrapper

