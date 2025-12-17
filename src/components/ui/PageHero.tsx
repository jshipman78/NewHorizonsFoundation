import { ReactNode } from "react";

interface PageHeroProps {
  breadcrumb?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  variant?: "default" | "centered";
}

export function PageHero({
  breadcrumb,
  title,
  description,
  children,
  variant = "default",
}: PageHeroProps) {
  return (
    <section className="bg-gradient-to-r from-horizons-green to-foundation-blue text-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={
            variant === "centered"
              ? "max-w-3xl mx-auto text-center"
              : "max-w-3xl"
          }
        >
          {breadcrumb && (
            <p className="text-white/80 font-medium mb-4">{breadcrumb}</p>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          {description && (
            <p className="text-xl text-white/90">{description}</p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}

export default PageHero;
