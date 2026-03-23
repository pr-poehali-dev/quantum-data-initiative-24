const CDN_BASE = "https://cdn.poehali.dev/templates/meet-jack"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/0 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4 text-transparent">
        <div className="flex items-center gap-3">
          <img src={`${CDN_BASE}/logo.svg`} alt="Logo" width={100} height={32} className="h-auto" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-foreground font-mono text-sm opacity-60 hidden md:block">
            Доклад по физике · 2026
          </span>
        </div>
      </div>
    </header>
  )
}
