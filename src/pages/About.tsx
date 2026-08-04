import SEO from '../components/SEO';
import LguSeal from '../components/ui/LguSeal';
import { MapPin, Phone, Mail, Clock, Compass, Heart, Sparkles, ExternalLink } from 'lucide-react';

export default function About() {
  const barangays = [
    'Barangay I (Poblacion)',
    'Barangay II (Poblacion)',
    'Barangay III (Poblacion)',
    'Barangay IV (Poblacion)',
    'Buhangin',
    'Calabuanan',
    'Obligacion',
    'Pingit',
    'Reserva',
    'Sabang',
    'Suklayin',
    'Zabali',
    'Zarah',
  ];

  return (
    <>
      <SEO
        title="About Baler, Aurora"
        description="Learn about the Municipality of Baler, Aurora, its 13 barangays, municipal services, and the Better Baler open civic portal."
        keywords="baler, aurora, municipality of baler, sabang beach, siege of baler, local government, civic tech, better baler"
      />
      <div className="bg-slate-50 min-h-screen py-10 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-primary-900 via-slate-900 to-primary-950 text-white rounded-3xl p-8 md:p-12 mb-10 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] opacity-15"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <LguSeal size={80} className="shrink-0" />
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-2">
                  <MapPin className="h-3.5 w-3.5 text-amber-400" />
                  <span>Provincial Capital • Province of Aurora</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                  Municipality of Baler
                </h1>
                <p className="text-slate-300 text-sm md:text-base max-w-2xl">
                  Baler is the capital municipality of Aurora province, situated on the eastern coast of Luzon overlooking Baler Bay and the Philippine Sea. Famous for its rich history, cultural heritage, and pristine surfing waves.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Main Content Area */}
            <div className="md:col-span-2 space-y-8">
              {/* About the Portal Section */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary-600" />
                  About BetterBaler.org
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  BetterBaler.org is an open-source, community-driven civic web platform built under the <strong>BetterGov PH</strong> initiative. Our mission is to make municipal government information, local permits, clearances, and emergency announcements easily accessible, readable, and transparent for all citizens of Baler.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Unlike traditional cluttered government sites, Better Baler uses modern web standards, clear navigation, and mobile-first responsive design so you can quickly find what you need—from renewing business permits to checking real-time surf and weather conditions.
                </p>
              </div>

              {/* History & Identity */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Compass className="h-5 w-5 text-amber-600" />
                  Historical & Cultural Heritage
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Founded in 1609 by Franciscan missionaries, Baler holds a unique place in Philippine history. It is best known historically for the <strong>Siege of Baler (1898–1899)</strong>, where a garrison of Spanish soldiers held out inside Baler Church for 337 days, recognized for their valor by President Emilio Aguinaldo in the historic Republic Day Decree.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Baler is also the birthplace of President Manuel Luis Quezon and First Lady Aurora Aragon-Quezon. Today, Sabang Beach in Baler is internationally celebrated as the <strong>Birthplace of Philippine Surfing</strong>.
                </p>
              </div>

              {/* 13 Barangays Grid */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                  The 13 Barangays of Baler
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {barangays.map((brgy, idx) => (
                    <div
                      key={brgy}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-700 text-xs font-semibold flex items-center gap-2"
                    >
                      <span className="w-5 h-5 rounded-full bg-primary-100 text-primary-700 font-bold flex items-center justify-center text-[10px] shrink-0">
                        {idx + 1}
                      </span>
                      <span>{brgy}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Info Panel */}
            <div className="space-y-6">
              <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md border border-slate-800">
                <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                  LGU Contact Details
                </h3>
                <div className="space-y-4 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Municipal Hall Address</p>
                      <p className="text-slate-400">Poblacion, Baler, Aurora 3200 Philippines</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Office Hours</p>
                      <p className="text-slate-400">Monday – Friday: 8:00 AM – 5:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Phone className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">MDRRMO Emergency Hotline</p>
                      <p className="text-amber-300 font-bold">(042) 722-0000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Mail className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Official Email</p>
                      <p className="text-slate-400">info@baler.gov.ph</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 rounded-2xl p-6 border border-primary-200 text-primary-900">
                <h3 className="font-bold text-sm mb-2 flex items-center gap-1.5">
                  <Heart className="h-4 w-4 text-primary-600" />
                  Open Source & Civic Tech
                </h3>
                <p className="text-xs text-primary-800 leading-relaxed mb-4">
                  Better Baler is built with community contributions. Developers, writers, and designers can collaborate on GitHub to improve public access.
                </p>
                <a
                  href="https://bettergov.ph"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 hover:text-primary-800 underline"
                >
                  Visit BetterGov.ph <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
