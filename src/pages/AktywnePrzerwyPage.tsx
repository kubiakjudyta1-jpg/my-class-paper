import { BookOpen, Activity } from "lucide-react";

const AktywnePrzerwyPage = () => (
  <div className="space-y-8 max-w-2xl mx-auto">
    <h2 className="newspaper-section-title text-center">Aktywne Przerwy</h2>
    <div className="newspaper-divider" />

    <p className="text-foreground leading-relaxed text-center">
      Aktywne przerwy to innowacja wprowadzona przez nasz samorząd szkolny, która miała na celu uaktywnienie naszej społeczności. Bardzo Was zachęcamy do uczęszczania na nie!
    </p>

    <div className="grid sm:grid-cols-2 gap-6">
      <div className="glass rounded-xl p-6 text-center space-y-3 border-primary/30">
        <BookOpen className="w-12 h-12 text-primary mx-auto" />
        <h3 className="text-xl font-bold text-card-foreground">Przerwa na czytanie</h3>
        <p className="text-muted-foreground">Czwartki</p>
        <p className="text-2xl font-bold text-primary">11:30 – 11:45</p>
        <p className="text-muted-foreground">📍 Sala 203</p>
      </div>

      <div className="glass rounded-xl p-6 text-center space-y-3 border-accent/30">
        <Activity className="w-12 h-12 text-accent mx-auto" />
        <h3 className="text-xl font-bold text-card-foreground">Przerwa na skakanie</h3>
        <p className="text-muted-foreground">Piątki</p>
        <p className="text-2xl font-bold text-accent">12:30 – 12:45</p>
        <p className="text-muted-foreground">📍 Sala 210</p>
      </div>
    </div>
  </div>
);

export default AktywnePrzerwyPage;
