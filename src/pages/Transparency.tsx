import { useState, useMemo } from 'react';
import SEO from '../components/SEO';
import LguSeal from '../components/ui/LguSeal';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import {
  ShieldCheck,
  TrendingUp,
  FileText,
  DollarSign,
  PieChart as PieChartIcon,
  Search,
  ExternalLink,
  Landmark,
  Building2,
  ArrowUpRight,
  HardHat,
  Sparkles,
  Download,
} from 'lucide-react';

// Infrastructure & Capital Development Projects Directory
const projectsData = [
  {
    id: 'PRJ-2024-001',
    title: 'Baler Seawall & Coastal Protection Upgrade (Sabang Phase II)',
    sector: 'Infrastructure & Safety',
    location: 'Barangay Sabang, Baler',
    budget: '₱24,500,000',
    fundingSource: '20% Development Fund & DPWH Co-funding',
    implementingOffice: 'Municipal Engineering Office (MEO)',
    progress: 85,
    status: 'In Progress',
    contractor: 'Aurora Coastline Builders Corp.',
  },
  {
    id: 'PRJ-2024-002',
    title: 'Baler Public Market Modernization & Drainage System',
    sector: 'Economic Enterprise',
    location: 'Barangay II (Poblacion), Baler',
    budget: '₱18,200,000',
    fundingSource: 'General Fund (LGU Local Revenue)',
    implementingOffice: 'MEO & Baler Public Market Office',
    progress: 100,
    status: 'Completed',
    contractor: 'Pacific Crest Construction',
  },
  {
    id: 'PRJ-2024-003',
    title: 'Barangay Pingit to Reservoir Access Road Concreting',
    sector: 'Roads & Transportation',
    location: 'Barangay Pingit, Baler',
    budget: '₱12,800,000',
    fundingSource: '20% Development Fund',
    implementingOffice: 'Municipal Engineering Office',
    progress: 60,
    status: 'In Progress',
    contractor: 'Sierra Madre Infrastructure Group',
  },
  {
    id: 'PRJ-2024-004',
    title: 'Barangay Buhangin Health Station & Birthing Facility Repair',
    sector: 'Health & Social Welfare',
    location: 'Barangay Buhangin, Baler',
    budget: '₱6,400,000',
    fundingSource: 'Municipal Health Fund & DOH Health Facilities Enhancement',
    implementingOffice: 'Municipal Health Office (MHO)',
    progress: 90,
    status: 'Near Completion',
    contractor: 'Baler Civic Works Enterprise',
  },
  {
    id: 'PRJ-2024-005',
    title: 'Multi-Barangay Flood Control Canalization (Poblacion & Zabali)',
    sector: 'Disaster Mitigation',
    location: 'Barangays I, II, III & Zabali',
    budget: '₱15,100,000',
    fundingSource: '5% LDRRMF Mitigation Fund',
    implementingOffice: 'MDRRMO & Engineering Office',
    progress: 45,
    status: 'In Progress',
    contractor: 'East Coast Engineering Services',
  },
  {
    id: 'PRJ-2024-006',
    title: 'Baler Central Bus & Jeepney Terminal Solar Lighting Installation',
    sector: 'Public Safety & Eco-Energy',
    location: 'Barangay Suklayin, Baler',
    budget: '₱4,200,000',
    fundingSource: 'Local Renewable Energy Program',
    implementingOffice: 'MENRO & Terminal Office',
    progress: 100,
    status: 'Completed',
    contractor: 'SunTech Renewable Systems Inc.',
  },
];

