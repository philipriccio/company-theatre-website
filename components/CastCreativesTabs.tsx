"use client";

import { useState } from "react";
import Image from "next/image";
import { User } from "lucide-react";
import { CastMember, CrewMember } from "@/lib/data";

interface CastCreativesTabsProps {
  cast: CastMember[];
  crew: CrewMember[];
}

export default function CastCreativesTabs({ cast, crew }: CastCreativesTabsProps) {
  const [activeTab, setActiveTab] = useState<"cast" | "creatives">("cast");

  return (
    <div className="border-t border-gray-200">
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("cast")}
          className={`flex-1 py-4 px-6 text-left heading-sm text-sm flex items-center justify-between transition-colors ${
            activeTab === "cast" 
              ? "bg-black text-white" 
              : "bg-white text-black hover:bg-gray-50"
          }`}
        >
          Cast
          <span className="text-xs opacity-60">{cast.length}</span>
        </button>
        <button
          onClick={() => setActiveTab("creatives")}
          className={`flex-1 py-4 px-6 text-left heading-sm text-sm flex items-center justify-between transition-colors ${
            activeTab === "creatives" 
              ? "bg-black text-white" 
              : "bg-white text-black hover:bg-gray-50"
          }`}
        >
          Creatives
          <span className="text-xs opacity-60">{crew.length}</span>
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === "cast" ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {cast.map((member, index) => (
              <div key={index}>
                {/* Headshot - static image only */}
                <div className="aspect-square bg-gray-100 mb-3 relative overflow-hidden">
                  {member.headshot ? (
                    <Image
                      src={member.headshot}
                      alt={member.actor}
                      fill
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <User size={48} className="text-gray-300" />
                    </div>
                  )}
                </div>
                <h4 className="font-bold text-sm leading-tight">{member.actor}</h4>
                {member.role && (
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">{member.role}</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {crew.map((member, index) => (
              <div key={index}>
                {/* Creatives: names and roles only, no headshots */}
                <div className="py-2">
                  <h4 className="font-bold text-sm leading-tight">{member.name}</h4>
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
