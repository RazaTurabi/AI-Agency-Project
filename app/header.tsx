
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {  ``
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSidebarOpen]);

  const toggleMobileMenu = (menu: string) => {
    setActiveMobileMenu(activeMobileMenu === menu ? null : menu);
  };

  return (
    <>
      <header className="fixed left-1/2 -translate-x-1/2 top-5 z-50 w-full max-w-[350px] min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] lp:max-w-[1290px] mx-auto">
        <div className="flex items-center justify-between px-2.5 py-2.5 xl:py-0 rounded-full bg-accent/60 backdrop-blur-lg border border-stroke-2 dark:border-stroke-6 dark:bg-background-9">
          {/* Logo */}
          <div>
            <Link href="/" className="block">
              <span className="sr-only">Home</span>
              <figure className="lg:max-w-[198px] lg:block hidden">
                <Image 
                  src="/images/shared/main-logo.svg" 
                  alt="NextSaaS" 
                  width={198} 
                  height={40}
                  className="dark:invert" 
                />
              </figure>
              <figure className="max-w-[44px] lg:hidden block">
                <Image 
                  src="/images/shared/logo.svg" 
                  alt="NextSaaS" 
                  width={44} 
                  height={44}
                  className="w-full dark:hidden block" 
                />
                <Image
                  src="/images/shared/logo-dark.svg"
                  alt="NextSaaS"
                  width={44}
                  height={44}
                  className="w-full dark:block hidden"
                />
              </figure>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center">
            <ul className="flex items-center">
              <CompanyMegaMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
              <CollaborateDropdown activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
              <ResourcesMegaMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
              <PeopleDropdown activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
              <li className="relative py-2.5">
                <Link
                  href="/pricing"
                  className="flex items-center gap-1 px-4 py-2 border border-transparent hover:border-stroke-2 dark:hover:border-stroke-7 rounded-full text-tagline-1 font-normal text-secondary/60 hover:text-secondary transition-all duration-200 dark:text-accent/60 dark:hover:text-accent"
                >
                  <span>Pricing</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="xl:flex hidden items-center justify-center">
            <Link
              href="/signup"
              className="btn btn-md btn-secondary hover:btn-primary dark:btn-accent"
            >
              <span>Get started</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden block">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="flex flex-col gap-[5px] size-12 bg-background-4 dark:bg-background-6 rounded-full items-center justify-center cursor-pointer"
              aria-label="Open menu"
            >
              <span className="block w-6 h-0.5 bg-stroke-9 dark:bg-stroke-1"></span>
              <span className="block w-6 h-0.5 bg-stroke-9 dark:bg-stroke-1"></span>
              <span className="block w-6 h-0.5 bg-stroke-9 dark:bg-stroke-1"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <aside
        className={`sidebar fixed top-0 right-0 w-full sm:w-1/2 h-screen bg-white dark:bg-background-8 rounded-l-3xl xl:hidden z-[9999] transition-transform duration-300 overflow-y-auto ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="lg:p-9 sm:p-8 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <span className="sr-only">Home</span>
              <figure className="max-w-[44px]">
                <Image 
                  src="/images/shared/logo.svg" 
                  alt="NextSaaS" 
                  width={44}
                  height={44}
                  className="w-full dark:hidden block" 
                />
                <Image
                  src="/images/shared/logo-dark.svg"
                  alt="NextSaaS"
                  width={44}
                  height={44}
                  className="w-full dark:block hidden"
                />
              </figure>
            </Link>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="flex flex-col gap-1.5 size-10 bg-background-4 dark:bg-background-9 rounded-full items-center justify-center cursor-pointer relative"
              aria-label="Close menu"
            >
              <span className="block w-4 h-0.5 bg-stroke-9/60 dark:bg-stroke-1 rotate-45 absolute"></span>
              <span className="block w-4 h-0.5 bg-stroke-9/60 dark:bg-stroke-1 -rotate-45 absolute"></span>
            </button>
          </div>

          <div className="mt-6 h-[85vh] w-full overflow-y-auto overflow-x-hidden pb-10">
            <p className="text-secondary dark:text-accent font-normal text-tagline-1 block mb-2 relative before:content-[''] before:w-full before:-right-16 before:top-1/2 before:-translate-y-1/2 before:h-px before:bg-stroke-4 dark:before:bg-stroke-6 before:absolute">
              Menu
            </p>
            <ul className="space-y-2">
              <MobileMenuItem
                title="Company"
                menuId="company"
                activeMenu={activeMobileMenu}
                toggleMenu={toggleMobileMenu}
                links={[
                  { href: '/about', label: 'About Us' },
                  { href: '/ai-agency-services', label: 'Our Services' },
                  { href: '/features', label: 'Product Features' },
                  { href: '/blog', label: 'Blog & News' },
                ]}
              />
              <MobileMenuItem
                title="Collaborate"
                menuId="collaborate"
                activeMenu={activeMobileMenu}
                toggleMenu={toggleMobileMenu}
                links={[
                  { href: '/affiliates', label: 'Affiliate' },
                  { href: '/referral', label: 'Referral' },
                  { href: '/login', label: 'Login' },
                  { href: '/signup', label: 'Create Account' },
                  { href: '/download', label: 'Download' },
                  { href: '/integration', label: 'Integration' },
                ]}
              />
              <MobileMenuItem
                title="Resources"
                menuId="resources"
                activeMenu={activeMobileMenu}
                toggleMenu={toggleMobileMenu}
                links={[
                  { href: '/documentation', label: 'Documentation' },
                  { href: '/tutorials', label: 'Tutorials' },
                  { href: '/faq', label: 'FAQ' },
                  { href: '/case-studies', label: 'Case Studies' },
                  { href: '/whitepaper', label: 'Whitepapers' },
                  { href: '/support', label: 'Support' },
                ]}
              />
              <MobileMenuItem
                title="People & Culture"
                menuId="people-culture"
                activeMenu={activeMobileMenu}
                toggleMenu={toggleMobileMenu}
                links={[
                  { href: '/process', label: 'Process' },
                  { href: '/team', label: 'Team' },
                  { href: '/career', label: 'Career' },
                  { href: '/testimonials', label: 'Testimonial' },
                  { href: '/customers', label: 'Customer' },
                  { href: '/contact', label: 'Contact' },
                ]}
              />
            </ul>
          </div>
        </div>
      </aside>

      {/* Backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[9998] xl:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
}

// Company Mega Menu Component
function CompanyMegaMenu({ activeMenu, setActiveMenu }: { activeMenu: string | null; setActiveMenu: (menu: string | null) => void }) {
  const isOpen = activeMenu === 'company';

  return (
    <li
      className="relative nav-item cursor-pointer py-2.5"
      onMouseEnter={() => setActiveMenu('company')}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <button className="flex items-center gap-1 px-4 py-2 border border-transparent hover:border-stroke-2 dark:hover:border-stroke-7 rounded-full text-tagline-1 font-normal text-secondary/60 hover:text-secondary transition-all duration-200 dark:text-accent/60 dark:hover:text-accent">
        <span>Company</span>
        <span className={`nav-arrow block origin-center transition-all duration-300 translate-y-px ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>

      {/* Mega Menu Dropdown */}
      <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 transition-all duration-300 md:w-[692px] w-full bg-white dark:bg-background-6 z-50 rounded-[20px] p-4 border border-stroke-1 dark:border-background-7 flex items-start md:gap-x-8 gap-y-6 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <ul className="space-y-2 md:max-w-[284px] w-full">
          <li>
            <Link href="/about" className="p-3 rounded-[10px] flex items-start gap-3 transition-all duration-300 relative group">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
              <div className="mt-1 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10.0003 18.3334C14.6027 18.3334 18.3337 14.6024 18.3337 10C18.3337 5.39765 14.6027 1.66669 10.0003 1.66669C5.39795 1.66669 1.66699 5.39765 1.66699 10C1.66699 14.6024 5.39795 18.3334 10.0003 18.3334Z" className="stroke-secondary dark:stroke-accent" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 13.3333H10.0083" className="stroke-secondary dark:stroke-accent" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 6.66669V10" className="stroke-secondary dark:stroke-accent" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="relative z-10 space-y-0.5">
                <p className="text-tagline-1 font-normal text-secondary dark:text-accent">About Us</p>
                <p className="text-tagline-3 font-normal text-secondary/60 dark:text-accent/60">Learn about our mission, values, and dedicated team</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/ai-agency-services.html" className="p-3 rounded-[10px] flex items-start gap-3 transition-all duration-300 relative group">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
              <div className="mt-1 relative z-10">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 13.75C12.0711 13.75 13.75 12.0711 13.75 10C13.75 7.92893 12.0711 6.25 10 6.25C7.92893 6.25 6.25 7.92893 6.25 10C6.25 12.0711 7.92893 13.75 10 13.75Z" className="stroke-secondary dark:stroke-accent" strokeLinecap="round" strokeLinejoin="round" />
                </svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1 .6 1.65 1.65 0 0 0-.33 1.82l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-1.82-.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.6-1 1.65 1.65 0 0 0-1.82-.33l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-.6 1.65 1.65 0 0 0 .33-1.82l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 15 8.6a1.65 1.65 0 0 0 1.82.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 15z"></path>
                </svg>
              </div>
              <div className="relative z-10 space-y-0.5">
                <p className="text-tagline-1 font-normal text-secondary dark:text-accent">Our Services</p>
                <p className="text-tagline-3 font-normal text-secondary/60 dark:text-accent/60">Explore our comprehensive AI-powered solutions</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/services" className="p-3 rounded-[10px] flex items-start gap-3 transition-all duration-300 relative group">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
              <div className="mt-1 relative z-10">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 13.75C12.0711 13.75 13.75 12.0711 13.75 10C13.75 7.92893 12.0711 6.25 10 6.25C7.92893 6.25 6.25 7.92893 6.25 10C6.25 12.0711 7.92893 13.75 10 13.75Z" className="stroke-secondary dark:stroke-accent" strokeLinecap="round" strokeLinejoin="round" />
                </svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2"/>
                </svg>
              </div>
              <div className="relative z-10 space-y-0.5">
                <p className="text-tagline-1 font-normal text-secondary dark:text-accent">Product Features</p>
                <p className="text-tagline-3 font-normal text-secondary/60 dark:text-accent/60">Explore our comprehensive AI-powered solutions</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/ai-agency-blog.html" className="p-3 rounded-[10px] flex items-start gap-3 transition-all duration-300 relative group">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
              <div className="mt-1 relative z-10">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 13.75C12.0711 13.75 13.75 12.0711 13.75 10C13.75 7.92893 12.0711 6.25 10 6.25C7.92893 6.25 6.25 7.92893 6.25 10C6.25 12.0711 7.92893 13.75 10 13.75Z" className="stroke-secondary dark:stroke-accent" strokeLinecap="round" strokeLinejoin="round" />
                </svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"></path>
                </svg>
              </div>
              <div className="relative z-10 space-y-0.5">
                <p className="text-tagline-1 font-normal text-secondary dark:text-accent">Blog & News</p>
                <p className="text-tagline-3 font-normal text-secondary/60 dark:text-accent/60">Explore our comprehensive AI-powered solutions</p>
              </div>
            </Link>
          </li>
        </ul>
        <figure className="flex-1 space-y-3">
          <p className="text-tagline-2 font-medium text-secondary/60 dark:text-accent/60">What's New</p>
          <Link href="/ai-agency-blog-details.html" className="block">
            <figure className="overflow-hidden rounded-[14px] max-w-full w-full min-h-[272px] relative group">
              <Image src="/images/ns-img-419.jpg" alt="What's New" width={400} height={272} className="w-full h-full object-cover rounded-[14px] group-hover:scale-105 transition-all duration-500 ease-in-out" />
              <div className="absolute group-hover:top-5 group-hover:left-5 top-4 left-4 size-full space-y-1 transition-all duration-500 ease-in-out">
                <p className="text-white text-tagline-1 font-medium">AI Agency</p>
                <p className="text-white/60 max-w-[212px] w-full text-tagline-3 font-normal">AI Agency is a platform that provides AI-powered solutions for businesses.</p>
              </div>
            </figure>
          </Link>
        </figure>
      </div>
    </li>
  );
}