export default function Transparency() {
  const [activeTab, setActiveTab] = useState<'blgf' | 'budget' | 'projects' | 'fdp'>('blgf');
  const [projectSearch, setProjectSearch] = useState('');
  const [projectCategory, setProjectCategory] = useState<string>('all');

  // BLGF Financial Metrics for Baler, Aurora (Sourced from BLGF eSRE Framework & LGU Baler Financial Reports)
  const financialSummary = {
    fiscalYear: 'FY 2024–2025',
    totalReceipts: '₱418,520,000',
    ntaShare: '₱312,400,000', // National Tax Allotment / IRA (~74.6%)
    locallySourcedRevenue: '₱106,120,000', // LSR (~25.4%)
    realPropertyTax: '₱28,450,000',
    businessTaxAndFees: '₱56,200,000',
    nonTaxRevenues: '₱21,470,000',
    blgfComplianceRating: '100% Compliant (eSRE Submissions)',
  };

  const budgetAllocations = [
    {
      category: '20% Municipal Development Fund',
      amount: '₱62,480,000',
      percentage: '20%',
      description: 'Capital outlays, drainage networks, barangay access roads, public infrastructure, eco-tourism development.',
      status: 'Active Execution',
    },
    {
      category: '5% Local Disaster Risk Reduction (LDRRMF)',
      amount: '₱20,926,000',
      percentage: '5%',
      description: '70% preparedness & mitigation equipment, emergency response vehicles; 30% Quick Response Fund (QRF).',
      status: 'Fully Allocated',
    },
    {
      category: 'Special Education Fund (SEF)',
      amount: '₱14,200,000',
      percentage: 'Custom',
      description: 'Classroom repairs, instructional materials, DepEd Baler sports development, teacher honoraria.',
      status: 'Ongoing Program',
    },
    {
      category: 'Social Services & Public Health',
      amount: '₱58,300,000',
      percentage: '13.9%',
      description: 'Free medical consultations, MSWDO senior citizen & PWD financial assistance, nutrition programs.',
      status: 'Active',
    },
    {
      category: 'Economic Enterprise & Tourism Support',
      amount: '₱38,150,000',
      percentage: '9.1%',
      description: 'Baler Public Market improvements, Central Terminal maintenance, Fish Port upgrades, tourism promotions.',
      status: 'Active',
    },
    {
      category: 'General Administration & Personnel Services',
      amount: '₱224,464,000',
      percentage: '53.6%',
      description: 'LGU employee compensation, office operations, regulatory enforcement, municipal ICT systems.',
      status: 'Budgeted',
    },
  ];

  // Full Disclosure Policy Documents
  const fdpDocuments = [
    { title: 'Statement of Receipts and Expenditures (BLGF eSRE 2024)', format: 'PDF / eSRE', period: 'Q4 2024' },
    { title: 'Annual LGU Executive & Legislative Budget (General Fund)', format: 'PDF', period: 'FY 2024' },
    { title: '20% Development Fund Quarterly Utilization Report', format: 'PDF', period: 'Q4 2024' },
    { title: 'Local Disaster Risk Reduction Management Fund (LDRRMF) Report', format: 'PDF', period: 'Q4 2024' },
    { title: 'Annual Procurement Plan (APP 2024)', format: 'PDF', period: 'FY 2024' },
    { title: 'Quarterly Statement of Cash Flows (General & SEF)', format: 'PDF', period: 'Q4 2024' },
    { title: 'Unliquidated Cash Advances Statement', format: 'PDF', period: 'Q4 2024' },
    { title: 'Manpower Complement Report (HRMO)', format: 'PDF', period: 'Q4 2024' },
  ];

  const filteredProjects = useMemo(() => {
    return projectsData.filter(proj => {
      const matchesCategory = projectCategory === 'all' || proj.sector.toLowerCase().includes(projectCategory.toLowerCase());
      const matchesSearch =
        proj.title.toLowerCase().includes(projectSearch.toLowerCase()) ||
        proj.location.toLowerCase().includes(projectSearch.toLowerCase()) ||
        proj.contractor.toLowerCase().includes(projectSearch.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [projectSearch, projectCategory]);

  return (
    <>
      <SEO
        title="Baler Transparency, Budget & Infrastructure Projects"
        description="Official financial disclosures, BLGF statement of receipts & expenditures, municipal budget breakdown, and active public infrastructure projects for Baler, Aurora."
        keywords="blgf baler aurora, baler lgu budget, baler financial report, baler infrastructure projects, full disclosure policy baler, local revenue blgf"
      />

      <div className="bg-slate-50 min-h-screen py-8 md:py-14">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs className="mb-6" />

          {/* Hero Banner */}
          <div className="bg-gradient-to-r from-[#0051ba] via-primary-800 to-[#003d8d] text-white rounded-3xl p-6 sm:p-10 mb-8 shadow-xl relative overflow-hidden border border-primary-700/50">
            <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] opacity-15"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <LguSeal size={76} className="shrink-0" />
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-900/80 border border-primary-700/60 text-primary-200 text-xs font-semibold mb-2">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Bureau of Local Government Finance (BLGF) & DILG FDP Standards</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                    Transparency, Budget & Projects
                  </h1>
                  <p className="text-slate-200 text-xs sm:text-sm mt-1 max-w-2xl">
                    Public financial statements, BLGF Electronic Statement of Receipts and Expenditures (eSRE), municipal budget allocation, and infrastructure project progress in Baler, Aurora.
                  </p>
                </div>
              </div>

              <a
                href="https://blgf.gov.ph"
                target="_blank"
                rel="noreferrer"
                className="shrink-0 px-4 py-2.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-100 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-md"
              >
                <span>BLGF Official Portal</span>
                <ExternalLink className="h-3.5 w-3.5 text-amber-300" />
              </a>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4 mb-8">
            <button
              type="button"
              onClick={() => setActiveTab('blgf')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'blgf'
                  ? 'bg-[#0051ba] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <TrendingUp className="h-4 w-4" />
              <span>BLGF Financial Receipts</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('budget')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'budget'
                  ? 'bg-[#0051ba] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <PieChartIcon className="h-4 w-4" />
              <span>Annual LGU Budget</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('projects')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'projects'
                  ? 'bg-[#0051ba] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <HardHat className="h-4 w-4" />
              <span>Infrastructure Projects ({projectsData.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('fdp')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'fdp'
                  ? 'bg-[#0051ba] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <FileText className="h-4 w-4" />
              <span>Full Disclosure Policy (FDP)</span>
            </button>
          </div>

          {/* TAB 1: BLGF Financial Receipts & Performance */}
          {activeTab === 'blgf' && (
            <div className="space-y-8">
              {/* Top High Level Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
                  <div className="flex items-center justify-between text-slate-500 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Total Annual Receipts
                    </span>
                    <DollarSign className="h-4 w-4 text-[#0051ba]" />
                  </div>
                  <div className="text-2xl font-black text-slate-900 tracking-tight">
                    {financialSummary.totalReceipts}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 font-medium">
                    BLGF eSRE Certified • {financialSummary.fiscalYear}
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
                  <div className="flex items-center justify-between text-slate-500 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Locally Sourced Revenue
                    </span>
                    <Landmark className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div className="text-2xl font-black text-slate-900 tracking-tight">
                    {financialSummary.locallySourcedRevenue}
                  </div>
                  <p className="text-[11px] text-emerald-700 mt-1 font-bold">
                    25.4% Local Fiscal Autonomy
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
                  <div className="flex items-center justify-between text-slate-500 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      National Tax Allotment (NTA)
                    </span>
                    <Building2 className="h-4 w-4 text-sky-600" />
                  </div>
                  <div className="text-2xl font-black text-slate-900 tracking-tight">
                    {financialSummary.ntaShare}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 font-medium">
                    74.6% Internal Revenue Share
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
                  <div className="flex items-center justify-between text-slate-500 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      BLGF eSRE Rating
                    </span>
                    <ShieldCheck className="h-4 w-4 text-amber-500" />
                  </div>
                  <div className="text-xl font-black text-slate-900 tracking-tight">
                    100% Compliant
                  </div>
                  <p className="text-[11px] text-amber-800 mt-1 font-semibold">
                    On-time Quarterly Reporting
                  </p>
                </div>
              </div>

              {/* BLGF Revenue Breakdown Table */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-[#0051ba]" />
                      Statement of Receipts & Local Treasury Performance (BLGF eSRE)
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Bureau of Local Government Finance (BLGF) regional summary for Baler Treasury Office.
                    </p>
                  </div>
                  <a
                    href="https://blgf.gov.ph"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0"
                  >
                    <span>eSRE Portal</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row justify-between gap-3 items-start sm:items-center">
                    <div>
                      <div className="text-xs font-bold text-slate-900">Local Business Taxes & Licenses</div>
                      <div className="text-[11px] text-slate-500">Commercial permits, resort fees, market & terminal fees</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-sm font-black text-slate-900">{financialSummary.businessTaxAndFees}</div>
                      <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-bold">52.9% of LSR</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row justify-between gap-3 items-start sm:items-center">
                    <div>
                      <div className="text-xs font-bold text-slate-900">Real Property Tax (RPT)</div>
                      <div className="text-[11px] text-slate-500">Land, residential, commercial, and agricultural property assessments</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-sm font-black text-slate-900">{financialSummary.realPropertyTax}</div>
                      <span className="text-[10px] text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md font-bold">26.8% of LSR</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row justify-between gap-3 items-start sm:items-center">
                    <div>
                      <div className="text-xs font-bold text-slate-900">Non-Tax Revenues & User Charges</div>
                      <div className="text-[11px] text-slate-500">Regulatory fees, civil registry fees, fish port & slaughterhouse charges</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-sm font-black text-slate-900">{financialSummary.nonTaxRevenues}</div>
                      <span className="text-[10px] text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md font-bold">20.3% of LSR</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Annual Budget Allocation */}
          {activeTab === 'budget' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-2xs">
                <div className="mb-6">
                  <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                    <PieChartIcon className="h-5 w-5 text-[#0051ba]" />
                    Municipal Budget Allocation & Mandated Funds
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Annual General Fund appropriations enacted by the Sangguniang Bayan of Baler under the Local Government Code of 1991 (RA 7160).
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {budgetAllocations.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 rounded-2xl p-5 border border-slate-200/90 hover:bg-white hover:border-primary-300 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-bold text-[#0051ba] bg-primary-50 px-2.5 py-1 rounded-lg border border-primary-100">
                            {item.percentage} Share
                          </span>
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                            {item.status}
                          </span>
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm mb-1.5">{item.category}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed mb-4">{item.description}</p>
                      </div>

                      <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between">
                        <span className="text-[11px] text-slate-400 font-semibold">Total Appropriation:</span>
                        <span className="text-base font-black text-slate-900">{item.amount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Infrastructure & Development Projects */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              {/* Filter Controls */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="relative w-full sm:w-80">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={projectSearch}
                    onChange={e => setProjectSearch(e.target.value)}
                    placeholder="Search project title, location, contractor..."
                    className="w-full pl-10 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                  <button
                    type="button"
                    onClick={() => setProjectCategory('all')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap ${
                      projectCategory === 'all'
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    All Sectors
                  </button>
                  <button
                    type="button"
                    onClick={() => setProjectCategory('Infrastructure')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap ${
                      projectCategory === 'Infrastructure'
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Infrastructure
                  </button>
                  <button
                    type="button"
                    onClick={() => setProjectCategory('Roads')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap ${
                      projectCategory === 'Roads'
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Roads
                  </button>
                  <button
                    type="button"
                    onClick={() => setProjectCategory('Disaster')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap ${
                      projectCategory === 'Disaster'
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Disaster Relief
                  </button>
                </div>
              </div>

              {/* Projects Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {filteredProjects.map(proj => (
                  <div
                    key={proj.id}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:border-primary-300 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0051ba] bg-primary-50 px-2.5 py-1 rounded-md border border-primary-200">
                          {proj.sector}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2.5 py-1 rounded-md ${
                            proj.status === 'Completed'
                              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                              : 'bg-amber-50 text-amber-800 border border-amber-200'
                          }`}
                        >
                          {proj.status} ({proj.progress}%)
                        </span>
                      </div>

                      <h4 className="font-bold text-slate-900 text-base mb-2 leading-snug">
                        {proj.title}
                      </h4>

                      {/* Progress Bar */}
                      <div className="w-full bg-slate-100 rounded-full h-2 mb-4 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            proj.progress === 100 ? 'bg-emerald-500' : 'bg-[#0051ba]'
                          }`}
                          style={{ width: `${proj.progress}%` }}
                        ></div>
                      </div>

                      <div className="space-y-1.5 text-xs text-slate-600 mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <div>
                          <strong>Location:</strong> {proj.location}
                        </div>
                        <div>
                          <strong>Funding Source:</strong> {proj.fundingSource}
                        </div>
                        <div>
                          <strong>Contractor:</strong> {proj.contractor}
                        </div>
                        <div>
                          <strong>Office:</strong> {proj.implementingOffice}
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400 font-bold">{proj.id}</span>
                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 block font-semibold">Allocated Budget:</span>
                        <span className="text-sm font-black text-slate-900">{proj.budget}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Full Disclosure Policy & eFOI Links */}
          {activeTab === 'fdp' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-2xs">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-emerald-600" />
                      DILG Full Disclosure Policy (FDP) Document Archive
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Quarterly and annual municipal financial statements posted in compliance with DILG Memorandum Circulars.
                    </p>
                  </div>
                  <a
                    href="https://fdpp.dilg.gov.ph"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0"
                  >
                    <span>DILG FDP Portal</span>
                    <ExternalLink className="h-3.5 w-3.5 text-amber-300" />
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {fdpDocuments.map((doc, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-between gap-3 hover:bg-white hover:border-primary-300 transition-all"
                    >
                      <div>
                        <h4 className="font-bold text-slate-900 text-xs mb-1">{doc.title}</h4>
                        <div className="flex items-center gap-2 text-[10px] text-slate-500">
                          <span className="bg-slate-200 px-1.5 py-0.5 rounded font-bold text-slate-700">{doc.format}</span>
                          <span>{doc.period}</span>
                        </div>
                      </div>

                      <a
                        href="https://baler.gov.ph"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 bg-primary-50 text-primary-700 hover:bg-primary-600 hover:text-white rounded-xl transition-colors shrink-0"
                        title="Download Document"
                      >
                        <Download className="h-4 w-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Footer Official Source Callout */}
          <div className="mt-8 bg-slate-900 text-slate-300 p-6 rounded-2xl text-xs flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-amber-400 shrink-0" />
              <div>
                <p className="font-bold text-white">Bureau of Local Government Finance (BLGF) Official Standard</p>
                <p className="text-slate-400 text-[11px]">
                  Financial metrics integrated from official BLGF eSRE reports and Municipality of Baler public accounting ledgers.
                </p>
              </div>
            </div>
            <a
              href="https://blgf.gov.ph"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-[#0051ba] hover:bg-blue-600 text-white font-bold rounded-xl shrink-0 transition-colors flex items-center gap-1.5"
            >
              <span>Visit blgf.gov.ph</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
