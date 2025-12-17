export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-light">
      <div className="text-center">
        {/* Animated logo placeholder */}
        <div className="w-16 h-16 mx-auto mb-4 relative">
          <div className="absolute inset-0 rounded-full border-4 border-horizons-green/20" />
          <div className="absolute inset-0 rounded-full border-4 border-horizons-green border-t-transparent animate-spin" />
        </div>
        <p className="text-text-muted text-sm">Loading...</p>
      </div>
    </div>
  );
}