// Collaborate Dropdown Component
function CollaborateDropdown({ activeMenu, setActiveMenu }: { activeMenu: string | null; setActiveMenu: (menu: string | null) => void }) {
  const isOpen = activeMenu === 'collaborate';

  return (
    <li
      className="relative nav-item cursor-pointer py-2.5"
      onMouseEnter={() => setActiveMenu('collaborate')}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <button className="flex items-center gap-1 px-4 py-2 border border-transparent hover:border-stroke-2 dark:hover:border-stroke-7 rounded-full text-tagline-1 font-normal text-secondary/60 hover:text-secondary transition-all duration-200 dark:text-accent/60 dark:hover:text-accent">
        <span>Collaborate</span>
        <span className={`nav-arrow block origin-center transition-all duration-300 translate-y-px ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>

      {/* Dropdown Menu */}
      <ul className={`mt-2 w-[320px] rounded-[20px] p-2 bg-white dark:bg-background-6 shadow-14 absolute left-1/2 -translate-x-1/2 top-full z-50 transition-all duration-300 border border-stroke-1 dark:border-background-7 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <li>
          <Link href="/affiliates" className="p-3 rounded-2xl flex items-start gap-3 transition-all duration-300 relative group">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
            <div className="size-11 p-3 rounded-[10px] bg-white dark:bg-background-6 relative z-10 shadow-14 border border-stroke-1 dark:border-background-7 flex items-center justify-center">
              <span className="text-2xl">🤝</span>
            </div>
            <div className="relative z-10">
              <p className="text-tagline-1 font-normal text-secondary dark:text-accent">Affiliate</p>
              <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">Join our affiliate program</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/referral" className="p-3 rounded-2xl flex items-start gap-3 transition-all duration-300 relative group">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
            <div className="size-11 p-3 rounded-[10px] bg-white dark:bg-background-6 relative z-10 shadow-14 border border-stroke-1 dark:border-background-7 flex items-center justify-center">
              <span className="text-2xl">🔄</span>
            </div>
            <div className="relative z-10">
              <p className="text-tagline-1 font-normal text-secondary dark:text-accent">Referral</p>
              <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">Refer friends and earn</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/referral" className="p-3 rounded-2xl flex items-start gap-3 transition-all duration-300 relative group">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
            <div className="size-11 p-3 rounded-[10px] bg-white dark:bg-background-6 relative z-10 shadow-14 border border-stroke-1 dark:border-background-7 flex items-center justify-center">
              <span className="text-2xl">🔄</span>
            </div>
            <div className="relative z-10">
              <p className="text-tagline-1 font-normal text-secondary dark:text-accent">Login</p>
              <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">Access your account</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/referral" className="p-3 rounded-2xl flex items-start gap-3 transition-all duration-300 relative group">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
            <div className="size-11 p-3 rounded-[10px] bg-white dark:bg-background-6 relative z-10 shadow-14 border border-stroke-1 dark:border-background-7 flex items-center justify-center">
              <span className="text-2xl">🔄</span>
            </div>
            <div className="relative z-10">
              <p className="text-tagline-1 font-normal text-secondary dark:text-accent">Create Account</p>
              <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">Join us today</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/referral" className="p-3 rounded-2xl flex items-start gap-3 transition-all duration-300 relative group">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
            <div className="size-11 p-3 rounded-[10px] bg-white dark:bg-background-6 relative z-10 shadow-14 border border-stroke-1 dark:border-background-7 flex items-center justify-center">
              <span className="text-2xl">🔄</span>
            </div>
            <div className="relative z-10">
              <p className="text-tagline-1 font-normal text-secondary dark:text-accent">Download</p>
              <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">Download out application</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/referral" className="p-3 rounded-2xl flex items-start gap-3 transition-all duration-300 relative group">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
            <div className="size-11 p-3 rounded-[10px] bg-white dark:bg-background-6 relative z-10 shadow-14 border border-stroke-1 dark:border-background-7 flex items-center justify-center">
              <span className="text-2xl">🔄</span>
            </div>
            <div className="relative z-10">
              <p className="text-tagline-1 font-normal text-secondary dark:text-accent">Integration</p>
              <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">Connect with your tools</p>
            </div>
          </Link>
        </li>
      </ul>
    </li>
  );
}

// Resources Mega Menu Component
function ResourcesMegaMenu({ activeMenu, setActiveMenu }: { activeMenu: string | null; setActiveMenu: (menu: string | null) => void }) {
  const isOpen = activeMenu === 'resources';

  return (
    <li
      className="relative nav-item cursor-pointer py-2.5"
      onMouseEnter={() => setActiveMenu('resources')}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <button className="flex items-center gap-1 px-4 py-2 border border-transparent hover:border-stroke-2 dark:hover:border-stroke-7 rounded-full text-tagline-1 font-normal text-secondary/60 hover:text-secondary transition-all duration-200 dark:text-accent/60 dark:hover:text-accent">
        <span>Resources</span>
        <span className={`nav-arrow block origin-center transition-all duration-300 translate-y-px ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>

      {/* Large Mega Menu */}
      <div className={`fixed left-1/2 -translate-x-1/2 top-full mt-2 transition-all duration-300 lg:w-[1290px] w-full bg-white dark:bg-background-6 z-50 rounded-[20px] p-6 border border-stroke-1 dark:border-background-7 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="grid grid-cols-12 items-start md:gap-x-12 gap-y-6">
          <div className="space-y-3 col-span-4">
            <p className="text-tagline-2 font-medium text-secondary/60 dark:text-accent/60 px-3">Help & Documentation</p>
            <ul>
              <li>
                <Link href="/documentation" className="flex items-start gap-2 p-3 relative group">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
                  <div className="mt-1 size-7 shrink-0 rounded-lg p-1 border border-stroke-1 dark:border-white/10 flex items-center justify-center relative z-10">📁</div>
                  <div className="relative z-10">
                    <p className="text-tagline-1 font-normal text-secondary dark:text-accent">Documentation</p>
                    <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">Detailed documentation of the product.</p>
                  </div>
                </Link>
                 <Link href="/useCases" className="flex items-start gap-2 p-3 relative group">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
                  <div className="mt-1 size-7 shrink-0 rounded-lg p-1 border border-stroke-1 dark:border-white/10 flex items-center justify-center relative z-10">📁</div>
                  <div className="relative z-10">
                    <p className="text-tagline-1 font-normal text-secondary dark:text-accent">useCases</p>
                    <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">Detailed documentation of the product.</p>
                  </div>
                </Link>
                <Link href="/useCases" className="flex items-start gap-2 p-3 relative group">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
                  <div className="mt-1 size-7 shrink-0 rounded-lg p-1 border border-stroke-1 dark:border-white/10 flex items-center justify-center relative z-10">📁</div>
                  <div className="relative z-10">
                    <p className="text-tagline-1 font-normal text-secondary dark:text-accent">useCases</p>
                    <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">Detailed documentation of the product.</p>
                  </div>
                </Link>
                <Link href="/useCases" className="flex items-start gap-2 p-3 relative group">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
                  <div className="mt-1 size-7 shrink-0 rounded-lg p-1 border border-stroke-1 dark:border-white/10 flex items-center justify-center relative z-10">📁</div>
                  <div className="relative z-10">
                    <p className="text-tagline-1 font-normal text-secondary dark:text-accent">useCases</p>
                    <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">Detailed documentation of the product.</p>
                  </div>
                </Link>
                <Link href="/useCases" className="flex items-start gap-2 p-3 relative group">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
                  <div className="mt-1 size-7 shrink-0 rounded-lg p-1 border border-stroke-1 dark:border-white/10 flex items-center justify-center relative z-10">📁</div>
                  <div className="relative z-10">
                    <p className="text-tagline-1 font-normal text-secondary dark:text-accent">useCases</p>
                    <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">Detailed documentation of the product.</p>
                  </div>
                </Link>
                <Link href="/useCases" className="flex items-start gap-2 p-3 relative group">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
                  <div className="mt-1 size-7 shrink-0 rounded-lg p-1 border border-stroke-1 dark:border-white/10 flex items-center justify-center relative z-10">📁</div>
                  <div className="relative z-10">
                    <p className="text-tagline-1 font-normal text-secondary dark:text-accent">useCases</p>
                    <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">Detailed documentation of the product.</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 col-span-4">
            <p className="text-tagline-2 font-medium text-secondary/60 dark:text-accent/60 px-3">Help & Documentation</p>
            <ul>
              <li>
                <Link href="/documentation" className="flex items-start gap-2 p-3 relative group">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
                  <div className="mt-1 size-7 shrink-0 rounded-lg p-1 border border-stroke-1 dark:border-white/10 flex items-center justify-center relative z-10">📁</div>
                  <div className="relative z-10">
                    <p className="text-tagline-1 font-normal text-secondary dark:text-accent">Documentation</p>
                    <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">Detailed documentation of the product.</p>
                  </div>
                </Link>
                 <Link href="/useCases" className="flex items-start gap-2 p-3 relative group">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
                  <div className="mt-1 size-7 shrink-0 rounded-lg p-1 border border-stroke-1 dark:border-white/10 flex items-center justify-center relative z-10">📁</div>
                  <div className="relative z-10">
                    <p className="text-tagline-1 font-normal text-secondary dark:text-accent">useCases</p>
                    <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">Detailed documentation of the product.</p>
                  </div>
                </Link>
                <Link href="/useCases" className="flex items-start gap-2 p-3 relative group">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
                  <div className="mt-1 size-7 shrink-0 rounded-lg p-1 border border-stroke-1 dark:border-white/10 flex items-center justify-center relative z-10">📁</div>
                  <div className="relative z-10">
                    <p className="text-tagline-1 font-normal text-secondary dark:text-accent">useCases</p>
                    <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">Detailed documentation of the product.</p>
                  </div>
                </Link>
                <Link href="/useCases" className="flex items-start gap-2 p-3 relative group">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
                  <div className="mt-1 size-7 shrink-0 rounded-lg p-1 border border-stroke-1 dark:border-white/10 flex items-center justify-center relative z-10">📁</div>
                  <div className="relative z-10">
                    <p className="text-tagline-1 font-normal text-secondary dark:text-accent">useCases</p>
                    <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">Detailed documentation of the product.</p>
                  </div>
                </Link>
                <Link href="/useCases" className="flex items-start gap-2 p-3 relative group">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
                  <div className="mt-1 size-7 shrink-0 rounded-lg p-1 border border-stroke-1 dark:border-white/10 flex items-center justify-center relative z-10">📁</div>
                  <div className="relative z-10">
                    <p className="text-tagline-1 font-normal text-secondary dark:text-accent">useCases</p>
                    <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">Detailed documentation of the product.</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 col-span-4">
            <p className="text-tagline-2 font-medium text-secondary/60 dark:text-accent/60 px-3">Help & Documentation</p>
            <ul>
              <li>
                <Link href="/documentation" className="flex items-start gap-2 p-3 relative group">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
                  <div className="mt-1 size-7 shrink-0 rounded-lg p-1 border border-stroke-1 dark:border-white/10 flex items-center justify-center relative z-10">📁</div>
                  <div className="relative z-10">
                    <p className="text-tagline-1 font-normal text-secondary dark:text-accent">Documentation</p>
                    <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">Detailed documentation of the product.</p>
                  </div>
                </Link>
                 <Link href="/useCases" className="flex items-start gap-2 p-3 relative group">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
                  <div className="mt-1 size-7 shrink-0 rounded-lg p-1 border border-stroke-1 dark:border-white/10 flex items-center justify-center relative z-10">📁</div>
                  <div className="relative z-10">
                    <p className="text-tagline-1 font-normal text-secondary dark:text-accent">useCases</p>
                    <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">Detailed documentation of the product.</p>
                  </div>
                </Link>
                <Link href="/useCases" className="flex items-start gap-2 p-3 relative group">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
                  <div className="mt-1 size-7 shrink-0 rounded-lg p-1 border border-stroke-1 dark:border-white/10 flex items-center justify-center relative z-10">📁</div>
                  <div className="relative z-10">
                    <p className="text-tagline-1 font-normal text-secondary dark:text-accent">useCases</p>
                    <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">Detailed documentation of the product.</p>
                  </div>
                </Link>
                <Link href="/useCases" className="flex items-start gap-2 p-3 relative group">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
                  <div className="mt-1 size-7 shrink-0 rounded-lg p-1 border border-stroke-1 dark:border-white/10 flex items-center justify-center relative z-10">📁</div>
                  <div className="relative z-10">
                    <p className="text-tagline-1 font-normal text-secondary dark:text-accent">useCases</p>
                    <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">Detailed documentation of the product.</p>
                  </div>
                </Link>
                <Link href="/useCases" className="flex items-start gap-2 p-3 relative group">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
                  <div className="mt-1 size-7 shrink-0 rounded-lg p-1 border border-stroke-1 dark:border-white/10 flex items-center justify-center relative z-10">📁</div>
                  <div className="relative z-10">
                    <p className="text-tagline-1 font-normal text-secondary dark:text-accent">useCases</p>
                    <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">Detailed documentation of the product.</p>
                  </div>
                </Link>
                <Link href="/useCases" className="flex items-start gap-2 p-3 relative group">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
                  <div className="mt-1 size-7 shrink-0 rounded-lg p-1 border border-stroke-1 dark:border-white/10 flex items-center justify-center relative z-10">📁</div>
                  <div className="relative z-10">
                    <p className="text-tagline-1 font-normal text-secondary dark:text-accent">useCases</p>
                    <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">Detailed documentation of the product.</p>
                  </div>
                </Link>
                <Link href="/useCases" className="flex items-start gap-2 p-3 relative group">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
                  <div className="mt-1 size-7 shrink-0 rounded-lg p-1 border border-stroke-1 dark:border-white/10 flex items-center justify-center relative z-10">📁</div>
                  <div className="relative z-10">
                    <p className="text-tagline-1 font-normal text-secondary dark:text-accent">useCases</p>
                    <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">Detailed documentation of the product.</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
}

// People Dropdown Component
function PeopleDropdown({ activeMenu, setActiveMenu }: { activeMenu: string | null; setActiveMenu: (menu: string | null) => void }) {
  const isOpen = activeMenu === 'people';

  return (
    <li
      className="relative nav-item cursor-pointer py-2.5"
      onMouseEnter={() => setActiveMenu('people')}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <button className="flex items-center gap-1 px-4 py-2 border border-transparent hover:border-stroke-2 dark:hover:border-stroke-7 rounded-full text-tagline-1 font-normal text-secondary/60 hover:text-secondary transition-all duration-200 dark:text-accent/60 dark:hover:text-accent">
        <span>People & Culture</span>
        <span className={`nav-arrow block origin-center transition-all duration-300 translate-y-px ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>

      {/* Dropdown Menu */}
      <ul className={`mt-2 w-[320px] rounded-3xl p-2 bg-white dark:bg-background-6 shadow-14 absolute left-1/2 -translate-x-1/2 top-full z-50 transition-all duration-300 border border-stroke-1 dark:border-background-7 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <li>
          <Link href="/process" className="p-3 rounded-2xl flex items-start gap-3 transition-all duration-300 relative group">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
            <div className="size-11 p-3 rounded-[10px] bg-white dark:bg-background-6 relative z-10 shadow-14 border border-stroke-1 dark:border-background-7 flex items-center justify-center">
              <span className="text-2xl">⚙️</span>
            </div>
            <div className="relative z-10">
              <p className="text-tagline-1 font-normal text-secondary dark:text-accent">Process</p>
              <p className="text-tagline-3 font-normal text-secondary/60 dark:text-accent/60">Learn about our workflow</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/process" className="p-3 rounded-2xl flex items-start gap-3 transition-all duration-300 relative group">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
            <div className="size-11 p-3 rounded-[10px] bg-white dark:bg-background-6 relative z-10 shadow-14 border border-stroke-1 dark:border-background-7 flex items-center justify-center">
              <span className="text-2xl">⚙️</span>
            </div>
            <div className="relative z-10">
              <p className="text-tagline-1 font-normal text-secondary dark:text-accent">Process</p>
              <p className="text-tagline-3 font-normal text-secondary/60 dark:text-accent/60">Learn about our workflow</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/process" className="p-3 rounded-2xl flex items-start gap-3 transition-all duration-300 relative group">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
            <div className="size-11 p-3 rounded-[10px] bg-white dark:bg-background-6 relative z-10 shadow-14 border border-stroke-1 dark:border-background-7 flex items-center justify-center">
              <span className="text-2xl">⚙️</span>
            </div>
            <div className="relative z-10">
              <p className="text-tagline-1 font-normal text-secondary dark:text-accent">Process</p>
              <p className="text-tagline-3 font-normal text-secondary/60 dark:text-accent/60">Learn about our workflow</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/process" className="p-3 rounded-2xl flex items-start gap-3 transition-all duration-300 relative group">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
            <div className="size-11 p-3 rounded-[10px] bg-white dark:bg-background-6 relative z-10 shadow-14 border border-stroke-1 dark:border-background-7 flex items-center justify-center">
              <span className="text-2xl">⚙️</span>
            </div>
            <div className="relative z-10">
              <p className="text-tagline-1 font-normal text-secondary dark:text-accent">Process</p>
              <p className="text-tagline-3 font-normal text-secondary/60 dark:text-accent/60">Learn about our workflow</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/process" className="p-3 rounded-2xl flex items-start gap-3 transition-all duration-300 relative group">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
            <div className="size-11 p-3 rounded-[10px] bg-white dark:bg-background-6 relative z-10 shadow-14 border border-stroke-1 dark:border-background-7 flex items-center justify-center">
              <span className="text-2xl">⚙️</span>
            </div>
            <div className="relative z-10">
              <p className="text-tagline-1 font-normal text-secondary dark:text-accent">Process</p>
              <p className="text-tagline-3 font-normal text-secondary/60 dark:text-accent/60">Learn about our workflow</p>
            </div>
          </Link>
        </li>
      </ul>
    </li>
  );
}

// Mobile Menu Item Component
function MobileMenuItem({
  title,
  menuId,
  activeMenu,
  toggleMenu,
  links,
}: {
  title: string;
  menuId: string;
  activeMenu: string | null;
  toggleMenu: (menu: string) => void;
  links: { href: string; label: string }[];
}) {
  const isOpen = activeMenu === menuId;

  return (
    <li className="space-y-2">
      <button
        className="flex items-center justify-between w-full py-2.5 cursor-pointer"
        onClick={() => toggleMenu(menuId)}
      >
        <span className="text-secondary/60 dark:text-accent/60 font-normal text-tagline-1 block">
          {title}
        </span>
        <span className={`menu-arrow transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 12L14 8L10 4" className="stroke-secondary/60 dark:stroke-accent/60" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <ul className={`mobile-submenu transition-all duration-300 overflow-hidden ${isOpen ? 'block max-h-[500px]' : 'hidden max-h-0'}`}>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-tagline-1 font-normal text-secondary dark:text-accent transition-all duration-200 py-2.5 text-left block ml-4">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}