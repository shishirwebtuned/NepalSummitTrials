"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Search, ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export type TrekNavItem = {
  id: string
  name: string
  slug: string
}



const Navbar = ({ treks }: { treks: TrekNavItem[] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); // desktop hover
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null); // mobile toggle

  const navLinks = [
    { href: "/", label: "Home" },
    // { href: "/Treks", label: "Treks" },
    {
      label: 'Treks',
      children: treks.length > 0
        ? treks.map((t) => ({
          href: `/trek-detail/${t.slug}`,
          label: t.name,
        }))
        : [{ href: '/treks', label: 'View all treks' }],
    },
    { href: "/trek-match", label: "Trek Match" },
    { href: "/aboutus", label: "About" },
    { href: "/blog", label: "Blog" },
  ];

  const pathname = usePathname();
  const isTrekDetailPage = /^\/trek-detail\/[^/]+$/.test(pathname);
  const isTrekMatchPage = pathname === "/trek-match";
  const isEitherTrekPage = isTrekDetailPage || isTrekMatchPage;

  const borderVariants = {
    initial: { scaleX: 0, opacity: 0, originX: 0.5 },
    hover: {
      scaleX: 1,
      opacity: 1,
      transition: {
        // use numeric bezier arrays for easing to satisfy framer-motion types
        scaleX: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as any },
        opacity: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as any, delay: 0.1 },
      },
    },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -8, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2 },
    },
    exit: {
      opacity: 0,
      y: -6,
      scale: 0.97,
      transition: { duration: 0.15 },
    },
  };

  const mobileDropdownVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as any },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] as any },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full jakarta mb-[-100px] z-50">
      {/* Top Contact Bar */}
      <div
        className={`${isEitherTrekPage ? "bg-[#0B2839]" : "bg-[#477ca7]"
          } py-2 px-4 md:px-8 text-white`}
      >
        <div
          className={`${isScrolled || isMenuOpen ? "bg-[#0A5482]" : "bg-transparent"
            }container mx-auto flex flex-row justify-between sm:items-center items-center sm:gap-0 gap-1`}
        >
          <div className="flex sm:flex-row flex-col items-start sm:items-center gap-x-6 gap-y-1">
            <div className="flex items-center gap-2">
              <Mail className="lg:h-4 lg:w-4 md:h-3 md:w-3 h-3 w-3" />
              <span className="lg:text-sm md:text-xs text-[10px]">
                nepalsummittrials@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="lg:h-4 lg:w-4 md:h-3 md:w-3 h-3 w-3" />
              <span className="lg:text-sm md:text-xs text-[10px]">
                +977 9876562167
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="lg:h-4 lg:w-4 md:h-3 md:w-3 h-3 w-3 hover:opacity-75 transition-opacity" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="lg:h-4 lg:w-4 md:h-3 md:w-3 h-3 w-3 hover:opacity-75 transition-opacity" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FaTiktok className="lg:h-4 lg:w-4 md:h-3 md:w-3 h-3 w-3 hover:opacity-75 transition-opacity" />
            </a>
          </div>

        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`transition-all duration-300 ease-linear ${isEitherTrekPage ? "bg-white text-black" : "text-white"
          } ${isScrolled || isMenuOpen ? "bg-[#0A5482]" : "bg-transparent"
          } py-2 px-4 md:px-8`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 mr-8">
            <Link href="/">
              <Image
                src="/images/mainLogo1.png"
                alt="Trekking Logo"
                width={80}
                height={80}
                className={`${isEitherTrekPage ? "filter invert" : ""} w-full h-15`}
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 cursor-pointer" />
            ) : (
              <Menu className="h-6 w-6 cursor-pointer" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-7">
            {navLinks.map((link) => {
              // Has dropdown children
              if (link.children) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {/* Trigger */}
                    <button className="flex items-center gap-1 xl:text-base lg:text-sm text-sm transition-colors cursor-pointer select-none">
                      {link.label}
                      <motion.span
                        animate={{
                          rotate: activeDropdown === link.label ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.span>
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          key="desktop-dropdown"
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-lg shadow-xl overflow-hidden z-50"
                        >
                          {/* small arrow */}
                          <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 shadow-sm" />
                          <ul className="py-1">
                            {link.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#0A5482] hover:text-white transition-colors"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              // Regular link
              return (
                <motion.div
                  key={link.href}
                  className="relative"
                  initial="initial"
                  whileHover="hover"
                >
                  <Link
                    href={link.href}
                    className="xl:text-base lg:text-sm text-sm transition-colors relative"
                  >
                    {link.label}
                    <motion.span
                      className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-white"
                      variants={borderVariants}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/contactus"
              className="bg-[#D5E880] hover:bg-yellow-400 text-gray-800 px-4 py-[10px] rounded-md font-medium transition-colors text-sm lg:text-sm xl:text-base"
            >
              Contact Us
            </Link>
            {/* <button className="bg-[#D5E880] hover:bg-yellow-400 text-gray-800 p-3 rounded-md transition-colors">
              <Search className="h-5 w-5" />
            </button> */}
          </div>
          <div className="hidden lg:flex items-center gap-2 ml-3">
            <Link
              href="/login"
              className="bg-[#D5E880] hover:bg-yellow-400 text-gray-800 px-4 py-[10px] rounded-md font-medium transition-colors text-sm lg:text-sm xl:text-base"
            >
              Login
            </Link>
            {/* <button className="bg-[#D5E880] hover:bg-yellow-400 text-gray-800 p-3 rounded-md transition-colors">
              <Search className="h-5 w-5" />
            </button> */}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-sky-900 text-white">
          <div className="container mx-auto py-4 px-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              // Has dropdown children (mobile)
              if (link.children) {
                const isOpen = mobileOpenDropdown === link.label;
                return (
                  <div key={link.label} className="border-b border-sky-700 ">
                    {/* Toggle trigger */}
                    <button
                      className="w-full flex items-center justify-between py-3 text-white hover:text-yellow-200 transition-colors cursor-pointer"
                      onClick={() =>
                        setMobileOpenDropdown(isOpen ? null : link.label)
                      }
                    >
                      <span>{link.label}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.span>
                    </button>

                    {/* Collapsible children */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.ul
                          key="mobile-dropdown"
                          variants={mobileDropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="overflow-hidden pl-4 pb-2 flex flex-col gap-1"
                        >
                          {link.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block py-2 text-sm text-sky-200 hover:text-yellow-200 transition-colors"
                                onClick={() => {
                                  setMobileOpenDropdown(null);
                                  setIsMenuOpen(false);
                                }}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              // Regular link (mobile)
              return (
                <motion.div
                  key={link.href}
                  className="relative"
                  initial="initial"
                  whileHover="hover"
                >
                  <Link
                    href={link.href}
                    className="text-white hover:text-yellow-200 transition-colors py-3 border-b border-sky-700 relative block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                    <motion.span
                      className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-white"
                      variants={borderVariants}
                    />
                  </Link>
                </motion.div>
              );
            })}

            <div className="flex flex-col gap-2 pt-2">
              <Link
                href="/contactus"
                className="bg-[#D5E880] hover:bg-yellow-400 text-gray-800 px-4 py-2 rounded-md font-medium transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
