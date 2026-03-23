const CDN_BASE = "https://cdn.poehali.dev/templates/meet-jack"

export default function Footer() {
  return (
    <footer className="w-full px-6 relative py-[0] mt-16 h-auto mb-0 bg-card">
      <div className="absolute top-8 right-6 text-accent text-2xl">+</div>
      <div className="absolute top-1/2 right-12 text-accent text-lg transform -translate-y-1/2">*</div>
      <div className="absolute bottom-12 right-20 text-accent text-xl">+</div>
      <div className="absolute top-16 right-32 text-accent text-sm">*</div>
      <div className="absolute bottom-8 right-8 text-accent text-lg">*</div>

      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 max-w-lg mt-8">
            <h2
              className="text-foreground text-4xl md:text-5xl mb-8 leading-[3.5rem] md:leading-[4rem] font-semibold text-center md:text-left mt-0"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Вселенная ждёт открытий.
            </h2>

            <div className="space-y-4 text-foreground">
              <div className="flex items-start gap-3">
                <span className="text-accent mt-1">*</span>
                <p className="text-sm font-mono">Поиск внеземной жизни — одна из главных научных задач XXI века.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent mt-1">*</span>
                <p className="text-sm font-mono">Миллиарды звёзд, сотни миллионов землеподобных планет — мы вряд ли одни.</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-1 justify-end items-center relative">
            <div className="relative">
              <img
                src={`${CDN_BASE}/jack-footer-ufo-new.png`}
                alt="НЛО"
                width={400}
                height={300}
                className="object-contain mb-0 mt-4"
              />
            </div>
          </div>
        </div>

        <div className="md:hidden flex justify-center mt-12">
          <div className="relative">
            <img
              src={`${CDN_BASE}/jack-footer-ufo-new.png`}
              alt="НЛО"
              width={500}
              height={375}
              className="object-contain"
            />
          </div>
        </div>

        <div className="w-full px-6 py-4 border-t border-border flex md:flex-row items-center justify-between gap-2 flex-row mt-8">
          <p className="text-muted-foreground text-sm font-mono">Захар Галыго · 11В · 2026</p>
          <p className="text-muted-foreground text-sm font-mono">Иные формы жизни вне Земли</p>
        </div>
      </div>
    </footer>
  )
}