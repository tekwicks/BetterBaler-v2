import { Link } from 'react-router';
import {
  Users,
  MapPin,
  Layers,
  BarChart3,
  ArrowRight,
  Sparkles,
  Compass,
  Landmark,
  GraduationCap,
  Sun,
} from 'lucide-react';
import LguSeal from '../ui/LguSeal';

export default function BalerAtAGlance() {
  const glanceStats = [
    {
      icon: Users,
      value: '43,785',
      label: 'Population',
      detail: '+2.10% Annual Growth (PSA 2020)',
    },
    {
      icon: MapPin,
      value: '92.55 km²',
      label: 'Land Area',
      detail: '473 residents / km² density',
    },
    {
      icon: Layers,
      value: '13',
      label: 'Barangays',
      detail: '4 Urban Poblacion • 9 Rural/Coastal',
    },
    {
      icon: GraduationCap,
      value: '98.6%',
      label: 'Literacy Rate',
      detail: 'Ages 10 & older (PSA benchmark)',
    },
  ];

  const highlights = [
    {
      icon: Landmark,
      title: 'Provincial Capital of Aurora',
      description:
        'Serving as the political, administrative, and commercial center of Aurora Province with complete LGU services.',
    },
    {
      icon: Sun,
      title: 'Birthplace of Philippine Surfing',
      description:
        'Home to world-renowned Sabang Beach, drawing over 250,000 domestic and international surfers annually.',
    },
    {
      icon: Compass,
      title: 'Rich Cultural & Historic Heritage',
      description:
        'Site of the historic Siege of Baler (1898–1899), birthplace of Pres. Manuel L. Quezon, and ancient coastal landmarks.',
    },
  ];

  return (
    <section className="py-10 md:py-14 bg-white border-b border-slate-200/80">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-800 text-xs font-bold mb-3">
              <Sparkles className="h-3.5 w-3.5 text-primary-600" />
              <span>Municipal Overview • Municipality of Baler</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
              <LguSeal size={36} className="shrink-0" />
              <span>Baler at a Glance</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
              Key demographic metrics, barangay distributions, and municipal highlights for the capital town of Aurora Province.
            </p>
          </div>

          {/* Direct CTA Link to Statistics */}
          <Link
            to="/statistics"
            className="inline-flex items-center justify-center gap-2.5 px-5 py-3 bg-[#0051ba] hover:bg-[#003d8d] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all shrink-0 group"
          >
            <BarChart3 className="h-4 w-4 text-amber-300" />
            <span>Explore Baler PSA Open Data & Statistics</span>
            <ArrowRight className="h-4 w-4 text-white group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {glanceStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-5 border border-slate-200/90 hover:border-primary-300 hover:bg-white transition-all shadow-xs"
              >
                <div className="flex items-center justify-between text-slate-500 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    {stat.label}
                  </span>
                  <div className="p-2 bg-primary-50 text-primary-700 rounded-xl">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[11px] text-slate-500 font-medium mt-1">
                  {stat.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/60 rounded-2xl p-5 border border-slate-200/80 hover:bg-white hover:border-primary-200 transition-all"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2.5 bg-[#0051ba] text-white rounded-xl shadow-xs">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Quick Link Strip */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900">Official Open Data Sources:</span>
            <span>Philippine Statistics Authority (PSA) 2020 CPH • LGU Baler Portal</span>
          </div>
          <Link
            to="/statistics"
            className="text-[#0051ba] hover:text-[#003d8d] font-bold flex items-center gap-1 hover:underline"
          >
            <span>View 13 Barangays Breakdown & Economic Data</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
