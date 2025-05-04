
import React, { useState } from "react";
import { 
  ChevronDown, 
  Search, 
  Bell, 
  HelpCircle, 
  User 
} from "lucide-react";
import ServiceIcons from "./ServiceIcons";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <header className="relative z-50 bg-[#121212] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo and Desktop Navigation */}
            <div className="flex items-center">
              <a href="/" className="mr-6">
                <span className="text-xl font-bold uppercase tracking-wider">VIALTO</span>
                <span className="ml-1 text-sm font-light">PARTNERS</span>
              </a>
              
              <div className="mr-4 hidden md:block">
                <a href="/" className="font-semibold text-gray-200 hover:text-white">
                  HQ
                </a>
              </div>

              <nav className="hidden md:flex space-x-1">
                <a 
                  href="/home"
                  className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
                >
                  Home
                </a>
                <div 
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('explore')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={cn(
                      "flex items-center px-3 py-2 text-sm font-medium",
                      activeDropdown === 'explore' ? "text-white" : "text-gray-300 hover:text-white"
                    )}
                    onClick={() => handleDropdownToggle('explore')}
                  >
                    Explore
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {activeDropdown === 'explore' && (
                    <div className="absolute left-0 mt-1 w-[280px] bg-[#121212] shadow-lg border border-gray-800">
                      <div className="p-4">
                        <div className="mb-3 text-gray-400 text-xs">SERVICES OVERVIEW</div>
                        <ul className="space-y-2">
                          <li><a href="#" className="block hover:text-blue-400 text-sm">Mobility Tax Services</a></li>
                          <li><a href="#" className="block hover:text-blue-400 text-sm">Immigration Services</a></li>
                          <li><a href="#" className="block hover:text-blue-400 text-sm">Global Compensation Services</a></li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <div 
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('work')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={cn(
                      "flex items-center px-3 py-2 text-sm font-medium",
                      activeDropdown === 'work' ? "text-white" : "text-gray-300 hover:text-white"
                    )}
                    onClick={() => handleDropdownToggle('work')}
                  >
                    Work
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {activeDropdown === 'work' && (
                    <div className="absolute left-0 mt-1 w-[280px] bg-[#121212] shadow-lg border border-gray-800">
                      <div className="p-4">
                        <div className="mb-3 text-gray-400 text-xs">WORK PROGRAMS</div>
                        <ul className="space-y-2">
                          <li><a href="#" className="block hover:text-blue-400 text-sm">Remote Work Solutions</a></li>
                          <li><a href="#" className="block hover:text-blue-400 text-sm">Business Travel Compliance</a></li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <div 
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('optimize')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={cn(
                      "flex items-center px-3 py-2 text-sm font-medium",
                      activeDropdown === 'optimize' ? "text-white" : "text-gray-300 hover:text-white"
                    )}
                    onClick={() => handleDropdownToggle('optimize')}
                  >
                    Optimize
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {activeDropdown === 'optimize' && (
                    <div className="absolute left-0 mt-1 w-[280px] bg-[#121212] shadow-lg border border-gray-800">
                      <div className="p-4">
                        <div className="mb-3 text-gray-400 text-xs">OPTIMIZATION PROGRAMS</div>
                        <ul className="space-y-2">
                          <li><a href="#" className="block hover:text-blue-400 text-sm">Process Optimization</a></li>
                          <li><a href="#" className="block hover:text-blue-400 text-sm">Cost Management</a></li>
                          <li><a href="#" className="block hover:text-blue-400 text-sm">Technology Solutions</a></li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <div 
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('learn')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={cn(
                      "flex items-center px-3 py-2 text-sm font-medium",
                      activeDropdown === 'learn' ? "text-white" : "text-gray-300 hover:text-white"
                    )}
                    onClick={() => handleDropdownToggle('learn')}
                  >
                    Learn
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {activeDropdown === 'learn' && (
                    <div className="absolute left-0 mt-1 w-[280px] bg-[#121212] shadow-lg border border-gray-800">
                      <div className="p-4">
                        <div className="mb-3 text-gray-400 text-xs">KNOWLEDGE CENTER</div>
                        <ul className="space-y-2">
                          <li><a href="#" className="block hover:text-blue-400 text-sm">Insights & Articles</a></li>
                          <li><a href="#" className="block hover:text-blue-400 text-sm">Webinars</a></li>
                          <li><a href="#" className="block hover:text-blue-400 text-sm">Events</a></li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <div 
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('services')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={cn(
                      "flex items-center px-3 py-2 text-sm font-medium",
                      activeDropdown === 'services' ? "text-white" : "text-gray-300 hover:text-white"
                    )}
                    onClick={() => handleDropdownToggle('services')}
                  >
                    Services
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {activeDropdown === 'services' && (
                    <div className="absolute left-0 mt-1 w-screen max-w-7xl -translate-x-1/3 bg-[#121212] shadow-lg border border-gray-800">
                      <div className="grid grid-cols-3 gap-8 p-6">
                        <div>
                          <div className="mb-3 text-gray-400 text-xs uppercase">Compensation and Equity</div>
                          <ul className="space-y-4">
                            <li className="flex items-center">
                              <ServiceIcons.TotalComp className="h-6 w-6 mr-3 text-teal-500" />
                              <a href="#" className="block hover:text-blue-400">Total Comp</a>
                              <span className="ml-2 text-gray-400">&#8599;</span>
                            </li>
                            <li className="flex items-center">
                              <ServiceIcons.ShareTax className="h-6 w-6 mr-3 text-teal-500" />
                              <a href="#" className="block hover:text-blue-400">ShareTax</a>
                              <span className="ml-2 text-gray-400">&#8599;</span>
                            </li>
                            <li className="flex items-center">
                              <ServiceIcons.GCM className="h-6 w-6 mr-3 text-teal-500" />
                              <a href="#" className="block hover:text-blue-400">GCM</a>
                              <span className="ml-2 text-gray-400">&#8599;</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <div className="mb-3 text-gray-400 text-xs uppercase">Dynamic Work</div>
                          <ul className="space-y-4">
                            <li className="flex items-center">
                              <ServiceIcons.MyTripsAdmin className="h-6 w-6 mr-3 text-teal-500" />
                              <a href="#" className="block hover:text-blue-400">myTrips Admin</a>
                              <span className="ml-2 text-gray-400">&#8599;</span>
                            </li>
                            <li className="flex items-center">
                              <ServiceIcons.TravelWatchAdmin className="h-6 w-6 mr-3 text-teal-500" />
                              <a href="#" className="block hover:text-blue-400">TravelWatch Admin</a>
                              <span className="ml-2 text-gray-400">&#8599;</span>
                            </li>
                            <li className="flex items-center">
                              <ServiceIcons.RemoteWork className="h-6 w-6 mr-3 text-teal-500" />
                              <a href="#" className="block hover:text-blue-400">Remote Work</a>
                              <span className="ml-2 text-gray-400">&#8599;</span>
                            </li>
                          </ul>
                          <div className="mt-6 mb-3 text-gray-400 text-xs uppercase">Social Security</div>
                          <ul className="space-y-4">
                            <li className="flex items-center">
                              <ServiceIcons.GSS className="h-6 w-6 mr-3 text-teal-500" />
                              <a href="#" className="block hover:text-blue-400">GSS</a>
                              <span className="ml-2 text-gray-400">&#8599;</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <div className="mb-3 text-gray-400 text-xs uppercase">Managed Services</div>
                          <ul className="space-y-4">
                            <li className="flex items-center">
                              <ServiceIcons.Care className="h-6 w-6 mr-3 text-teal-500" />
                              <a href="#" className="block hover:text-blue-400">Care</a>
                              <span className="ml-2 text-gray-400">&#8599;</span>
                            </li>
                            <li className="flex items-center">
                              <ServiceIcons.VerifiedWithEquus className="h-6 w-6 mr-3 text-teal-500" />
                              <a href="#" className="block hover:text-blue-400">'Verified' with Equus</a>
                              <span className="ml-2 text-gray-400">&#8599;</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-[#1a1a1a] px-6 py-4">
                        <div className="text-xs">Your saved interests:</div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="rounded-full bg-gray-800 px-3 py-1 text-xs">Thought leadership</span>
                          <span className="rounded-full bg-gray-800 px-3 py-1 text-xs">Business travel</span>
                          <span className="rounded-full bg-gray-800 px-3 py-1 text-xs">Cross border</span>
                          <span className="rounded-full bg-gray-800 px-3 py-1 text-xs">Remote work</span>
                          <span className="rounded-full bg-gray-800 px-3 py-1 text-xs">Permanent transfer</span>
                          <span className="rounded-full bg-gray-800 px-3 py-1 text-xs">Relocation</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </nav>
            </div>

            {/* Icons and User */}
            <div className="flex items-center space-x-3">
              <button className="text-gray-300 hover:text-white p-1 hidden md:block">
                <Search className="h-5 w-5" />
              </button>
              <button className="text-gray-300 hover:text-white p-1 hidden md:block">
                <Bell className="h-5 w-5" />
              </button>
              <button className="text-gray-300 hover:text-white p-1 hidden md:block">
                <HelpCircle className="h-5 w-5" />
              </button>
              <div className="hidden md:flex items-center ml-2">
                <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-black">
                  <User className="h-5 w-5" />
                </div>
                <div className="ml-2 hidden lg:block">
                  <div className="text-sm font-medium leading-none">Nancy Gilbert</div>
                  <div className="text-xs text-gray-400">Head of Global Mobility</div>
                </div>
                <ChevronDown className="ml-1 h-4 w-4 text-gray-400" />
              </div>

              {/* Mobile menu button */}
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {!mobileMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

export default Navbar;
