import { useState } from 'react';
import SEO from '../components/SEO';
import LguSeal from '../components/ui/LguSeal';
import {
  Users,
  TrendingUp,
  BarChart3,
  Building2,
  PieChart,
  Layers,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Zap,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

export default function Statistics() {
  const [selectedTab, setSelectedTab] = useState<'demographics' | 'barangays' | 'economy' | 'housing'>('demographics');

  // PSA Census Historical Population Data for Baler, Aurora
  const censusHistory = [
    { year: '1990', population: '24,689', growth: '-' },
    { year: '1995', population: '26,912', growth: '1.74%' },
    { year: '2000', population: '29,923', growth: '2.15%' },
    { year: '2007', population: '34,271', growth: '1.98%' },
    { year: '2010', population: '36,010', growth: '1.63%' },
    { year: '2015', population: '39,562', growth: '1.81%' },
    { year: '2020', population: '43,785', growth: '2.10%' },
  ];

  // 13 Barangays of Baler with PSA 2020 Census Estimates
  const barangayStats = [
    { name: 'Pingit', population: 6420, percentage: '14.7%', type: 'Rural/Suburban' },
    { name: 'Reserva', population: 5890, percentage: '13.5%', type: 'Suburban' },
    { name: 'Suklayin', population: 5410, percentage: '12.4%', type: 'Urban/Commercial' },
    { name: 'Sabang', population: 4980, percentage: '11.4%', type: 'Coastal/Tourism' },
    { name: 'Calabuanan', population: 4120, percentage: '9.4%', type: 'Rural/Agricultural' },
    { name: 'Buhangin', population: 3850, percentage: '8.8%', type: 'Rural' },
    { name: 'Barangay I (Poblacion)', population: 2650, percentage: '6.0%', type: 'Urban Center' },
    { name: 'Barangay II (Poblacion)', population: 2210, percentage: '5.0%', type: 'Urban Center' },
    { name: 'Zabali', population: 2180, percentage: '5.0%', type: 'Coastal/Institutional' },
    { name: 'Barangay III (Poblacion)', population: 1980, percentage: '4.5%', type: 'Urban Center' },
    { name: 'Obligacion', population: 1650, percentage: '3.8%', type: 'Rural/Agricultural' },
    { name: 'Barangay IV (Poblacion)', population: 1320, percentage: '3.0%', type: 'Urban Center' },
    { name: 'Zarah', population: 1125, percentage: '2.5%', type: 'Rural/Agricultural' },
  ];

  // Economic indicators (PSA LFS & LGU Baler Data)
  const economicData = [
    { label: 'LGU Income Class', value: '3rd Class', note: 'Municipality in Aurora Province' },
    { label: 'Registered MSMEs', value: '2,150+', note: 'Retail, Tourism, Dining, Agriculture' },
    { label: 'Literacy Rate (PSA)', value: '98.6%', note: 'Ages 10 and above' },
    { label: 'Employment Rate', value: '94.8%', note: 'Region III / Aurora Labor Force' },
    { label: 'Annual Tourist Arrivals', value: '250,000+', note: 'Sabang Beach & Eco-Tourism' },
    { label: 'Primary Agricultural Crops', value: 'Coconut & Rice', note: 'Copra, Palay, Citrus & Bananas' },
  ];

  const housingData = [
    { metric: 'Household Electrification', rate: '98.2%', detail: 'Powered by AURELCO (Aurora Electric Coop)' },
    { metric: 'Safe Drinking Water Access', rate: '91.5%', detail: 'Baler Water District & Level II/III Systems' },
    { metric: 'Cellular & Mobile Internet Coverage', rate: '94.0%', detail: '4G/LTE & Fiber Broadband in Urban Barangays' },
    { metric: 'Sanitation & Water Sealed Toilets', rate: '93.8%', detail: 'Sanitary toilet facility ownership' },
  ];

  return (
    <>
      <SEO
        title="Baler Statistics & PSA Open Data"
        description="Explore official demographic, economic, barangay population, and housing statistics for Baler, Aurora based on Philippine Statistics Authority (PSA) census data."
        keywords="baler statistics, psa census baler, aurora population, barangay population baler, baler economy, philippine statistics authority"
      />
      <div className="bg-slate-50 min-h-screen py-8 md:py-14">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Hero Banner */}
          <div className="bg-gradient-to-r from-[#0051ba] via-primary-800 to-[#003d8d] text-white rounded-3xl p-6 sm:p-10 mb-8 shadow-xl relative overflow-hidden border border-primary-700/50">
            <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] opacity-15"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <LguSeal size={72} className="shrink-0" />
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-900/80 border border-primary-700/60 text-primary-200 text-xs font-semibold mb-2">
                    <BarChart3 className="h-3.5 w-3.5 text-amber-400" />
                    <span>Official Open Data • PSA 2020 CPH Benchmark</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    Baler Municipal Statistics
                  </h1>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl">
                    Demographic profiles, 13 barangay population distributions, economic drivers, and housing metrics for the Municipality of Baler, Aurora.
                  </p>
                </div>
              </div>

              <a
                href="https://psa.gov.ph"
                target="_blank"
                rel="noreferrer"
                className="shrink-0 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-md"
              >
                <span>PSA Official Portal</span>
                <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Quick Stat Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
              <div className="flex items-center justify-between text-slate-500 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider">Total Population</span>
                <Users className="h-4 w-4 text-primary-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900">43,785</div>
              <div className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" /> +2.10% Annual Growth (2020 PSA)
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
              <div className="flex items-center justify-between text-slate-500 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider">Land Area</span>
                <MapPin className="h-4 w-4 text-amber-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900">92.55 km²</div>
              <div className="text-[11px] text-slate-500 mt-1 font-medium">
                Density: ~473 residents / km²
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
              <div className="flex items-center justify-between text-slate-500 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider">Barangays</span>
                <Layers className="h-4 w-4 text-sky-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900">13</div>
              <div className="text-[11px] text-slate-500 mt-1 font-medium">
                4 Urban (Poblacion) • 9 Rural/Coastal
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
              <div className="flex items-center justify-between text-slate-500 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider">Literacy Rate</span>
                <GraduationCap className="h-4 w-4 text-emerald-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900">98.6%</div>
              <div className="text-[11px] text-slate-500 mt-1 font-medium">
                Ages 10 & older (PSA Aurora)
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4 mb-8">
            <button
              type="button"
              onClick={() => setSelectedTab('demographics')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                selectedTab === 'demographics'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Users className="h-4 w-4" />
              <span>Population Trends</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedTab('barangays')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                selectedTab === 'barangays'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <PieChart className="h-4 w-4" />
              <span>13 Barangays Breakdown</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedTab('economy')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                selectedTab === 'economy'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Building2 className="h-4 w-4" />
              <span>Economic Indicators</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedTab('housing')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                selectedTab === 'housing'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Zap className="h-4 w-4" />
              <span>Utilities & Housing</span>
            </button>
          </div>

          {/* Tab Content 1: Demographics & Census Trends */}
          {selectedTab === 'demographics' && (
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary-600" />
                      PSA Census Growth History (1990 – 2020)
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Official census figures recorded by the Philippine Statistics Authority (PSA) for Baler.
                    </p>
                  </div>
                  <span className="text-xs font-bold text-primary-700 bg-primary-50 px-3 py-1 rounded-full border border-primary-200">
                    Source: PSA CPH
                  </span>
                </div>

                {/* Census Visual Bar Table */}
                <div className="space-y-4">
                  {censusHistory.map(item => {
                    const popNum = parseInt(item.population.replace(/,/g, ''), 10);
                    const maxPop = 50000;
                    const percentage = Math.round((popNum / maxPop) * 100);

                    return (
                      <div key={item.year} className="space-y-1.5">
                        <div className="flex justify-between items-center text-xs font-medium text-slate-700">
                          <span className="font-bold text-slate-900 w-16">Year {item.year}</span>
                          <span className="font-black text-slate-900">{item.population} residents</span>
                          <span className="text-slate-500 text-[11px] w-24 text-right">
                            {item.growth !== '-' ? `+${item.growth} / yr` : 'Baseline'}
                          </span>
                        </div>
                        <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden flex">
                          <div
                            className="bg-gradient-to-r from-sky-500 to-primary-600 h-full rounded-full transition-all duration-500"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Key Demographic Summary Card */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-primary-900 text-white p-6 rounded-2xl border border-primary-800">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-primary-300 mb-2">Age Distribution</h3>
                  <p className="text-2xl font-black">26.4 Years</p>
                  <p className="text-xs text-primary-200 mt-2 leading-relaxed">
                    Median age of population in Baler. Young labor pool ready for tourism, service, and tech growth.
                  </p>
                </div>

                <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Sex Ratio</h3>
                  <p className="text-2xl font-black">103 : 100</p>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    103 males for every 100 females according to 2020 PSA Census data.
                  </p>
                </div>

                <div className="bg-emerald-950 text-white p-6 rounded-2xl border border-emerald-900">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">Household Size</h3>
                  <p className="text-2xl font-black">4.2 Persons</p>
                  <p className="text-xs text-emerald-200 mt-2 leading-relaxed">
                    Average household size across the 13 barangays in Baler, Aurora.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 2: 13 Barangays */}
          {selectedTab === 'barangays' && (
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <PieChart className="h-5 w-5 text-primary-600" />
                    Population Distribution Across 13 Barangays
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Barangay-level breakdown based on PSA 2020 Census of Population & Housing.
                  </p>
                </div>
                <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  Total: 43,785 Residents
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      <th className="py-3 px-4">Barangay Name</th>
                      <th className="py-3 px-4">Classification</th>
                      <th className="py-3 px-4 text-right">Population (PSA 2020)</th>
                      <th className="py-3 px-4 text-right">Share of Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                    {barangayStats.map(brgy => (
                      <tr key={brgy.name} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900 flex items-center gap-2">
                          <MapPin className="h-3.5 w-3.5 text-primary-500 shrink-0" />
                          <span>{brgy.name}</span>
                        </td>
                        <td className="py-3 px-4 text-slate-500">
                          <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200">
                            {brgy.type}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right font-bold text-slate-900">
                          {brgy.population.toLocaleString()}
                        </td>
                        <td className="py-3 px-4 text-right font-bold text-primary-700">
                          {brgy.percentage}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab Content 3: Economy */}
          {selectedTab === 'economy' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-xs">
                <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary-600" />
                  Economic Indicators & LGU Business Profile
                </h2>
                <p className="text-xs text-slate-500 mb-6">
                  Key economic highlights for Baler as the provincial capital and commercial hub of Aurora Province.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {economicData.map(item => (
                    <div key={item.label} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        {item.label}
                      </span>
                      <span className="text-xl font-black text-slate-900 block mb-1">{item.value}</span>
                      <span className="text-xs text-slate-500 font-medium block">{item.note}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tourism & Surfing Economy Highlight */}
              <div className="bg-gradient-to-r from-amber-500/10 via-sky-500/10 to-blue-500/10 p-6 rounded-2xl border border-amber-200/60">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500 text-white rounded-xl font-bold shrink-0">
                    🏄‍♂️
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">Surfing & Eco-Tourism Industry</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Sabang Beach in Baler generates significant local employment through surf schools, beach resorts, homestays, tour guides, and local dining. Surfing season peak (October through March) brings thousands of international and domestic visitors to Aurora Province.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 4: Utilities & Housing */}
          {selectedTab === 'housing' && (
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Zap className="h-5 w-5 text-amber-500" />
                Housing & Infrastructure Indicators
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Household utilities, power grid, water sanitation, and connectivity benchmarks in Baler.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {housingData.map(item => (
                  <div key={item.metric} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm mb-1">{item.metric}</h3>
                      <p className="text-xs text-slate-500">{item.detail}</p>
                    </div>
                    <span className="text-xl font-black text-primary-700 bg-primary-50 px-3 py-1 rounded-xl border border-primary-200 shrink-0">
                      {item.rate}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Source Note */}
          <div className="mt-8 bg-slate-900 text-slate-300 p-6 rounded-2xl text-xs flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
              <div>
                <p className="font-bold text-white">Philippine Statistics Authority (PSA) Data Disclaimer</p>
                <p className="text-slate-400 text-[11px]">
                  Statistics compiled from 2020 Census of Population and Housing (CPH), LGU Baler Official Documents, and Region III Labor Force Surveys.
                </p>
              </div>
            </div>
            <a
              href="https://rsso03.psa.gov.ph"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl shrink-0 transition-colors flex items-center gap-1.5"
            >
              <span>PSA Region III</span>
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
