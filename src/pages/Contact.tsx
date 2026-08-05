import React, { useState } from 'react';
import SEO from '../components/SEO';
import LguSeal from '../components/ui/LguSeal';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  ShieldAlert,
  Flame,
  Zap,
  Compass,
  Siren,
  Anchor,
  MessageSquare,
  Lightbulb,
  AlertTriangle,
  Award,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Search,
  History,
  Building2,
  User,
  Tag,
} from 'lucide-react';

interface HotlineItem {
  id: string;
  agency: string;
  fullName: string;
  numbers: string[];
  category: 'emergency' | 'medical' | 'disaster' | 'utilities' | 'tourism';
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  badgeBg: string;
  badgeText: string;
  description: string;
}

const HOTLINES: HotlineItem[] = [
  {
    id: 'phil-army',
    agency: 'PHIL. ARMY',
    fullName: 'Philippine Army - 91st Infantry Battalion',
    numbers: ['0945-457-7339'],
    category: 'emergency',
    icon: Shield,
    color: 'emerald',
    badgeBg: 'bg-emerald-100 border-emerald-300',
    badgeText: 'text-emerald-800',
    description: 'Security, national defense, and tactical emergency assistance.',
  },
  {
    id: 'rhu-baler',
    agency: 'RHU BALER',
    fullName: 'Rural Health Unit - Baler Municipal Health Office',
    numbers: ['0930-668-3981', '0927-304-2828'],
    category: 'medical',
    icon: Siren,
    color: 'rose',
    badgeBg: 'bg-rose-100 border-rose-300',
    badgeText: 'text-rose-800',
    description: 'Ambulance service, medical emergencies, and municipal health inquiries.',
  },
  {
    id: 'baler-pnp',
    agency: 'BALER PNP',
    fullName: 'Philippine National Police - Baler Police Station',
    numbers: ['0908-526-4029', '0998-598-5340'],
    category: 'emergency',
    icon: ShieldAlert,
    color: 'blue',
    badgeBg: 'bg-blue-100 border-blue-300',
    badgeText: 'text-blue-800',
    description: 'Crime response, public safety, traffic assistance, and police blotter.',
  },
  {
    id: 'mdrrmo',
    agency: 'MDRRMO',
    fullName: 'Municipal Disaster Risk Reduction & Management Office',
    numbers: ['0920-594-1906'],
    category: 'disaster',
    icon: Siren,
    color: 'amber',
    badgeBg: 'bg-amber-100 border-amber-300',
    badgeText: 'text-amber-800',
    description: 'Typhoon, landslide, rescue operations, evacuation, and surge monitoring.',
  },
  {
    id: 'coastguard',
    agency: 'PHILIPPINE COASTGUARD',
    fullName: 'Philippine Coast Guard - Sub-Station Baler',
    numbers: ['0998-585-6227'],
    category: 'disaster',
    icon: Anchor,
    color: 'sky',
    badgeBg: 'bg-sky-100 border-sky-300',
    badgeText: 'text-sky-800',
    description: 'Coastal sea rescue, maritime safety, gale warnings, and beach safety.',
  },
  {
    id: 'pdrrmo',
    agency: 'PDRRMO',
    fullName: 'Provincial Disaster Risk Reduction & Management Office - Aurora',
    numbers: ['0939-325-7838', '0963-742-7777'],
    category: 'disaster',
    icon: Shield,
    color: 'purple',
    badgeBg: 'bg-purple-100 border-purple-300',
    badgeText: 'text-purple-800',
    description: 'Provincial-wide emergency response and disaster command control.',
  },
  {
    id: 'baler-bfp',
    agency: 'BALER BFP',
    fullName: 'Bureau of Fire Protection - Baler Fire Station',
    numbers: ['0917-119-2794', '0939-216-6377'],
    category: 'medical',
    icon: Flame,
    color: 'orange',
    badgeBg: 'bg-orange-100 border-orange-300',
    badgeText: 'text-orange-800',
    description: 'Fire emergencies, hazard inspection, and disaster rescue.',
  },
  {
    id: 'aurelco',
    agency: 'AURELCO',
    fullName: 'Aurora Electric Cooperative, Inc.',
    numbers: ['0999-977-2735', '0921-869-1859'],
    category: 'utilities',
    icon: Zap,
    color: 'yellow',
    badgeBg: 'bg-amber-100 border-amber-300',
    badgeText: 'text-amber-900',
    description: 'Power outages, line maintenance, electrical hazards, and transformer reports.',
  },
  {
    id: 'tourism-baler',
    agency: 'TOURISM OFFICE BALER',
    fullName: 'Municipal Tourism & Cultural Heritage Office',
    numbers: ['0928-593-7663'],
    category: 'tourism',
    icon: Compass,
    color: 'teal',
    badgeBg: 'bg-teal-100 border-teal-300',
    badgeText: 'text-teal-800',
    description: 'Tourist assistance, Sabang surf guidelines, accreditation, and visitor info.',
  },
];

