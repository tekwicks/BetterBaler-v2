import { Sparkles, Code2, Users, HeartHandshake, ExternalLink } from 'lucide-react';

export default function CivicTechBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-[#0051ba] via-primary-800 to-[#003d8d] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 md:p-10 shadow-2xl backdrop-blur-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span>Civic Technology Initiative</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              Help Build the Future of Civic Tech in Baler
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Better Baler is a community-led, open-source portal powered by volunteers and local citizens. Join us to make local government information more accessible, transparent, and easy to use.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-medium text-slate-200">
                <Code2 className="h-4 w-4 text-sky-400" /> 100% Open Source
              </span>
              <span className="flex items-center gap-1.5 font-medium text-slate-200">
                <Users className="h-4 w-4 text-emerald-400" /> Community Driven
              </span>
              <span className="flex items-center gap-1.5 font-medium text-slate-200">
                <HeartHandshake className="h-4 w-4 text-rose-400" /> Non-Partisan & Free
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <a
              href="https://bettergov.ph/join-us"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-bold text-sm rounded-xl transition-all shadow-lg hover:shadow-primary-600/30 text-center flex items-center justify-center gap-2"
            >
              Join Movement <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/bettergovph/bettergov"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-sm rounded-xl transition-colors text-center"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
