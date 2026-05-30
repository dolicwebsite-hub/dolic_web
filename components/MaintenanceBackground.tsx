export function MaintenanceBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/liquid-metal-video_yX6NvjdW-6bLYorR3Ihmlwjivg3pjA978qrSKRU.mp4"
          type="video/mp4"
        />
      </video>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/78 via-[#0D1B2A]/50 to-[#0D1B2A]/82" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/70 via-[#8C949E]/20 to-transparent" />
        <div className="absolute inset-0 [background:radial-gradient(90%_60%_at_12%_70%,rgba(0,167,181,.25)_0%,transparent_70%)]" />
      </div>
    </div>
  );
}
