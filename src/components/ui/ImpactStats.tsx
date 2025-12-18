import { ReactNode } from "react";

interface Stat {
  value: string;
  label: string;
  icon?: ReactNode;
}

interface ImpactStatsProps {
  stats: Stat[];
  variant?: "default" | "dark" | "brand";
  className?: string;
}

const variantStyles = {
  default: {
    container: "bg-bg-light",
    value: "text-horizons-green",
    label: "text-text-muted",
    icon: "bg-horizons-green-50 text-horizons-green",
  },
  dark: {
    container: "bg-horizons-green",
    value: "text-white",
    label: "text-white/80",
    icon: "bg-white/20 text-white",
  },
  brand: {
    container: "bg-gradient-to-r from-horizons-green to-foundation-blue",
    value: "text-white",
    label: "text-white/80",
    icon: "bg-white/20 text-white",
  },
};

// Grid column classes must be complete strings for Tailwind to detect them
const gridColsClasses: Record<number, string> = {
  2: "grid-cols-2 md:grid-cols-2",
  3: "grid-cols-2 md:grid-cols-3",
  4: "grid-cols-2 md:grid-cols-4",
  5: "grid-cols-2 md:grid-cols-5",
};

export function ImpactStats({
  stats,
  variant = "default",
  className = "",
}: ImpactStatsProps) {
  const styles = variantStyles[variant];
  const gridCols = gridColsClasses[Math.min(stats.length, 5)] || gridColsClasses[4];

  return (
    <section className={`${styles.container} py-12 md:py-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid ${gridCols} gap-8 md:gap-12`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {stat.icon && (
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${styles.icon}`}>
                  {stat.icon}
                </div>
              )}
              <div className={`text-3xl md:text-4xl font-bold mb-2 ${styles.value}`}>
                {stat.value}
              </div>
              <div className={`text-sm md:text-base ${styles.label}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pre-configured trust indicators for NHF
export function TrustIndicators({ className = "" }: { className?: string }) {
  const trustStats: Stat[] = [
    {
      value: "501(c)(3)",
      label: "IRS-Verified Nonprofit",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
    },
    {
      value: "PhD & LMHC",
      label: "Licensed Clinical Leadership",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
    },
    {
      value: "Evidence",
      label: "Based Programming",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      ),
    },
    {
      value: "Your Privacy",
      label: "Protected",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
  ];

  return <ImpactStats stats={trustStats} variant="default" className={className} />;
}

export default ImpactStats;
