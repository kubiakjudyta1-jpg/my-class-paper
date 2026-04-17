import { Trophy, CalendarClock } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const KonkursPage = () => (
  <div className="space-y-8 max-w-2xl mx-auto">
    <Reveal>
      <h2 className="newspaper-section-title text-center">Konkurs</h2>
      <div className="newspaper-divider mt-4" />
    </Reveal>

    <Reveal delay={100} className="glass rounded-xl p-8 text-center space-y-6">
      <Trophy className="w-16 h-16 text-primary mx-auto" />
      <h3 className="text-2xl font-bold text-card-foreground">
        Konkurs na logo gazetki „Żarówka"
      </h3>
      <p className="text-foreground leading-relaxed">
        Wraz z pierwszym wydaniem gazetki rozpoczęliśmy konkurs na logo naszego wydawnictwa. Praca powinna mieć wymiary <strong>10cm × 10cm</strong> i powinna nawiązywać do naszej nazwy.
      </p>
      <p className="text-foreground leading-relaxed">
        Logo zwycięzcy będzie umieszczone w każdej naszej następnej gazetce.
      </p>

      <Reveal delay={200} className="glass rounded-xl p-6 space-y-2">
        <p className="font-bold text-secondary-foreground inline-flex items-center gap-2 justify-center">
          <CalendarClock className="w-5 h-5 text-primary" />
          Termin zgłaszania prac:
        </p>
        <p className="text-2xl font-bold text-primary">27 marca 2026 r.</p>
        <p className="text-muted-foreground">Prace należy dostarczyć do <strong>sali 209</strong></p>
      </Reveal>
    </Reveal>
  </div>
);

export default KonkursPage;
