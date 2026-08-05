import { useState, useMemo } from 'react';
import * as LucideIcons from 'lucide-react';
import {
  FileText,
  ArrowRight,
  Sparkles,
  Search,
  Building2,
  Heart,
  Users,
  Shield,
  ChevronRight,
  Tractor,
} from 'lucide-react';
import { Link } from 'react-router';
import { useTranslation } from '../../hooks/useTranslation';
import { serviceCategories } from '../../data/yamlLoader';

interface Category {
  category: string;
  slug: string;
  description: string;
  icon: string;
}

export default function ServicesSection({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');

  const getIcon = (iconName: string) => {
    const IconComponent = LucideIcons[
      iconName as keyof typeof LucideIcons
    ] as React.ComponentType<{ className?: string }>;
    
    if (IconComponent) {
      return <IconComponent className="h-5 w-5" />;
    }
    return <FileText className="h-5 w-5" />;
  };

  const displayedCategories = serviceCategories.categories as Category[];

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return displayedCategories;
    const q = searchQuery.toLowerCase();
    return displayedCategories.filter(
      cat =>
        cat.category.toLowerCase().includes(q) ||
        cat.description.toLowerCase().includes(q)
    );
  }, [displayedCategories, searchQuery]);

  const popularQuickLinks = [
    { label: 'Business Permit & Licensing', path: '/services/business-permit-and-licensing-office', icon: Building2 },
    { label: 'Health Office Services', path: '/services/municipal-health-office', icon: Heart },
    { label: 'Civil Registry & Certificates', path: '/services/municipal-civil-registrars-office', icon: FileText },
    { label: 'HR & Management', path: '/services/human-resource-and-management-office', icon: Users },
    { label: 'Disaster Emergency (MDRRMO)', path: '/services/mdrrmo', icon: Shield },
    { label: 'Agriculture Office', path: '/services/municipal-agriculture-office', icon: Tractor },
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-50/70 border-b border-slate-200/80">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-800 text-xs font-bold mb-3">
              <Sparkles className="h-3.5 w-3.5 text-primary-600" />
              <span>{t('services.badge', 'Public Services & Citizen Assistance • LGU Baler')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {title || t('services.title', 'Services & Information Directory')}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1.5 max-w-2xl leading-relaxed">
              {description ||
                t(
                  'services.description',
                  'Find municipal permit requirements, healthcare programs, civil registry guidance, social welfare aid, and public works assistance in Baler.'
                )}
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search LGU services..."
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-white border border-slate-200 rounded-xl shadow-2xs focus:outline-hidden focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
            />
          </div>
        </div>

        {/* Popular Shortcut Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mr-1">
            Frequent Requests:
          </span>
          {popularQuickLinks.map((item, idx) => {
            const ItemIcon = item.icon;
            return (
              <Link
                key={idx}
                to={item.path}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-primary-400 hover:text-[#0051ba] text-xs font-semibold shadow-2xs transition-all hover:bg-primary-50/50"
              >
                <ItemIcon className="h-3.5 w-3.5 text-primary-600" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCategories.map(category => (
            <Link
              key={category.slug}
              to={`/services/${category.slug}`}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:border-primary-400 hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle hover accent line at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#0051ba] opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div>
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="p-3 rounded-xl bg-[#0051ba] text-white shadow-xs group-hover:scale-105 transition-transform shrink-0">
                    {getIcon(category.icon)}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-[#0051ba] transition-colors">
                    {category.category}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {category.description}
                </p>
              </div>

              <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0051ba] group-hover:text-[#003d8d]">
                <span>View Guidelines & Requirements</span>
                <ArrowRight className="h-4 w-4 text-[#0051ba] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center text-slate-500">
            <p className="font-semibold text-sm">No service categories found matching &quot;{searchQuery}&quot;.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-2 text-xs font-bold text-[#0051ba] hover:underline"
            >
              Clear search filter
            </button>
          </div>
        )}

        {/* Bottom LGU Services Banner Link */}
        <div className="mt-8 bg-white p-5 rounded-2xl border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-50 text-emerald-700 rounded-xl">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                Need Citizen Charter & LGU Permit Forms?
              </h4>
              <p className="text-slate-500 text-[11px]">
                Download official application forms, checklists, and service standards from the Municipal Portal.
              </p>
            </div>
          </div>
          <Link
            to="/search"
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs shrink-0 transition-colors flex items-center gap-1.5"
          >
            <span>Search All LGU Documents</span>
            <ChevronRight className="h-3.5 w-3.5 text-amber-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
