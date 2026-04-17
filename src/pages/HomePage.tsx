import heroImg from "@/assets/zarowka-hero.png";
import schoolImg from "@/assets/school-building.jpg";
import { Link } from "react-router-dom";
import { Trophy, Calendar, Gift, Lightbulb, BookOpen, Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const sections = [
  { to: "/newsy", label: "Newsy", icon: BookOpen, desc: "Najnowsze wiadomości ze szkoły" },
  { to: "/konkurs", label: "Konkurs", icon: Trophy, desc: "Konkurs na logo gazetki" },
  { to: "/dni-wolne", label: "Nietypowe Święta", icon: Calendar, desc: "Nadchodzące dni wolne" },
  { to: "/swieta", label: "Święta", icon: Gift, desc: "Święta i wydarzenia" },
  { to: "/aktywne-przerwy", label: "Aktywne Przerwy", icon: Lightbulb, desc: "Innowacyjne przerwy w szkole" },
  { to: "/kontakt", label: "Kontakt", icon: Mail, desc: "Napisz do nas!" },
];

const HomePage = () => (
  <div className="space-y-10">
    {/* Hero */}
    <Reveal as="section" className="text-center space-y-4">
      <img src={heroImg} alt="Żarówka - gazetka szkolna" width={1024} height={512} className="mx-auto max-w-xs md:max-w-md" />
      <h2 className="newspaper-section-title">Witamy w Żarówce!</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Witamy serdecznie czytelników pierwszego numeru naszego nowego pisma! Będziemy pokazywać w niej najważniejsze wydarzenia z naszego szkolnego życia.
      </p>
    </Reveal>

    {/* School photo */}
    <Reveal as="section" delay={100} className="glass rounded-xl overflow-hidden">
      <img src={schoolImg} alt="Budynek szkoły SP8 Kołobrzeg" width={800} height={512} className="w-full object-cover max-h-72" loading="lazy" />
    </Reveal>

    {/* Section cards */}
    <section>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {sections.map(({ to, label, icon: Icon, desc }, i) => (
          <Reveal key={to} delay={i * 70}>
            <Link
              to={to}
              className="group glass rounded-xl p-5 hover:scale-[1.02] transition-all block h-full"
            >
              <Icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg text-card-foreground">{label}</h3>
              <p className="text-muted-foreground text-sm mt-1">{desc}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  </div>
);

export default HomePage;
