import Link from "next/link";
import { ReactNode } from "react";

type CardVariant = "default" | "featured" | "outlined";

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  hover?: boolean;
  variant?: CardVariant;
}

const variantClasses: Record<CardVariant, string> = {
  default: "bg-white border-border",
  featured: "bg-gradient-to-br from-horizons-green-50 to-foundation-blue-50 border-horizons-green-200",
  outlined: "bg-transparent border-2 border-horizons-green-300",
};

export function Card({
  children,
  className = "",
  href,
  hover = true,
  variant = "default",
}: CardProps) {
  const baseClasses = `rounded-xl border p-6 shadow-sm ${variantClasses[variant]} ${
    hover
      ? "hover:shadow-xl hover:border-horizons-green-300 hover:-translate-y-1 transition-all duration-300"
      : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={`block ${baseClasses}`}>
        {children}
      </Link>
    );
  }

  return <div className={baseClasses}>{children}</div>;
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3" | "h4";
}

export function CardTitle({
  children,
  className = "",
  as: Tag = "h3",
}: CardTitleProps) {
  return (
    <Tag className={`text-xl font-semibold text-text-dark ${className}`}>
      {children}
    </Tag>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({
  children,
  className = "",
}: CardDescriptionProps) {
  return <p className={`text-text-muted ${className}`}>{children}</p>;
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={className}>{children}</div>;
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className = "" }: CardFooterProps) {
  return <div className={`mt-4 pt-4 border-t border-border ${className}`}>{children}</div>;
}
