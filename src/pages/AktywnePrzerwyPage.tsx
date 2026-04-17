import { BookOpen, Activity, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const AktywnePrzerwyPage = () => (
  <div className="space-y-8 max-w-2xl mx-auto">
    <Reveal>
      <h2 className="newspaper-section-title text-center">Aktywne Przerwy</h2>
      <div className="newspaper-divider mt-4" />
    </Reveal>

    <Reveal delay={80}>
      <p className="text-foreground leading-relaxed text-center">
        Aktywne przerwy to innowacja wprowadzona przez nasz samorząd szkolny, która miała na celu uaktywnienie naszej społeczności. Bardzo Was zachęcamy do uczęszczania na nie!
      </p>
    </Reveal>

    <div className="grid sm:grid-cols-2 gap-6">
      <Reveal delay={160} className="glass rounded-xl p-6 text-center space-y-3 border-primary/30">
        <BookOpen className="w-12 h-12 text-primary mx-auto" />
        <h3 className="text-xl font-bold text-card-foreground">Przerwa na czytanie</h3>
        <p className="text-muted-foreground">Czwartki</p>
        <p className="text-2xl font-bold text-primary">11:30 – 11:45</p>
        <p className="text-muted-foreground inline-flex items-center gap-1 justify-center">
          <MapPin className="w-4 h-4" /> Sala 203
        </p>
      </Reveal>

      <Reveal delay={240} className="glass rounded-xl p-6 text-center space-y-3 border-accent/30">
        <Activity className="w-12 h-12 text-accent mx-auto" />
        <h3 className="text-xl font-bold text-card-foreground">Przerwa na skakanie</h3>
        <p className="text-muted-foreground">Piątki</p>
        <p className="text-2xl font-bold text-accent">12:30 – 12:45</p>
        <p className="text-muted-foreground inline-flex items-center gap-1 justify-center">
          <MapPin className="w-4 h-4" /> Sala 210
        </p>
      </Reveal>
    </div>
  </div>
);

export default AktywnePrzerwyPage;
