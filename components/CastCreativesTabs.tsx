"use client";

import { useState } from "react";
import { Info, User } from "lucide-react";
import { CastMember, CrewMember } from "@/lib/data";
import Modal from "./Modal";

interface CastCreativesTabsProps {
  cast: CastMember[];
  crew: CrewMember[];
}

export default function CastCreativesTabs({ cast, crew }: CastCreativesTabsProps) {
  const [activeTab, setActiveTab] = useState<"cast" | "creatives">("cast");
  const [selectedPerson, setSelectedPerson] = useState<{ name: string; role: string; bio?: string } | null>(null);

  const handlePersonClick = (name: string, role: string, bio?: string) => {
    setSelectedPerson({ name, role, bio });
  };

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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cast.map((member, index) => (
              <div key={index} className="group">
                {/* Headshot placeholder */}
                <div className="aspect-square bg-gray-100 mb-3 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <User size={48} className="text-gray-300" />
                  </div>
                  <button
                    onClick={() => handlePersonClick(member.actor, member.role || "Cast", member.bio)}
                    className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-black hover:text-white"
                  >
                    <Info size={16} />
                  </button>
                </div>
                <h4 className="font-bold text-sm leading-tight">{member.actor}</h4>
                {member.role && (
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">{member.role}</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {crew.map((member, index) => (
              <div key={index} className="group">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-sm leading-tight">{member.name}</h4>
                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">{member.role}</p>
                  </div>
                  <button
                    onClick={() => handlePersonClick(member.name, member.role, member.bio)}
                    className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black hover:text-white hover:border-black"
                  >
                    <Info size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bio Modal */}
      <Modal
        isOpen={!!selectedPerson}
        onClose={() => setSelectedPerson(null)}
        title={selectedPerson?.name || ""}
        subtitle={selectedPerson?.role}
      >
        <div className="space-y-4">
          <div className="aspect-video bg-gray-100 flex items-center justify-center">
            <User size={64} className="text-gray-300" />
          </div>
          {selectedPerson?.bio ? (
            <p className="body-md text-gray-700">{selectedPerson.bio}</p>
          ) : (
            <div className="space-y-4 text-gray-600">
              <p>Biography coming soon.</p>
              <p className="text-sm italic">
                {selectedPerson?.name} is a talented {selectedPerson?.role.toLowerCase()} 
                who has worked with The Company Theatre on this production.
              </p>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}
