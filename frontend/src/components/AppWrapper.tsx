"use client";

import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer/Footer'
import { usePathname } from 'next/navigation';

const AppWrapper = ({ children }: { children: React.ReactNode }) => {

    const pathname = usePathname();

    const hideFooterRoutes = ["/login", "/dashboard"];
    const hideNavbarRoutes = ["/login", "/dashboard"];

    const hideFooter = hideFooterRoutes.some(route => pathname.startsWith(route));

    const hideNavbar = hideNavbarRoutes.some(route => pathname.startsWith(route));

    return (
        <div>
            {!hideNavbar && (
                <div className="sticky top-0 z-50">
                    <Navbar />
                </div>
            )}
            {children}
            {!hideFooter && <Footer />}
        </div>
    )
}

export default AppWrapper

