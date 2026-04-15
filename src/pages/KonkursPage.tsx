import { Trophy } from "lucide-react";

const KonkursPage = () => (
  <div className="space-y-8 max-w-2xl mx-auto">
    <h2 className="newspaper-section-title text-center">Konkurs</h2>
    <div className="newspaper-divider" />

    <div className="glass rounded-xl p-8 text-center space-y-6">
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

      <div className="glass rounded-xl p-6 space-y-2">
        <p className="font-bold text-secondary-foreground">📅 Termin zgłaszania prac:</p>
        <p className="text-2xl font-bold text-primary">27 marca 2026 r.</p>
        <p className="text-muted-foreground">Prace należy dostarczyć do <strong>sali 209</strong></p>
      </div>
    </div>
  </div>
);

export default KonkursPage;
