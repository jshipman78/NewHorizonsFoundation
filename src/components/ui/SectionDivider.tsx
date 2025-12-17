interface SectionDividerProps {
  variant?: "wave" | "curve" | "angle" | "leaves";
  position?: "top" | "bottom";
  fillColor?: string;
  className?: string;
  flip?: boolean;
}

export function SectionDivider({
  variant = "wave",
  position = "bottom",
  fillColor = "white",
  className = "",
  flip = false,
}: SectionDividerProps) {
  const isTop = position === "top";
  const baseClasses = `absolute left-0 right-0 w-full overflow-hidden leading-none ${
    isTop ? "top-0" : "bottom-0"
  } ${className}`;

  const transforms = [];
  if (isTop) transforms.push("rotate-180");
  if (flip) transforms.push("scale-x-[-1]");
  const transformStyle = transforms.length > 0 ? { transform: transforms.join(" ") } : undefined;

  const paths: Record<string, { path: string; height: string; viewBox: string }> = {
    wave: {
      path: "M0,64 C320,128 640,0 960,64 C1280,128 1600,0 1920,64 L1920,200 L0,200 Z",
      height: "h-16 md:h-24",
      viewBox: "0 0 1920 200",
    },
    curve: {
      path: "M0,160 Q960,0 1920,160 L1920,200 L0,200 Z",
      height: "h-12 md:h-20",
      viewBox: "0 0 1920 200",
    },
    angle: {
      path: "M0,0 L1920,100 L1920,100 L0,100 Z",
      height: "h-12 md:h-16",
      viewBox: "0 0 1920 100",
    },
    leaves: {
      path: "M0,100 C240,60 360,140 480,100 C600,60 720,140 840,100 C960,60 1080,140 1200,100 C1320,60 1440,140 1560,100 C1680,60 1800,140 1920,100 L1920,200 L0,200 Z",
      height: "h-12 md:h-20",
      viewBox: "0 0 1920 200",
    },
  };

  const { path, height, viewBox } = paths[variant];

  // Map color names to CSS variables
  const colorMap: Record<string, string> = {
    white: "var(--color-bg-white)",
    light: "var(--color-bg-light)",
    green: "var(--color-horizons-green)",
    "green-50": "var(--color-horizons-green-50)",
    blue: "var(--color-foundation-blue)",
    "blue-50": "var(--color-foundation-blue-50)",
  };

  const fill = colorMap[fillColor] || fillColor;

  return (
    <div className={`${baseClasses} ${height}`} style={transformStyle}>
      <svg
        className="relative block w-full h-full"
        viewBox={viewBox}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path} fill={fill} />
      </svg>
    </div>
  );
}

// Decorative leaf element for section backgrounds
export function DecorativeLeaf({
  className = "",
  position = "top-right",
}: {
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  const positionClasses: Record<string, string> = {
    "top-left": "-top-8 -left-8",
    "top-right": "-top-8 -right-8",
    "bottom-left": "-bottom-8 -left-8",
    "bottom-right": "-bottom-8 -right-8",
  };

  return (
    <div
      className={`absolute w-32 h-32 md:w-48 md:h-48 opacity-5 pointer-events-none ${positionClasses[position]} ${className}`}
    >
      <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-horizons-green">
        <path d="M50 5C50 5 20 20 15 50C10 80 40 95 50 95C60 95 90 80 85 50C80 20 50 5 50 5Z" />
        <path d="M50 15C50 15 45 50 50 85" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
        <path d="M50 30C50 30 35 45 30 55" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
        <path d="M50 30C50 30 65 45 70 55" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
        <path d="M50 50C50 50 35 60 32 70" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
        <path d="M50 50C50 50 65 60 68 70" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
      </svg>
    </div>
  );
}

export default SectionDivider;
