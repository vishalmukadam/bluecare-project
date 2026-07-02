"use client";

import { MapPin } from "lucide-react";

export default function PresenceStrip() {
  const locations = ["Abu Dhabi", "Mumbai", "Nagpur", "Rajasthan", "Bangalore", "Hyderabad"];

  return (
    <div className="w-full bg-gradient-to-r from-[#20B0E0]/8 via-[#F8FAFE] to-[#8CC63F]/8 py-2 border-y border-slate-200/60 relative overflow-hidden z-10">
      {/* Subtle light streak background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-[#3C4D57] text-xs font-semibold tracking-wider uppercase">
        <span className="text-[#0E84B8] font-bold text-[10px] sm:text-xs tracking-widest shrink-0">
          Our Operational Presence:
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5">
          {locations.map((loc) => (
            <div key={loc} className="flex items-center gap-1.5 hover:text-[#0E84B8] transition-colors duration-300">
              <MapPin className="w-3.5 h-3.5 text-[#8CC63F] shrink-0" />
              <span className="text-[#3C4D57] hover:text-[#0E84B8] transition-colors duration-200">{loc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
