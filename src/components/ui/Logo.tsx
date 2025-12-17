import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon";
  theme?: "light" | "dark";
  linkToHome?: boolean;
}

const sizes = {
  sm: { width: 100, height: 100 },
  md: { width: 140, height: 140 },
  lg: { width: 180, height: 180 },
};

export function Logo({
  className = "",
  size = "md",
  variant = "full",
  linkToHome = true,
}: LogoProps) {
  const { width, height } = sizes[size];

  // For icon variant, use smaller square dimensions
  const iconSizes = {
    sm: 32,
    md: 40,
    lg: 48,
  };

  const displayWidth = variant === "icon" ? iconSizes[size] : width;
  const displayHeight = variant === "icon" ? iconSizes[size] : height;

  const LogoImage = () => (
    <Image
      src="/logo.png"
      alt="New Horizons Foundation"
      width={displayWidth}
      height={displayHeight}
      className="object-contain"
      priority
    />
  );

  if (linkToHome) {
    return (
      <Link
        href="/"
        className={`inline-flex items-center ${className}`}
        aria-label="New Horizons Foundation - Go to homepage"
      >
        <LogoImage />
      </Link>
    );
  }

  return (
    <div className={`inline-flex items-center ${className}`}>
      <LogoImage />
    </div>
  );
}

export default Logo;
