import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon";
  theme?: "light" | "dark";
  linkToHome?: boolean;
}

const sizes = {
  sm: { width: 120, height: 32, iconSize: 24 },
  md: { width: 160, height: 40, iconSize: 32 },
  lg: { width: 200, height: 48, iconSize: 40 },
};

export function Logo({
  className = "",
  size = "md",
  variant = "full",
  theme = "light",
  linkToHome = true,
}: LogoProps) {
  const { width, height, iconSize } = sizes[size];

  // Colors based on theme (light = on white bg, dark = on dark bg)
  const colors = {
    primary: theme === "light" ? "#1A5336" : "#FFFFFF",
    secondary: theme === "light" ? "#5D9A41" : "#7AB648",
    accent: "#E8A730", // Gold stays the same
  };

  // SVG placeholder representing a sunrise over horizon (matching NHF brand)
  const LogoSVG = () => (
    <svg
      width={variant === "icon" ? iconSize : width}
      height={variant === "icon" ? iconSize : height}
      viewBox={variant === "icon" ? "0 0 40 40" : "0 0 200 48"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="New Horizons Foundation logo"
      role="img"
    >
      {variant === "icon" ? (
        // Icon-only version - sunrise symbol
        <>
          {/* Sun arc */}
          <path
            d="M20 28C26.6274 28 32 22.6274 32 16"
            stroke={colors.accent}
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Sun rays */}
          <path
            d="M20 8V4M28 12L31 9M12 12L9 9M20 16V12"
            stroke={colors.accent}
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Horizon line */}
          <path
            d="M4 28H36"
            stroke={colors.primary}
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Ground/foundation */}
          <path
            d="M8 34H32"
            stroke={colors.primary}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      ) : (
        // Full logo with text
        <>
          {/* Icon portion */}
          <g transform="translate(0, 4)">
            {/* Sun arc */}
            <path
              d="M20 24C26.6274 24 32 18.6274 32 12"
              stroke={colors.accent}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Sun rays */}
            <path
              d="M20 4V0M28 8L31 5M12 8L9 5M20 12V8"
              stroke={colors.accent}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Horizon line */}
            <path
              d="M4 24H36"
              stroke={colors.primary}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Ground/foundation */}
            <path
              d="M8 30H32"
              stroke={colors.primary}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>
          {/* Text: NEW HORIZONS */}
          <text
            x="44"
            y="20"
            fontFamily="Montserrat, sans-serif"
            fontSize="14"
            fontWeight="700"
            fill={colors.primary}
          >
            NEW HORIZONS
          </text>
          {/* Text: FOUNDATION */}
          <text
            x="44"
            y="36"
            fontFamily="Montserrat, sans-serif"
            fontSize="10"
            fontWeight="500"
            fill={colors.secondary}
            letterSpacing="2"
          >
            FOUNDATION
          </text>
        </>
      )}
    </svg>
  );

  if (linkToHome) {
    return (
      <Link
        href="/"
        className={`inline-flex items-center ${className}`}
        aria-label="New Horizons Foundation - Go to homepage"
      >
        <LogoSVG />
      </Link>
    );
  }

  return (
    <div className={`inline-flex items-center ${className}`}>
      <LogoSVG />
    </div>
  );
}

export default Logo;
