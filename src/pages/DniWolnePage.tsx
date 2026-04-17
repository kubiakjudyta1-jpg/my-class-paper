import { Calendar, Candy, Bird, Croissant, LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const holidays: { date: string; name: string; icon: LucideIcon }[] = [
  { date: "28 marca", name: "Dzień Żelków", icon: Candy },
  { date: "9 kwietnia", name: "Światowy Dzień Gołębia", icon: Bird },
  { date: "24 kwietnia", name: "Europejski Dzień Śniadania", icon: Croissant },
];

const DniWolnePage = () => (
  <div className="space-y-8 max-w-2xl mx-auto">
    <Reveal>
      <h2 className="newspaper-section-title text-center">Nietypowe Święta</h2>
      <div className="newspaper-divider mt-4" />
    </Reveal>

    <Reveal delay={80}>
      <p className="text-center text-muted-foreground">
        Czy wiecie, że w najbliższych miesiącach będziecie mogli obchodzić takie święta jak:
      </p>
    </Reveal>

    <div className="space-y-4">
      {holidays.map((h, i) => (
        <Reveal key={h.name} delay={160 + i * 80} className="glass rounded-xl p-5 flex items-center gap-4">
          <h.icon className="w-10 h-10 text-primary shrink-0" />
          <div>
            <p className="font-bold text-lg text-card-foreground">{h.name}</p>
            <p className="text-muted-foreground flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {h.date}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
);

export default DniWolnePage;
