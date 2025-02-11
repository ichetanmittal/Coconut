import React from 'react';
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface NavMenuProps {
  className?: string;
}

export const NavMenu = ({ className }: NavMenuProps) => {
  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 bg-[#0D1117]/80 backdrop-blur-md", className)}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white flex items-center">
          <span className="text-[#C5F82A]">coconut</span>
          <span className="text-[#C5F82A] ml-1">*</span>
        </Link>
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-[#C5F82A] transition-colors">
            Home
          </Link>
          <a 
            href="https://calendly.com/d/cqwv-t87-7jg/one-off-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C5F82A] text-black px-6 py-2 rounded-full hover:bg-[#C5F82A]/90 transition-all"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </nav>
  );
};
