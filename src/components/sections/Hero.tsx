import React, { useState } from 'react';
import { Search, MapPin, Building2, ShieldAlert, ArrowRight, Sparkles, FileText } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/services?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const quickTags = [
    { label: 'Barangay Clearance', category: 'business' },
    { label: "Mayor's Business Permit", category: 'business' },
    { label: 'Local Scholarship', category: 'education' },
    { label: 'MDRRMO Emergency Hotline', category: 'disaster-preparedness' },
    { label: 'Coastal & Surf Watch', href: '#weather' },
    { label: 'Health Center Check-ups', category: 'health-services' },
  ];

  return (
    <div className="relative bg-[#0051ba] bg-gradient-to-b from-[#0051ba] via-[#0048a8] to-[#003d8d] text-white pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Decorative background grid and ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7">
            {/* LGU Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-900/80 border border-primary-700/60 text-primary-200 text-xs font-semibold mb-6 backdrop-blur-xs">
              <MapPin className="h-3.5 w-3.5 text-amber-400" />
              <span>Bayan ng Baler • Lalawigan ng Aurora</span>
              <span className="w-1 h-1 rounded-full bg-slate-500"></span>
              <span className="text-amber-300 font-bold">Kapital ng Aurora</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.15] mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-sky-300 to-blue-200">BetterBaler.org</span>
            </h1>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              Find step-by-step guides for municipal permits, barangay clearances, public health programs, local scholarships, and real-time weather & coastal updates.
            </p>

            {/* Interactive Search Bar */}
            <form onSubmit={handleSearch} className="mb-6">
              <div className="relative flex items-center bg-white rounded-2xl p-2 shadow-2xl border border-slate-200/20 max-w-xl">
                <Search className="h-5 w-5 text-slate-400 ml-3 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search government services, permits, or departments..."
                  className="w-full px-3 py-2 text-slate-800 text-sm font-medium bg-transparent focus:outline-none placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-primary-600 hover:bg-primary-500 text-white font-semibold text-xs rounded-xl transition-all shadow-md shrink-0 flex items-center gap-1.5"
                >
                  Search
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>

            {/* Quick Suggestion Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-400 font-medium mr-1 flex items-center gap-1">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" /> Quick Links:
              </span>
              {quickTags.map(tag => (
                <button
                  key={tag.label}
                  type="button"
                  onClick={() => {
                    if (tag.href) {
                      window.location.hash = tag.href;
                    } else if (tag.category) {
                      navigate(`/services/${tag.category}`);
                    }
                  }}
                  className="px-3 py-1 rounded-lg bg-slate-800/80 hover:bg-primary-900 border border-slate-700/60 text-slate-300 hover:text-white text-xs font-medium transition-colors"
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: LGU Quick Info & Stats Box */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-primary-900/80 rounded-xl text-primary-300 border border-primary-700/50">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white">LGU Baler At A Glance</h2>
                    <p className="text-[11px] text-slate-400">Poblacion, Baler, Aurora 3200</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-900/80 text-emerald-300 border border-emerald-700">
                  OPEN TODAY
                </span>
              </div>

              <div className="space-y-3.5 mb-6 text-xs text-slate-300">
                <div className="flex justify-between items-center p-3 rounded-xl bg-slate-800/50 border border-slate-800">
                  <span className="text-slate-400">Barangays Covered</span>
                  <span className="font-bold text-white">13 Barangays</span>
                </div>

                <div className="flex justify-between items-center p-3 rounded-xl bg-slate-800/50 border border-slate-800">
                  <span className="text-slate-400">Municipal Hall Schedule</span>
                  <span className="font-medium text-slate-200">Mon - Thu • 7:00 AM - 6:00 PM</span>
                </div>

                <div className="flex justify-between items-center p-3 rounded-xl bg-amber-950/40 border border-amber-800/50 text-amber-200">
                  <span className="flex items-center gap-1.5 font-medium">
                    <ShieldAlert className="h-4 w-4 text-amber-400" />
                    MDRRMO Emergency
                  </span>
                  <a href="tel:09205941906" className="font-bold text-amber-300 underline">
                    0920-594-1906
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <FileText className="h-3.5 w-3.5 text-primary-400" /> Open Source & Transparent
                </span>
                <span className="text-slate-500">#BetterGovPH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

