import { useState, useMemo, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router';
import SEO from '../components/SEO';
import LguSeal from '../components/ui/LguSeal';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import {
  Building2,
  Users,
  Award,
  Search,
  ExternalLink,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  FileText,
  Landmark,
  UserCheck,
  ChevronRight,
  Briefcase,
  Layers,
  Sparkles,
} from 'lucide-react';

export default function Government() {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') || category || 'departments';

  const [activeTab, setActiveTab] = useState<string>(
    ['departments', 'executive', 'legislative', 'transparency'].includes(initialTab)
      ? initialTab
      : 'departments'
  );

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (category && ['departments', 'executive', 'legislative', 'transparency'].includes(category)) {
      setActiveTab(prev => (prev !== category ? category : prev));
    }
  }, [category]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  // Official Baler LGU Officials Data
  const executiveLeadership = [
    {
      role: 'Municipal Mayor',
      name: 'Hon. Rhett Ronan T. Angara',
      office: 'Office of the Municipal Mayor',
      description:
        'Chief Executive Officer of Baler, Aurora. Directs municipal policies, administrative operations, public works, and local development programs.',
      badge: 'Executive Head',
      contact: 'info@baler.gov.ph',
    },
    {
      role: 'Municipal Vice Mayor',
      name: 'Hon. Denise Alyanna D. Angara',
      office: 'Office of the Vice Mayor / Sangguniang Bayan',
      description:
        'Presiding Officer of the Sangguniang Bayan of Baler. President of the Vice Mayors League of the Philippines (VMLP) Aurora Chapter.',
      badge: 'Legislative Head',
      contact: 'vicemayor@baler.gov.ph',
    },
    {
      role: 'Municipal Administrator',
      name: 'Mr. Vincent Paladio',
      office: 'Office of the Municipal Administrator',
      description:
        'Manages administrative workflows, inter-departmental coordination, and operational execution across all LGU offices.',
      badge: 'Administration',
      contact: 'admin@baler.gov.ph',
    },
  ];

  const councilors = [
    { name: 'Hon. Nikki M. Nicolas', title: 'Municipal Councilor', role: 'Sangguniang Bayan Member' },
    { name: 'Hon. Edrik Louie O. Etcubañez', title: 'Municipal Councilor', role: 'Sangguniang Bayan Member' },
    { name: 'Hon. Ellah Cherryl G. Villacorte', title: 'Municipal Councilor', role: 'Sangguniang Bayan Member' },
    { name: 'Hon. Venancio Aris A. Egargue', title: 'Municipal Councilor', role: 'Sangguniang Bayan Member' },
    { name: 'Hon. Danilo M. Ong', title: 'Municipal Councilor', role: 'Sangguniang Bayan Member' },
    { name: 'Hon. Julius Ceazar D. Grefalda', title: 'Municipal Councilor', role: 'Sangguniang Bayan Member' },
    { name: 'Hon. Pedro Fernando D. Valenzuela', title: 'Municipal Councilor', role: 'Sangguniang Bayan Member' },
    { name: 'Hon. Rolando C. Lelis', title: 'Municipal Councilor', role: 'Sangguniang Bayan Member' },
  ];

  const exOfficioMembers = [
    { name: 'Hon. Eunie May Fernando', title: 'Ex-Officio Member', role: 'Sangguniang Kabataan Municipal Federation (SKMF) President' },
    { name: 'Hon. David P. Orolfo, Jr.', title: 'Ex-Officio Member', role: 'Liga ng mga Barangay (LNB) President' },
    { name: 'Hon. Concepcion P. Buencamino', title: 'Ex-Officio Member', role: 'Indigenous Peoples Mandatory Representative (IPMR)' },
  ];

  // Official Directory of Municipal Departments & Heads (baler.gov.ph)
  const departmentsDirectory = [
    { office: 'Municipal Planning & Development Office (MPDO)', head: 'Engr. Manuel Q. Hernandez', tag: 'Planning & Infrastructure' },
    { office: 'Municipal Engineering Office (MEO)', head: 'Engr. Sofronio Raul A. Egargue', tag: 'Public Works' },
    { office: 'Municipal Treasury Office (MTO)', head: 'Ms. Sumilang R. Villaflor', tag: 'Finance & Tax' },
    { office: 'Municipal Accounting Office (MAO)', head: 'Acct. Gemma B. Villareal', tag: 'Financial Records' },
    { office: 'Municipal Budget Office (MBO)', head: 'Ms. Curie S. Bernardino', tag: 'Fiscal Management' },
    { office: 'Municipal Health Office (MHO)', head: 'Dr. Mael M. Cautivar', tag: 'Health & Medical' },
    { office: 'Municipal Social Welfare & Development (MSWDO)', head: 'Ms. Corazon T. Virrey', tag: 'Social Services' },
    { office: 'Municipal Agriculture Office (OIC)', head: 'Mr. Ronnie L. Mata', tag: 'Agriculture & Agri-fisheries' },
    { office: 'Municipal Environment & Natural Resources (MENRO)', head: 'Ms. Ma. Liza V. Costa', tag: 'Environment' },
    { office: 'Municipal Tourism Office', head: 'Ms. Riza P. Del Rosario', tag: 'Tourism & Culture' },
    { office: 'Disaster Risk Reduction & Management Office (MDRRMO)', head: 'Mr. Arturo A. Molina Jr.', tag: 'Safety & Emergency' },
    { office: 'Human Resource Management Office (HRMO)', head: 'Ms. Evelyn R. Leander', tag: 'Human Resources' },
    { office: 'Public Employment Services Office (PESO)', head: 'Ms. Maricris D. Sison', tag: 'Jobs & Employment' },
    { office: 'Municipal Civil Registrar (OIC)', head: 'Ms. Joyce V. Constantino', tag: 'Civil Registration' },
    { office: 'Business Permit & Licensing Office (BPLO)', head: 'Ms. Mary Jane A. Dumpit', tag: 'Business Licensing' },
    { office: 'Municipal Assessor Office (OIC)', head: 'Mr. Richard F. Rutaquio', tag: 'Property Assessment' },
    { office: 'Municipal Library', head: 'Ms. Rhodora M. Bernalte', tag: 'Education & Archives' },
    { office: 'Secretary to the Sangguniang Bayan', head: 'Mr. Israel N. Galban', tag: 'Legislative Secretariat' },
    { office: 'Local Regional Resources Economic Division', head: 'Ms. Glenda P. Dumapay', tag: 'Economic Development' },
    { office: 'Baler Central Terminal', head: 'Mr. Buenaventura Roque', tag: 'Economic Enterprise' },
    { office: 'Baler Public Market', head: 'Mr. Irwin Lombres', tag: 'Economic Enterprise' },
    { office: 'Baler Municipal Fish Port', head: 'Mr. Deogenes D. Villareal', tag: 'Economic Enterprise' },
    { office: 'Baler Municipal Slaughterhouse', head: 'Mr. Donn Issel B. Laroza', tag: 'Economic Enterprise' },
  ];

  const filteredDepartments = useMemo(() => {
    if (!searchQuery.trim()) return departmentsDirectory;
    const query = searchQuery.toLowerCase();
    return departmentsDirectory.filter(
      item =>
        item.office.toLowerCase().includes(query) ||
        item.head.toLowerCase().includes(query) ||
        item.tag.toLowerCase().includes(query)
    );
  }, [searchQuery, departmentsDirectory]);

  return (
    <>
      <SEO
        title="Baler Government Directory & Officials"
        description="Official LGU structure, Municipal Officials, Department Heads, and Office Directory for the Municipality of Baler, Aurora based on baler.gov.ph data."
        keywords="baler government, baler mayor rhett angara, baler vice mayor denise angara, sangguniang bayan baler, baler lgu directory, baler department heads"
      />

      <div className="bg-slate-50 min-h-screen py-8 md:py-14">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs className="mb-6" />

          {/* Hero Banner Header */}
          <div className="bg-gradient-to-r from-[#0051ba] via-primary-800 to-[#003d8d] text-white rounded-3xl p-6 sm:p-10 mb-8 shadow-xl relative overflow-hidden border border-primary-700/50">
            <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] opacity-15"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <LguSeal size={76} className="shrink-0" />
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-900/80 border border-primary-700/60 text-primary-200 text-xs font-semibold mb-2">
                    <Landmark className="h-3.5 w-3.5 text-amber-300" />
                    <span>Provincial Capital • Municipality of Baler, Aurora</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                    Government Structure & Offices
                  </h1>
                  <p className="text-slate-200 text-xs sm:text-sm mt-1 max-w-2xl">
                    Explore municipal elected leadership, Sangguniang Bayan councilors, department heads, and public offices serving the residents of Baler.
                  </p>
                </div>
              </div>

              <a
                href="https://baler.gov.ph"
                target="_blank"
                rel="noreferrer"
                className="shrink-0 px-4 py-2.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-100 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-md"
              >
                <span>baler.gov.ph Official</span>
                <ExternalLink className="h-3.5 w-3.5 text-amber-300" />
              </a>
            </div>
          </div>

          {/* Tab Selection Navigation */}
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4 mb-8">
            <button
              type="button"
              onClick={() => handleTabChange('departments')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'departments'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Building2 className="h-4 w-4" />
              <span>Municipal Departments ({departmentsDirectory.length})</span>
            </button>

            <button
              type="button"
              onClick={() => handleTabChange('executive')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'executive'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <UserCheck className="h-4 w-4" />
              <span>Executive Branch</span>
            </button>

            <button
              type="button"
              onClick={() => handleTabChange('legislative')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'legislative'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Landmark className="h-4 w-4" />
              <span>Sangguniang Bayan</span>
            </button>

            <button
              type="button"
              onClick={() => handleTabChange('transparency')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'transparency'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <ShieldCheck className="h-4 w-4" />
              <span>Open Governance & FOI</span>
            </button>
          </div>

          {/* TAB 1: Municipal Departments & LGU Directory */}
          {activeTab === 'departments' && (
            <div className="space-y-6">
              {/* Search & Filter Header */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="relative w-full sm:w-80">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search office or department head..."
                    className="w-full pl-10 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-primary-500 focus:bg-white"
                  />
                </div>
                <div className="text-xs text-slate-500 font-medium self-end sm:self-center">
                  Showing <span className="font-bold text-slate-900">{filteredDepartments.length}</span> offices
                </div>
              </div>

              {/* Department Directory Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredDepartments.map(item => (
                  <div
                    key={item.office}
                    className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:border-primary-300 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary-700 bg-primary-50 px-2.5 py-1 rounded-md border border-primary-200">
                          {item.tag}
                        </span>
                        <Briefcase className="h-4 w-4 text-slate-400" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm mb-2 leading-snug">
                        {item.office}
                      </h3>
                      <div className="flex items-center gap-2 text-slate-700 text-xs font-semibold bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-3">
                        <Users className="h-3.5 w-3.5 text-primary-600 shrink-0" />
                        <span>Head: <strong className="text-slate-900 font-bold">{item.head}</strong></span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-slate-400" /> Municipal Hall, Baler
                      </span>
                      <a
                        href="https://baler.gov.ph"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary-600 hover:text-primary-800 font-bold flex items-center gap-0.5"
                      >
                        Official <ChevronRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: Executive Branch */}
          {activeTab === 'executive' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {executiveLeadership.map(official => (
                  <div
                    key={official.name}
                    className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs relative overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-bold mb-4">
                        <Award className="h-3.5 w-3.5 text-amber-600" />
                        <span>{official.badge}</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                        {official.name}
                      </h2>
                      <p className="text-xs font-bold text-primary-700 mt-1 mb-3">
                        {official.role} • {official.office}
                      </p>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                        {official.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                        <Mail className="h-3.5 w-3.5 text-slate-400" />
                        {official.contact}
                      </span>
                      <span className="text-slate-400 text-[11px]">Baler LGU Leadership</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* LGU Contact & Location Card */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="font-bold text-white text-base mb-1 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-amber-400" />
                    Office of the Municipal Mayor & LGU Complex
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed max-w-2xl">
                    Municipal Hall, Barangay II (Poblacion), Baler, Aurora 3200 • Open Monday to Friday, 8:00 AM – 5:00 PM (PST)
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href="mailto:info@baler.gov.ph"
                    className="px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl text-xs transition-colors flex items-center gap-1.5"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>Contact LGU</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Sangguniang Bayan (Legislative) */}
          {activeTab === 'legislative' && (
            <div className="space-y-8">
              {/* SB Header Card */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
                      <Landmark className="h-5 w-5 text-primary-600" />
                      Sangguniang Bayan of Baler
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      The legislative authority of the Municipality of Baler responsible for enacting municipal ordinances, resolutions, and local laws.
                    </p>
                  </div>
                  <div className="px-3 py-1.5 bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold rounded-xl shrink-0">
                    Presiding Officer: Hon. Denise Alyanna D. Angara
                  </div>
                </div>

                {/* Secretary Note */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary-600 shrink-0" />
                    <span>Secretary to the Sangguniang Bayan: <strong>Mr. Israel N. Galban</strong></span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-semibold">Legislative Records & Sessions</span>
                </div>

                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                  Elected Municipal Councilors (8 Members)
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {councilors.map(c => (
                    <div key={c.name} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-primary-300 transition-all">
                      <h4 className="font-bold text-slate-900 text-sm mb-1">{c.name}</h4>
                      <p className="text-[11px] text-primary-700 font-semibold">{c.title}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{c.role}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                  Ex-Officio Sangguniang Bayan Members (3 Members)
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {exOfficioMembers.map(e => (
                    <div key={e.name} className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/80">
                      <h4 className="font-bold text-slate-900 text-sm mb-1">{e.name}</h4>
                      <p className="text-[11px] text-amber-800 font-bold">{e.role}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{e.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Open Governance & Transparency */}
          {activeTab === 'transparency' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-xs">
                <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-emerald-600" />
                  Transparency, FOI & Public Governance Portals
                </h2>
                <p className="text-xs text-slate-500 mb-6">
                  Direct portals to freedom of information, national open data repositories, and civic participation channels for Baler citizens.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="https://www.foi.gov.ph"
                    target="_blank"
                    rel="noreferrer"
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-primary-400 hover:bg-white transition-all flex items-start justify-between gap-4 group"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-primary-700 font-bold text-sm mb-1">
                        <FileText className="h-4 w-4 text-primary-600" />
                        <span>Freedom of Information (eFOI)</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Request public documents, ordinances, and financial records under Executive Order No. 2.
                      </p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-primary-600 shrink-0" />
                  </a>

                  <a
                    href="https://data.gov.ph"
                    target="_blank"
                    rel="noreferrer"
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-primary-400 hover:bg-white transition-all flex items-start justify-between gap-4 group"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-primary-700 font-bold text-sm mb-1">
                        <Layers className="h-4 w-4 text-primary-600" />
                        <span>Philippine Open Data Portal</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Access open government datasets, spatial statistics, and municipal planning records.
                      </p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-primary-600 shrink-0" />
                  </a>

                  <a
                    href="https://contactcenterngbayan.gov.ph"
                    target="_blank"
                    rel="noreferrer"
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-primary-400 hover:bg-white transition-all flex items-start justify-between gap-4 group"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-primary-700 font-bold text-sm mb-1">
                        <Phone className="h-4 w-4 text-primary-600" />
                        <span>Contact Center ng Bayan (CCN)</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Feedback, inquiries, and public service complaints channel under ARTA hotline 8888.
                      </p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-primary-600 shrink-0" />
                  </a>

                  <a
                    href="https://www.officialgazette.gov.ph"
                    target="_blank"
                    rel="noreferrer"
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-primary-400 hover:bg-white transition-all flex items-start justify-between gap-4 group"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-primary-700 font-bold text-sm mb-1">
                        <Landmark className="h-4 w-4 text-primary-600" />
                        <span>Official Gazette of the Philippines</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Official journal of republic acts, executive orders, presidential proclamations, and laws.
                      </p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-primary-600 shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Footer Official Source Citation */}
          <div className="mt-8 bg-slate-900 text-slate-300 p-6 rounded-2xl text-xs flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-amber-400 shrink-0" />
              <div>
                <p className="font-bold text-white">Official Baler LGU Data Reference</p>
                <p className="text-slate-400 text-[11px]">
                  Information directly sourced from the Municipality of Baler Official Website (baler.gov.ph).
                </p>
              </div>
            </div>
            <a
              href="https://baler.gov.ph/government/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl shrink-0 transition-colors flex items-center gap-1.5"
            >
              <span>Visit baler.gov.ph/government</span>
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