type FeedbackCategory = 'inquiry' | 'suggestion' | 'complaint' | 'commendation';

interface SubmissionRecord {
  ticketId: string;
  name: string;
  contact: string;
  email: string;
  category: FeedbackCategory;
  department: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'Submitted' | 'Under Review' | 'Resolved';
}

export default function Contact() {
  const [selectedHotlineCategory, setSelectedHotlineCategory] = useState<string>('all');
  const [searchHotlineQuery, setSearchHotlineQuery] = useState('');
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  // Form State
  const [formCategory, setFormCategory] = useState<FeedbackCategory>('suggestion');
  const [fullName, setFullName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('Mayor\'s Executive Office');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmittedTicket, setLastSubmittedTicket] = useState<SubmissionRecord | null>(null);
  const [activeTab, setActiveTab] = useState<'form' | 'history'>('form');

  // Local storage history state
  const [history, setHistory] = useState<SubmissionRecord[]>(() => {
    try {
      const saved = localStorage.getItem('baler_citizen_feedbacks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const handleCopy = (num: string) => {
    navigator.clipboard.writeText(num.replace(/\s+/g, ''));
    setCopiedNumber(num);
    setTimeout(() => setCopiedNumber(null), 2500);
  };

  const filteredHotlines = HOTLINES.filter(h => {
    const matchesCategory =
      selectedHotlineCategory === 'all' || h.category === selectedHotlineCategory;
    const matchesSearch =
      searchHotlineQuery === '' ||
      h.agency.toLowerCase().includes(searchHotlineQuery.toLowerCase()) ||
      h.fullName.toLowerCase().includes(searchHotlineQuery.toLowerCase()) ||
      h.numbers.some(num => num.includes(searchHotlineQuery));
    return matchesCategory && matchesSearch;
  });

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !contactNumber.trim() || !message.trim()) {
      alert('Please fill in your name, contact number, and message.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const randomCode = Math.floor(1000 + Math.random() * 9000);
      const ticketId = `BALER-${new Date().getFullYear()}-${randomCode}`;
      
      const newRecord: SubmissionRecord = {
        ticketId,
        name: fullName,
        contact: contactNumber,
        email,
        category: formCategory,
        department,
        subject: subject || `${formCategory.toUpperCase()} - ${department}`,
        message,
        createdAt: new Date().toLocaleString('en-PH', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
        status: 'Submitted',
      };

      const updatedHistory = [newRecord, ...history];
      setHistory(updatedHistory);
      try {
        localStorage.setItem('baler_citizen_feedbacks', JSON.stringify(updatedHistory));
      } catch {
        // ignore
      }

      setLastSubmittedTicket(newRecord);
      setIsSubmitting(false);

      // Reset fields
      setSubject('');
      setMessage('');
    }, 600);
  };

  return (
    <>
      <SEO
        title="Emergency Hotlines & Contact Form | Baler, Aurora"
        description="Official Baler LGU emergency hotline directory and citizen contact form. Send messages, suggestions, complaints, or inquiries to municipal offices."
        keywords="baler hotlines, emergency numbers baler, baler pnp, rhu baler, mdrrmo baler, baler contact form, complain to mayor baler"
      />

      <div className="bg-slate-50 min-h-screen py-8 md:py-14">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* Banner Header */}
          <div className="bg-gradient-to-r from-slate-900 via-primary-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 mb-10 shadow-xl relative overflow-hidden border border-slate-800">
            <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-5">
                <LguSeal size={84} className="shrink-0 drop-shadow-md" />
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold mb-2.5">
                    <Phone className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
                    <span>Official Directory & Public Service Desk</span>
                  </div>
                  <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                    Emergency Hotlines & Contact Portal
                  </h1>
                  <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                    Access 24/7 emergency hotlines for medical, police, fire, disaster response, and electric utilities, or submit a message, suggestion, or complaint directly to Baler LGU offices.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* SECTION 1: EMERGENCY HOTLINES (Direct from official poster) */}
          <div className="mb-14">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-rose-600 uppercase tracking-wider mb-1">
                  <Siren className="h-4 w-4 text-rose-600 animate-bounce" />
                  <span>Verified Public Hotlines</span>
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Baler Emergency Hotlines
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Direct telephone and mobile contacts for disaster management, police, health units, and municipal services.
                </p>
              </div>

              {/* Search bar for hotlines */}
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search hotline or agency..."
                  value={searchHotlineQuery}
                  onChange={e => setSearchHotlineQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-300 rounded-xl shadow-xs focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            {/* Category Filter Chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
              {[
                { id: 'all', label: 'All Hotlines' },
                { id: 'emergency', label: 'Police & Defense' },
                { id: 'medical', label: 'RHU & Fire (Medical/Fire)' },
                { id: 'disaster', label: 'MDRRMO & Disaster Rescue' },
                { id: 'utilities', label: 'AURELCO (Electric)' },
                { id: 'tourism', label: 'Tourism Office' },
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedHotlineCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                    selectedHotlineCategory === cat.id
                      ? 'bg-primary-900 text-white border-primary-900 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Toast for Copied Number */}
            {copiedNumber && (
              <div className="mb-4 p-3 bg-emerald-900 text-white text-xs font-semibold rounded-xl flex items-center justify-between shadow-lg animate-fade-in">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Copied phone number <strong>{copiedNumber}</strong> to clipboard!
                </span>
                <span className="text-[10px] text-emerald-200">Ready to dial</span>
              </div>
            )}

            {/* Hotlines Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredHotlines.map(item => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`p-2.5 rounded-xl bg-${item.color}-50 text-${item.color}-700 border border-${item.color}-200/60 shrink-0`}>
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <div>
                            <span className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wide border ${item.badgeBg} ${item.badgeText} mb-1`}>
                              {item.agency}
                            </span>
                            <h3 className="text-sm font-bold text-slate-900 leading-snug">
                              {item.fullName}
                            </h3>
                          </div>
                        </div>
                      </div>
                      <p className="text-slate-500 text-xs mb-4 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Phone numbers list */}
                    <div className="pt-3 border-t border-slate-100 space-y-2">
                      {item.numbers.map((num, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100/80 transition-colors"
                        >
                          <a
                            href={`tel:${num.replace(/-/g, '')}`}
                            className="flex items-center gap-2 text-xs font-extrabold text-slate-900 hover:text-primary-700"
                            title="Click to call"
                          >
                            <Phone className="h-3.5 w-3.5 text-primary-600 shrink-0" />
                            <span>{num}</span>
                          </a>

                          <div className="flex items-center gap-1">
                            <a
                              href={`tel:${num.replace(/-/g, '')}`}
                              className="p-1.5 rounded-lg text-primary-700 hover:bg-primary-100 text-[11px] font-bold flex items-center gap-1 transition-colors"
                              title="Call hotline"
                            >
                              Call
                            </a>
                            <button
                              onClick={() => handleCopy(num)}
                              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors"
                              title="Copy number"
                            >
                              {copiedNumber === num ? (
                                <Check className="h-3.5 w-3.5 text-emerald-600" />
                              ) : (
                                <Copy className="h-3.5 w-3.5" />
                              )}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredHotlines.length === 0 && (
              <div className="bg-white rounded-2xl p-8 text-center border border-slate-200">
                <Search className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                <p className="text-slate-700 font-bold text-sm">No hotline matches your search</p>
                <p className="text-slate-500 text-xs mt-1">Try resetting search filters or keywords.</p>
              </div>
            )}
          </div>

          {/* SECTION 2: CITIZEN CONTACT FORM (Message, Suggestion, Complaint) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left/Main Column: Form & History Tabs */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
                
                {/* Form Navigation Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-6">
                  <div>
                    <h2 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-primary-600" />
                      Citizen Desk & Feedback Form
                    </h2>
                    <p className="text-slate-500 text-xs mt-0.5">
                      Send a message, submit a public suggestion, or log an official municipal complaint.
                    </p>
                  </div>

                  {/* Toggle Tab */}
                  <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-semibold shrink-0">
                    <button
                      onClick={() => setActiveTab('form')}
                      className={`px-3 py-1.5 rounded-lg transition-all ${
                        activeTab === 'form'
                          ? 'bg-white text-slate-900 shadow-xs font-bold'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      New Submission
                    </button>
                    <button
                      onClick={() => setActiveTab('history')}
                      className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                        activeTab === 'history'
                          ? 'bg-white text-slate-900 shadow-xs font-bold'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <History className="h-3.5 w-3.5" />
                      My Submissions ({history.length})
                    </button>
                  </div>
                </div>

                {/* TAB 1: NEW SUBMISSION FORM */}
                {activeTab === 'form' && (
                  <div>
                    {/* Success Ticket Confirmation Card */}
                    {lastSubmittedTicket && (
                      <div className="mb-8 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 relative">
                        <button
                          onClick={() => setLastSubmittedTicket(null)}
                          className="absolute top-4 right-4 text-xs font-semibold text-emerald-700 hover:text-emerald-900"
                        >
                          ✕ Close
                        </button>
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-emerald-600 text-white rounded-2xl shrink-0">
                            <CheckCircle2 className="h-6 w-6" />
                          </div>
                          <div>
                            <div className="inline-block px-2.5 py-0.5 bg-emerald-200 text-emerald-900 font-extrabold text-[11px] rounded-md mb-1">
                              Submission Received!
                            </div>
                            <h3 className="text-base font-extrabold text-slate-900">
                              Tracking Code: <span className="text-emerald-800 font-mono">{lastSubmittedTicket.ticketId}</span>
                            </h3>
                            <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                              Thank you, <strong>{lastSubmittedTicket.name}</strong>. Your {lastSubmittedTicket.category} regarding "<em>{lastSubmittedTicket.subject}</em>" has been submitted to the <strong>{lastSubmittedTicket.department}</strong>.
                            </p>
                            <div className="mt-3 flex items-center gap-3">
                              <button
                                onClick={() => handleCopy(lastSubmittedTicket.ticketId)}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-emerald-300 rounded-xl text-xs font-bold text-emerald-800 hover:bg-emerald-100"
                              >
                                <Copy className="h-3.5 w-3.5" />
                                Copy Ticket Reference
                              </button>
                              <button
                                onClick={() => setActiveTab('history')}
                                className="text-xs font-semibold text-emerald-800 underline hover:text-emerald-950"
                              >
                                View All Submissions →
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Feedback Category Selector Buttons */}
                    <div className="mb-6">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                        1. Select Type of Submission
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {[
                          { id: 'inquiry', label: 'Message / Inquiry', icon: MessageSquare, color: 'blue' },
                          { id: 'suggestion', label: 'Suggestion / Idea', icon: Lightbulb, color: 'amber' },
                          { id: 'complaint', label: 'Complaint / Concern', icon: AlertTriangle, color: 'rose' },
                          { id: 'commendation', label: 'Commendation', icon: Award, color: 'emerald' },
                        ].map(type => {
                          const TypeIcon = type.icon;
                          const isSelected = formCategory === type.id;
                          return (
                            <button
                              key={type.id}
                              type="button"
                              onClick={() => setFormCategory(type.id as FeedbackCategory)}
                              className={`p-3 rounded-2xl text-left border text-xs font-bold transition-all flex flex-col justify-between ${
                                isSelected
                                  ? 'bg-primary-950 text-white border-primary-900 shadow-sm ring-2 ring-primary-500/20'
                                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                              }`}
                            >
                              <TypeIcon className={`h-4 w-4 mb-2 ${isSelected ? 'text-amber-400' : 'text-slate-500'}`} />
                              <span>{type.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <form onSubmit={handleSubmitForm} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                            <User className="h-3.5 w-3.5 text-slate-400" />
                            Full Name <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Juan Dela Cruz"
                            value={fullName}
                            onChange={e => setFullName(e.target.value)}
                            className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                            <Phone className="h-3.5 w-3.5 text-slate-400" />
                            Contact Mobile Number <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="0917-000-0000"
                            value={contactNumber}
                            onChange={e => setContactNumber(e.target.value)}
                            className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                            <Mail className="h-3.5 w-3.5 text-slate-400" />
                            Email Address (Optional)
                          </label>
                          <input
                            type="email"
                            placeholder="juan@example.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                            <Building2 className="h-3.5 w-3.5 text-slate-400" />
                            Target Office / Department <span className="text-rose-500">*</span>
                          </label>
                          <select
                            value={department}
                            onChange={e => setDepartment(e.target.value)}
                            className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:outline-none cursor-pointer"
                          >
                            <option value="Mayor's Executive Office">Mayor's Executive Office</option>
                            <option value="Municipal Health Office (RHU Baler)">Municipal Health Office (RHU Baler)</option>
                            <option value="Municipal Disaster Risk Reduction (MDRRMO)">Municipal Disaster Risk Reduction (MDRRMO)</option>
                            <option value="Municipal Tourism Office">Municipal Tourism Office</option>
                            <option value="Municipal Engineering & Public Works">Municipal Engineering & Public Works</option>
                            <option value="Business Permits & Licensing Office (BPLO)">Business Permits & Licensing Office (BPLO)</option>
                            <option value="Municipal Treasury & Assessor">Municipal Treasury & Assessor</option>
                            <option value="Baler Police Station (PNP)">Baler Police Station (PNP)</option>
                            <option value="Bureau of Fire Protection (BFP)">Bureau of Fire Protection (BFP)</option>
                            <option value="General LGU Citizen Desk">General LGU Citizen Desk</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                          <Tag className="h-3.5 w-3.5 text-slate-400" />
                          Subject / Topic Summary
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Streetlight concern along Sabang Beach / Business Permit Inquiry"
                          value={subject}
                          onChange={e => setSubject(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Message, Suggestion, or Complaint Details <span className="text-rose-500">*</span>
                        </label>
                        <textarea
                          rows={5}
                          required
                          placeholder="Please provide details regarding your message, suggestion, or concern..."
                          value={message}
                          onChange={e => setMessage(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:outline-none leading-relaxed"
                        ></textarea>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-[11px] text-slate-500">
                          🔒 Submissions are logged securely for municipal review.
                        </p>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto px-6 py-3 bg-primary-900 hover:bg-primary-950 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <span>Submitting...</span>
                          ) : (
                            <>
                              <Send className="h-4 w-4" />
                              <span>Submit Form to Baler LGU</span>
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* TAB 2: MY SUBMISSION HISTORY */}
                {activeTab === 'history' && (
                  <div>
                    {history.length === 0 ? (
                      <div className="py-12 text-center">
                        <History className="h-10 w-10 text-slate-300 mx-auto mb-3" />
                        <p className="text-sm font-bold text-slate-700">No Submissions Yet</p>
                        <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                          You haven't submitted any messages, suggestions, or complaints in this browser session.
                        </p>
                        <button
                          onClick={() => setActiveTab('form')}
                          className="mt-4 px-4 py-2 bg-primary-900 text-white text-xs font-bold rounded-xl"
                        >
                          Create New Submission
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <p className="text-xs text-slate-500">
                          Below are your previously submitted messages stored in your browser session:
                        </p>
                        {history.map(item => (
                          <div
                            key={item.ticketId}
                            className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs space-y-2"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 pb-2">
                              <span className="font-mono font-extrabold text-primary-900 text-xs">
                                {item.ticketId}
                              </span>
                              <div className="flex items-center gap-2">
                                <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 font-bold uppercase text-[10px]">
                                  {item.category}
                                </span>
                                <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                                  {item.status}
                                </span>
                                <span className="text-[10px] text-slate-400">{item.createdAt}</span>
                              </div>
                            </div>

                            <div>
                              <p className="font-bold text-slate-900 text-xs">{item.subject}</p>
                              <p className="text-[11px] text-slate-600 font-medium">
                                Department: <span className="text-slate-800">{item.department}</span>
                              </p>
                              <p className="text-slate-600 mt-1.5 leading-relaxed bg-white p-3 rounded-xl border border-slate-200/70">
                                {item.message}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

              </div>
            </div>

            {/* Right Column: Municipal Hall Info & Operating Hours */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-md border border-slate-800">
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4 border-b border-slate-800 pb-2 flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-amber-400" />
                  Baler Municipal Hall
                </h3>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">Office Address</p>
                      <p className="text-slate-400 mt-0.5 leading-relaxed">
                        Municipal Hall, Poblacion, Baler, Aurora 3200 Philippines
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">LGU Operating Hours</p>
                      <p className="text-slate-400 mt-0.5">Monday – Friday: 8:00 AM – 5:00 PM</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">(Excluding public holidays)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">Official LGU Email</p>
                      <p className="text-slate-400 mt-0.5">info@baler.gov.ph</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Citizen Hotline Quick Reference Badge */}
              <div className="bg-amber-50 rounded-3xl p-6 border border-amber-200 text-amber-950">
                <div className="flex items-center gap-2 mb-2 font-extrabold text-xs text-amber-900">
                  <Siren className="h-4 w-4 text-amber-600" />
                  Emergency Hotline Alert
                </div>
                <p className="text-xs text-amber-900 leading-relaxed mb-3">
                  For immediate life-threatening emergencies or active typhoon rescue, directly call the MDRRMO hotline at <strong>0920-594-1906</strong> or Police at <strong>0908-526-4029</strong>.
                </p>
                <div className="text-[11px] text-amber-800 font-semibold border-t border-amber-200/80 pt-2">
                  Baler Bay Coastal & Weather Center
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
