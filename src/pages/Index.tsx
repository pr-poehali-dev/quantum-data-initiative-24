import SplineScene from "@/components/SplineScene"
import Header from "@/components/Header"
import RotatingTextAccent from "@/components/RotatingTextAccent"
import Footer from "@/components/Footer"
import HeroTextOverlay from "@/components/HeroTextOverlay"
import Icon from "@/components/ui/icon"

const slides = [
  {
    num: "01",
    title: "Что такое астробиология?",
    emoji: "🔬",
    text: "Астробиология — наука о возникновении, эволюции и распространении жизни во Вселенной. Она изучает, существует ли жизнь за пределами Земли и в каком виде она может существовать. В основе лежит поиск биосигнатур — химических следов жизни.",
    facts: [
      "Наука возникла в 1950-х годах",
      "Объединяет биологию, химию, астрономию",
      "NASA имеет отдельную программу астробиологии",
    ],
  },
  {
    num: "02",
    title: "Экстремофилы — жизнь в невозможных условиях",
    emoji: "🦠",
    text: "На Земле существуют организмы — экстремофилы, — которые выживают при температурах от −20°C до +121°C, в кислотных источниках и даже в открытом космосе. Они доказывают, что жизнь может адаптироваться к самым суровым условиям.",
    facts: [
      "Тихоходки выживают в открытом космосе",
      "Бактерии живут в кипящих гейзерах Йеллоустона",
      "Микробы найдены на глубине 5 км под землёй",
    ],
  },
  {
    num: "03",
    title: "Марс — ближайший кандидат",
    emoji: "🔴",
    text: "Марс — самый изученный кандидат на наличие жизни. Данные марсоходов Curiosity и Perseverance показали: 3–4 млрд лет назад на Марсе были реки, озёра и возможно — условия для жизни. Сейчас ровер Perseverance берёт образцы грунта для доставки на Землю.",
    facts: [
      "Найдены следы древних рек и океанов",
      "Обнаружен метан — возможный признак биологии",
      "Под полярными шапками — жидкая вода",
    ],
  },
  {
    num: "04",
    title: "Европа и Энцелад — океаны подо льдом",
    emoji: "🧊",
    text: "Луна Юпитера Европа и луна Сатурна Энцелад скрывают под ледяной корой жидкие солёные океаны. Энцелад выбрасывает в космос гейзеры воды с органическими молекулами и молекулярным водородом — признаками гидротермальной активности, схожей с условиями зарождения жизни на Земле.",
    facts: [
      "Океан Европы глубже земного в 3 раза",
      "В гейзерах Энцелада найдены органические молекулы",
      "Миссия Europa Clipper запущена в 2024 году",
    ],
  },
  {
    num: "05",
    title: "Сигнал WOW! и SETI",
    emoji: "📡",
    text: "В 1977 году радиотелескоп Big Ear зафиксировал 72-секундный сигнал из созвездия Стрельца — настолько необычный, что астроном Джерри Эман написал рядом «WOW!». Программа SETI (Search for Extra-Terrestrial Intelligence) с 1960 года прослушивает космос в поисках разумных сигналов.",
    facts: [
      "Сигнал WOW! до сих пор не объяснён",
      "SETI обработала миллиарды часов радиоданных",
      "Уравнение Дрейка оценивает число цивилизаций в Галактике",
    ],
  },
  {
    num: "06",
    title: "Парадокс Ферми и будущее поиска",
    emoji: "🌌",
    text: "В 1950 году физик Энрико Ферми задал вопрос: «Если внеземные цивилизации существуют — где они?» Парадокс Ферми остаётся открытым. Телескоп Джеймс Уэбб уже анализирует атмосферы экзопланет в поиске биосигнатур — кислорода, воды и метана.",
    facts: [
      "Обнаружено более 5500 экзопланет",
      "~300 млн землеподобных планет только в Млечном Пути",
      "Телескоп Уэбб работает с 2022 года",
    ],
  },
]

const Index = () => {
  return (
    <div className="w-full min-h-screen py-0 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <main className="w-full relative h-[600px]">
          <Header />
          <SplineScene />
          <HeroTextOverlay />
          <RotatingTextAccent />
        </main>

        <div className="px-4 md:px-0 mt-8 flex flex-col gap-6">
          {slides.map((slide, i) => (
            <section
              key={slide.num}
              className="relative rounded-4xl py-10 px-8 md:px-14 bg-card border border-solid border-border"
              style={{
                backgroundImage: `
                  linear-gradient(var(--border) 1px, transparent 1px),
                  linear-gradient(90deg, var(--border) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            >
              <div className="absolute top-6 left-8 text-foreground opacity-20 text-4xl font-extralight">+</div>
              <div className="absolute top-6 right-8 text-foreground opacity-20 text-4xl font-extralight">+</div>
              <div className="absolute bottom-6 left-8 text-foreground opacity-20 text-4xl font-extralight">+</div>
              <div className="absolute bottom-6 right-8 text-foreground opacity-20 text-4xl font-extralight">+</div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-accent font-mono text-sm opacity-60">{slide.num}</span>
                    <span className="text-3xl">{slide.emoji}</span>
                  </div>
                  <h2
                    className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:max-w-[280px]"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {slide.title}
                  </h2>
                </div>

                <div className="flex-1">
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 font-mono">
                    {slide.text}
                  </p>

                  <div className="flex flex-col gap-2">
                    {slide.facts.map((fact, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <span className="text-accent mt-0.5 flex-shrink-0">
                          <Icon name="Star" size={12} />
                        </span>
                        <span className="text-foreground font-mono text-sm">{fact}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Index
