import { Calendar, Sun } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const freeDays = [
  { range: "1–3 maja 2026", label: "Majówka" },
  { range: "11–13 maja 2026", label: "Dodatkowe dni wolne" },
];

const DniWolnePage = () => (
  <div className="space-y-8 max-w-2xl mx-auto">
    <Reveal>
      <h2 className="newspaper-section-title text-center">Nietypowe Święta</h2>
      <div className="newspaper-divider mt-4" />
    </Reveal>

    <Reveal delay={80} className="glass rounded-xl p-6 text-center space-y-3">
      <Sun className="w-12 h-12 text-primary mx-auto" />
      <p className="text-foreground leading-relaxed">
        Każdy powoli zaczyna odliczać dni do wakacji. A my możemy zdradzić Wam długo wyczekiwane wieści. W maju mamy jeszcze trochę wolnego:
      </p>
    </Reveal>

    <div className="space-y-4">
      {freeDays.map((d, i) => (
        <Reveal key={d.range} delay={160 + i * 80} className="glass rounded-xl p-5 flex items-center gap-4">
          <Calendar className="w-10 h-10 text-primary shrink-0" />
          <div>
            <p className="font-bold text-lg text-card-foreground">{d.range}</p>
            <p className="text-muted-foreground">{d.label}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
);

export default DniWolnePage;
