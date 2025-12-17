import { ReactNode } from "react";
import { Container } from "../layout/Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "light" | "dark" | "gradient";
  containerSize?: "default" | "narrow" | "wide";
  id?: string;
}

const backgroundClasses = {
  white: "bg-white",
  light: "bg-bg-light",
  dark: "bg-text-dark text-white",
  gradient: "bg-gradient-to-br from-horizons-green to-foundation-blue text-white",
};

export function Section({
  children,
  className = "",
  background = "white",
  containerSize = "default",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${backgroundClasses[background]} ${className}`}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

interface SectionHeaderProps {
  children: ReactNode;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({
  children,
  className = "",
  centered = true,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 ${centered ? "text-center max-w-3xl mx-auto" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export function SectionTitle({
  children,
  className = "",
  as: Tag = "h2",
}: SectionTitleProps) {
  const sizeClasses = {
    h1: "text-4xl md:text-5xl lg:text-6xl",
    h2: "text-3xl md:text-4xl",
    h3: "text-2xl md:text-3xl",
  };

  return (
    <Tag className={`font-bold ${sizeClasses[Tag]} ${className}`}>
      {children}
    </Tag>
  );
}

interface SectionDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function SectionDescription({
  children,
  className = "",
}: SectionDescriptionProps) {
  return (
    <p className={`text-lg text-text-muted mt-4 ${className}`}>{children}</p>
  );
}
