import { Calendar } from "lucide-react";

const holidays = [
  { date: "28 marca", name: "Dzień Żelków", emoji: "🍬" },
  { date: "9 kwietnia", name: "Światowy Dzień Gołębia", emoji: "🕊️" },
  { date: "24 kwietnia", name: "Europejski Dzień Śniadania", emoji: "🥐" },
];

const DniWolnePage = () => (
  <div className="space-y-8 max-w-2xl mx-auto">
    <h2 className="newspaper-section-title text-center">Nietypowe Święta</h2>
    <div className="newspaper-divider" />

    <p className="text-center text-muted-foreground">
      Czy wiecie, że w najbliższych miesiącach będziecie mogli obchodzić takie święta jak:
    </p>

    <div className="space-y-4">
      {holidays.map((h) => (
        <div key={h.name} className="bg-card border border-border rounded-lg p-5 flex items-center gap-4">
          <span className="text-4xl">{h.emoji}</span>
          <div>
            <p className="font-serif font-bold text-lg text-card-foreground">{h.name}</p>
            <p className="text-muted-foreground flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {h.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default DniWolnePage;
