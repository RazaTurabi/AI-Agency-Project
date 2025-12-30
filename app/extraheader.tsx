'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => setActiveMenu(menu);
  const handleMouseLeave = () => setActiveMenu(null);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleMobileSubmenu = (menu: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === menu ? null : menu);
  };

  return (
    <>
      <header>
        <div
          className="header-one opacity-0 translate-x-0 translate-y-0 rotate-0 scale-100 transform-none rounded-full lp:!max-w-[1290px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] min-[500px]:max-w-[450px] min-[425px]:max-w-[375px] max-w-[350px] mx-auto w-full fixed left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-2.5 xl:py-0 py-2.5 max-[400px]:max-w-[350px] dark:border bg-accent/60 border border-stroke-2 top-5 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-lg"
          style={{ opacity: 1, filter: 'blur(0px)', transform: 'translate(-50%, 0%)', transition: '0.5s ease-in-out' }}
        >
          <div>
            <Link href="/ai-agency">
              <span className="sr-only">Home</span>
              <figure className="lg:max-w-[198px] lg:block hidden">
                <Image src="/images/shared/main-logo.svg" alt="NextSaaS" width={198} height={40} className="dark:invert" />
              </figure>
              <figure className="max-w-[44px] lg:hidden block">
                <Image src="/images/shared/logo.svg" alt="NextSaaS" width={44} height={44} className="w-full dark:hidden block" />
                <Image src="/images/shared/logo-dark.svg" alt="NextSaaS" width={44} height={44} className="w-full dark:block hidden" />
              </figure>
            </Link>
          </div>

          <nav className="hidden xl:flex items-center">
            <ul className="flex items-center">
              {/* Company Menu */}
              <li className="relative nav-item cursor-pointer py-2.5" onMouseEnter={() => handleMouseEnter('company')} onMouseLeave={handleMouseLeave}>
                <Link href="#" className="flex items-center gap-1 px-4 py-2 border border-transparent hover:border-stroke-2 dark:hover:border-stroke-7 rounded-full text-tagline-1 font-normal text-secondary/60 hover:text-secondary transition-all duration-200 dark:text-accent/60 dark:hover:text-accent">
                  <span>Company</span>
                  <span className={`nav-arrow block origin-center transition-all duration-300 translate-y-px ${activeMenu === 'company' ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                    </svg>
                  </span>
                </Link>
                <div>
                  <div className="dropdown-menu-bridge absolute left-1/2 -translate-x-1/2 top-full w-full h-3 z-40 min-w-[692px] pointer-events-none bg-transparent opacity-0"></div>
                  <div className={`dropdown-menu absolute left-1/2 -translate-x-1/2 top-full mt-2 transition-all duration-300 md:w-[692px] w-full bg-white dark:bg-background-6 z-50 rounded-[20px] p-4 border border-stroke-1 dark:border-background-7 flex items-start md:gap-x-8 gap-y-6 ${activeMenu === 'company' ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}>
                    {/* Company menu content - add all items from original HTML */}
                  </div>
                </div>
              </li>

              {/* Add remaining menu items following same pattern */}
              
              <li className="relative nav-item cursor-pointer py-2.5">
                <Link href="/ai-agency-pricing" className="flex items-center gap-1 px-4 py-2 border border-transparent hover:border-stroke-2 dark:hover:border-stroke-7 rounded-full text-tagline-1 font-normal text-secondary/60 hover:text-secondary transition-all duration-200 dark:text-accent/60 dark:hover:text-accent">
                  <span>Pricing</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="xl:flex hidden items-center justify-center">
            <Link href="/ai-agency-signup" className="btn btn-md btn-secondary hover:btn-primary dark:btn-accent">
              <span>Get started</span>
            </Link>
          </div>

          <div className="xl:hidden block">
            <button onClick={toggleMobileMenu} className="nav-hamburger flex flex-col gap-[5px] size-12 bg-background-4 dark:bg-background-6 rounded-full items-center justify-center cursor-pointer">
              <span className="sr-only">Menu</span>
              <span className="block w-6 h-0.5 bg-stroke-9 dark:bg-stroke-1"></span>
              <span className="block w-6 h-0.5 bg-stroke-9 dark:bg-stroke-1"></span>
              <span className="block w-6 h-0.5 bg-stroke-9 dark:bg-stroke-1"></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <aside className={`sidebar fixed top-0 right-0 w-full sm:w-1/2 transition-all duration-300 h-screen bg-white dark:bg-background-8 rounded-l-3xl xl:hidden z-[9999] scroll-bar ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="lg:p-9 sm:p-8 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <Link href="/ai-agency">
                <span className="sr-only">Home</span>
                <figure className="max-w-[44px]">
                  <Image src="/images/shared/logo.svg" alt="NextSaaS" width={44} height={44} className="w-full dark:hidden block" />
                  <Image src="/images/shared/logo-dark.svg" alt="NextSaaS" width={44} height={44} className="w-full dark:block hidden" />
                </figure>
              </Link>
              <button onClick={toggleMobileMenu} className="nav-hamburger-close flex flex-col gap-1.5 size-10 bg-background-4 dark:bg-background-9 rounded-full items-center justify-center cursor-pointer relative">
                <span className="sr-only">Close Menu</span>
                <span className="block w-4 h-0.5 bg-stroke-9/60 dark:bg-stroke-1 rotate-45 absolute"></span>
                <span className="block w-4 h-0.5 bg-stroke-9/60 dark:bg-stroke-1 -rotate-45 absolute"></span>
              </button>
            </div>

            <div className="mt-6 h-[85vh] w-full overflow-y-auto overflow-x-hidden pb-10 scroll-bar">
              <p className="text-secondary dark:text-accent font-normal text-tagline-1 block before:content-[''] before:w-full before:-right-16 before:top-1/2 before:-translate-y-1/2 before:h-px before:bg-stroke-4 dark:before:bg-stroke-6 before:absolute relative mb-2">Menu</p>
              <ul className="space-y-2">
                <li className="space-y-2">
                  <button onClick={() => toggleMobileSubmenu('company')} className="mobile-menu-toggle flex items-center justify-between w-full py-2.5 cursor-pointer">
                    <span className="text-secondary/60 dark:text-accent/60 font-normal text-tagline-1 block">Company</span>
                    <span className={`menu-arrow transition-transform duration-300 ${activeMobileSubmenu === 'company' ? 'rotate-90' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 12L14 8L10 4" className="stroke-secondary/60 dark:stroke-accent/60" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </span>
                  </button>
                  <ul className={`mobile-submenu ${activeMobileSubmenu === 'company' ? 'block' : 'hidden'}`}>
                    <li><Link href="/ai-agency-about" className="text-tagline-1 font-normal text-secondary dark:text-accent transition-all duration-200 py-2.5 text-left block ml-4">About Us</Link></li>
                    <li><Link href="/ai-agency-services" className="text-tagline-1 font-normal text-secondary dark:text-accent transition-all duration-200 py-2.5 text-left block ml-4">Our Services</Link></li>
                    <li><Link href="/ai-agency-features" className="text-tagline-1 font-normal text-secondary dark:text-accent transition-all duration-200 py-2.5 text-left block ml-4">Product Features</Link></li>
                    <li><Link href="/ai-agency-blog" className="text-tagline-1 font-normal text-secondary dark:text-accent transition-all duration-200 py-2.5 text-left block ml-4">Blog &amp; News</Link></li>
                  </ul>
                </li>
                {/* Add remaining mobile menu items */}
              </ul>
            </div>
          </div>
        </aside>
      </header>
    </>
  );
}