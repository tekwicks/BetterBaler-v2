import React from 'react';
import * as LucideIcons from 'lucide-react';
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  Building2,
  Landmark,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { Link } from 'react-router';
import { useTranslation } from '../../hooks/useTranslation';
import { governmentCategories } from '../../data/yamlLoader';

interface Subcategory {
  name: string;
  slug: string;
}

interface Category {
  category: string;
  slug: string;
  subcategories: Subcategory[];
  description: string;
  icon: string;
}

interface GovernmentActivitySectionProps {
  title?: string;
  description?: string;
}

export default function GovernmentActivitySection({
  title,
  description,
}: GovernmentActivitySectionProps = {}) {
  const { t } = useTranslation();

  const getIcon = (iconName: string) => {
    const IconComponent = LucideIcons[
      iconName as keyof typeof LucideIcons
    ] as React.ComponentType<{ className?: string }>;

    if (IconComponent) {
      return <IconComponent className="h-5 w-5" />;
    }
    return <Building2 className="h-5 w-5" />;
  };

  const displayedCategories = governmentCategories.categories as Category[];

  const quickGovernmentLinks = [
    { label: 'Executive (Mayor & Vice Mayor)', path: '/government?tab=executive', icon: Award },
    { label: 'Sangguniang Bayan Council', path: '/government?tab=legislative', icon: Landmark },
    { label: 'LGU Departments Directory', path: '/government?tab=departments', icon: Building2 },
    { label: 'Freedom of Information (FOI)', path: '/government?tab=transparency', icon: ShieldCheck },
  ];

  return (
    <section id="government" className="py-12 md:py-16 bg-white border-b border-slate-200/80">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-800 text-xs font-bold mb-3">
              <Sparkles className="h-3.5 w-3.5 text-primary-600" />
              <span>{t('government.badge', 'Municipal Governance & Civic Affairs • LGU Baler')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {title || t('governmentActivity.title', 'Government & Open Governance')}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1.5 max-w-2xl leading-relaxed">
              {description ||
                t(
                  'governmentActivity.description',
                  'Explore municipal department operations, legislative ordinances, executive initiatives, public consultations, and official transparency portals for Baler.'
                )}
            </p>
          </div>

          <Link
            to="/government"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-all shrink-0 shadow-xs"
          >
            <span>Full LGU Directory</span>
            <ChevronRight className="h-3.5 w-3.5 text-amber-300" />
          </Link>
        </div>

        {/* Quick Branch Links */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mr-1">
            Governance Branches:
          </span>
          {quickGovernmentLinks.map((item, idx) => {
            const ItemIcon = item.icon;
            return (
              <Link
                key={idx}
                to={item.path}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:border-primary-400 hover:text-[#0051ba] text-xs font-semibold transition-all hover:bg-primary-50/50"
              >
                <ItemIcon className="h-3.5 w-3.5 text-primary-600" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedCategories.map(category => (
            <Link
              key={category.slug}
              to={category.slug === 'departments' ? '/government?tab=departments' : `/government/${category.slug}`}
              className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:border-primary-400 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top accent line */}
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

              {/* Subcategories Preview Pills */}
              {category.subcategories && category.subcategories.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-slate-100">
                  {category.subcategories.slice(0, 3).map(sub => (
                    <span
                      key={sub.slug}
                      className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] text-slate-600 font-semibold"
                    >
                      {sub.name}
                    </span>
                  ))}
                  {category.subcategories.length > 3 && (
                    <span className="text-[10px] text-slate-400 font-bold self-center">
                      +{category.subcategories.length - 3} more
                    </span>
                  )}
                </div>
              )}

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0051ba] group-hover:text-[#003d8d]">
                <span>Access Portal & Documents</span>
                <ArrowRight className="h-4 w-4 text-[#0051ba] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Government Callout */}
        <div className="mt-8 bg-gradient-to-r from-[#0051ba] to-[#003d8d] text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-2xl border border-white/20 shrink-0">
              <Landmark className="h-6 w-6 text-amber-300" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm sm:text-base">
                Sangguniang Bayan Session Schedules & Ordinances
              </h4>
              <p className="text-slate-200 text-xs mt-0.5 max-w-xl">
                Review municipal resolutions, legislative session schedules, and public council hearings presided over by Vice Mayor Denise Alyanna D. Angara.
              </p>
            </div>
          </div>
          <Link
            to="/government?tab=legislative"
            className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-extrabold rounded-xl text-xs shrink-0 transition-colors flex items-center gap-1.5 shadow-xs"
          >
            <span>View Legislative Council</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
