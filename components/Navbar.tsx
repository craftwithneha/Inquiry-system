"use client"
import React from "react";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
    
  return (
    <nav className="p-4 ">
      {/* Left Side */}
      <SidebarTrigger />
     <span className="font-bold text-2xl">Dashboard</span>
    </nav>
  );
};

export default Navbar;
