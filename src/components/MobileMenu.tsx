
import React, { useState } from "react";
import { ChevronDown, ChevronRight, Search, User } from "lucide-react";
import ServiceIcons from "./ServiceIcons";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#121212] overflow-y-auto md:hidden">
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-white">VIALTO</a>
          <button
            onClick={onClose}
            className="rounded-md p-2 text-gray-400 hover:text-white"
          >
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <div className="space-y-1 px-2 pb-3 pt-2">
        <div className="flex items-center justify-between p-2 mb-2">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-black">
              <User className="h-5 w-5" />
            </div>
            <div className="ml-2">
              <div className="text-sm font-medium leading-none text-white">Nancy Gilbert</div>
              <div className="text-xs text-gray-400">Head of Global Mobility</div>
            </div>
          </div>
        </div>

        <div className="relative mx-2 my-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="search"
            className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search..."
          />
        </div>

        <a
          href="/home"
          className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800"
        >
          Home
        </a>

        <div className="border-t border-gray-800 my-2"></div>
        
        {/* Explore Dropdown */}
        <div className="rounded-md">
          <button
            onClick={() => toggleSubmenu('explore')}
            className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-white hover:bg-gray-800 rounded-md"
          >
            <span>Explore</span>
            {expandedMenu === 'explore' ? (
              <ChevronDown className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
          </button>
          {expandedMenu === 'explore' && (
            <div className="pl-4 pr-2">
              <div className="mt-2 text-xs uppercase text-gray-500">SERVICES OVERVIEW</div>
              <div className="mt-1 space-y-1">
                <a href="#" className="block px-3 py-2 text-base text-gray-300 hover:bg-gray-800 rounded-md">
                  Mobility Tax Services
                </a>
                <a href="#" className="block px-3 py-2 text-base text-gray-300 hover:bg-gray-800 rounded-md">
                  Immigration Services
                </a>
                <a href="#" className="block px-3 py-2 text-base text-gray-300 hover:bg-gray-800 rounded-md">
                  Global Compensation Services
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Work Dropdown */}
        <div className="rounded-md">
          <button
            onClick={() => toggleSubmenu('work')}
            className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-white hover:bg-gray-800 rounded-md"
          >
            <span>Work</span>
            {expandedMenu === 'work' ? (
              <ChevronDown className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
          </button>
          {expandedMenu === 'work' && (
            <div className="pl-4 pr-2">
              <div className="mt-2 text-xs uppercase text-gray-500">WORK PROGRAMS</div>
              <div className="mt-1 space-y-1">
                <a href="#" className="block px-3 py-2 text-base text-gray-300 hover:bg-gray-800 rounded-md">
                  Remote Work Solutions
                </a>
                <a href="#" className="block px-3 py-2 text-base text-gray-300 hover:bg-gray-800 rounded-md">
                  Business Travel Compliance
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Optimize Dropdown */}
        <div className="rounded-md">
          <button
            onClick={() => toggleSubmenu('optimize')}
            className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-white hover:bg-gray-800 rounded-md"
          >
            <span>Optimize</span>
            {expandedMenu === 'optimize' ? (
              <ChevronDown className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
          </button>
          {expandedMenu === 'optimize' && (
            <div className="pl-4 pr-2">
              <div className="mt-2 text-xs uppercase text-gray-500">OPTIMIZATION PROGRAMS</div>
              <div className="mt-1 space-y-1">
                <a href="#" className="block px-3 py-2 text-base text-gray-300 hover:bg-gray-800 rounded-md">
                  Process Optimization
                </a>
                <a href="#" className="block px-3 py-2 text-base text-gray-300 hover:bg-gray-800 rounded-md">
                  Cost Management
                </a>
                <a href="#" className="block px-3 py-2 text-base text-gray-300 hover:bg-gray-800 rounded-md">
                  Technology Solutions
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Learn Dropdown */}
        <div className="rounded-md">
          <button
            onClick={() => toggleSubmenu('learn')}
            className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-white hover:bg-gray-800 rounded-md"
          >
            <span>Learn</span>
            {expandedMenu === 'learn' ? (
              <ChevronDown className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
          </button>
          {expandedMenu === 'learn' && (
            <div className="pl-4 pr-2">
              <div className="mt-2 text-xs uppercase text-gray-500">KNOWLEDGE CENTER</div>
              <div className="mt-1 space-y-1">
                <a href="#" className="block px-3 py-2 text-base text-gray-300 hover:bg-gray-800 rounded-md">
                  Insights & Articles
                </a>
                <a href="#" className="block px-3 py-2 text-base text-gray-300 hover:bg-gray-800 rounded-md">
                  Webinars
                </a>
                <a href="#" className="block px-3 py-2 text-base text-gray-300 hover:bg-gray-800 rounded-md">
                  Events
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Services Dropdown */}
        <div className="rounded-md">
          <button
            onClick={() => toggleSubmenu('services')}
            className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-white hover:bg-gray-800 rounded-md"
          >
            <span>Services</span>
            {expandedMenu === 'services' ? (
              <ChevronDown className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
          </button>
          {expandedMenu === 'services' && (
            <div className="pl-4 pr-2">
              <div className="mt-2 text-xs uppercase text-gray-500">COMPENSATION AND EQUITY</div>
              <div className="mt-1 space-y-1">
                <a href="#" className="flex items-center px-3 py-2 text-base text-gray-300 hover:bg-gray-800 rounded-md">
                  <ServiceIcons.TotalComp className="h-5 w-5 mr-3 text-teal-500" />
                  <span>Total Comp</span>
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-base text-gray-300 hover:bg-gray-800 rounded-md">
                  <ServiceIcons.ShareTax className="h-5 w-5 mr-3 text-teal-500" />
                  <span>ShareTax</span>
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-base text-gray-300 hover:bg-gray-800 rounded-md">
                  <ServiceIcons.GCM className="h-5 w-5 mr-3 text-teal-500" />
                  <span>GCM</span>
                </a>
              </div>

              <div className="mt-4 text-xs uppercase text-gray-500">DYNAMIC WORK</div>
              <div className="mt-1 space-y-1">
                <a href="#" className="flex items-center px-3 py-2 text-base text-gray-300 hover:bg-gray-800 rounded-md">
                  <ServiceIcons.MyTripsAdmin className="h-5 w-5 mr-3 text-teal-500" />
                  <span>myTrips Admin</span>
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-base text-gray-300 hover:bg-gray-800 rounded-md">
                  <ServiceIcons.TravelWatchAdmin className="h-5 w-5 mr-3 text-teal-500" />
                  <span>TravelWatch Admin</span>
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-base text-gray-300 hover:bg-gray-800 rounded-md">
                  <ServiceIcons.RemoteWork className="h-5 w-5 mr-3 text-teal-500" />
                  <span>Remote Work</span>
                </a>
              </div>

              <div className="mt-4 text-xs uppercase text-gray-500">SOCIAL SECURITY</div>
              <div className="mt-1 space-y-1">
                <a href="#" className="flex items-center px-3 py-2 text-base text-gray-300 hover:bg-gray-800 rounded-md">
                  <ServiceIcons.GSS className="h-5 w-5 mr-3 text-teal-500" />
                  <span>GSS</span>
                </a>
              </div>

              <div className="mt-4 text-xs uppercase text-gray-500">MANAGED SERVICES</div>
              <div className="mt-1 space-y-1">
                <a href="#" className="flex items-center px-3 py-2 text-base text-gray-300 hover:bg-gray-800 rounded-md">
                  <ServiceIcons.Care className="h-5 w-5 mr-3 text-teal-500" />
                  <span>Care</span>
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-base text-gray-300 hover:bg-gray-800 rounded-md">
                  <ServiceIcons.VerifiedWithEquus className="h-5 w-5 mr-3 text-teal-500" />
                  <span>'Verified' with Equus</span>
                </a>
              </div>

              <div className="mt-4 bg-gray-900 p-3 rounded-md">
                <div className="text-xs text-gray-400">Your saved interests:</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300">Thought leadership</span>
                  <span className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300">Business travel</span>
                  <span className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300">Cross border</span>
                  <span className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300">Remote work</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
