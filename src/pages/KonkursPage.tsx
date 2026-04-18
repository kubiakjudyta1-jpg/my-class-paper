import { Trophy, Camera, CalendarClock, Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const KonkursPage = () => (
  <div className="space-y-8 max-w-2xl mx-auto">
    <Reveal>
      <h2 className="newspaper-section-title text-center">Konkurs</h2>
      <div className="newspaper-divider mt-4" />
    </Reveal>

    <Reveal delay={100} className="glass rounded-xl p-8 text-center space-y-4">
      <Trophy className="w-16 h-16 text-primary mx-auto" />
      <h3 className="text-2xl font-bold text-card-foreground">
        Wyniki konkursu na logo
      </h3>
      <p className="text-foreground leading-relaxed text-left">
        Czy pamiętacie jeszcze konkurs na logo naszego wydawnictwa? Termin oddania prac już minął, a wiele prac zostało zgłoszonych do nas. Mieliśmy bardzo trudny wybór, bo wszystkie pomysły były bardzo kreatywne. Ale na szczęście udało nam się podjąć decyzję. Zwycięzca naszego konkursu chciał zostać anonimowy, a my spełnimy jego prośbę. Dziękujemy Wam za udział w konkursie!
      </p>
    </Reveal>

    <Reveal delay={180} className="glass rounded-xl p-8 space-y-5">
      <div className="text-center space-y-3">
        <Camera className="w-16 h-16 text-primary mx-auto" />
        <h3 className="text-2xl font-bold text-card-foreground">
          Nowy konkurs fotograficzny: „Wiosna w obiektywie"
        </h3>
      </div>
      <p className="text-foreground leading-relaxed">
        W naszym otoczeniu zaczynają się pojawiać pierwsze oznaki wiosny. Z tego powodu nasza redakcja ma zaszczyt ogłosić konkurs fotograficzny dla klas <strong>4–8</strong> pt. „Wiosna w obiektywie". Zwycięzca będzie mógł napisać swój krótki artykuł i pokazać nam swoje najlepsze zdjęcie w następnym wydaniu gazetki oraz otrzyma <strong>małą słodką nagrodę</strong>.
      </p>

      <div className="glass rounded-xl p-5 space-y-2">
        <p className="font-bold text-secondary-foreground inline-flex items-center gap-2">
          <CalendarClock className="w-5 h-5 text-primary" />
          Termin zgłaszania prac:
        </p>
        <p className="text-2xl font-bold text-primary">28 kwietnia 2026 r.</p>
        <p className="text-muted-foreground inline-flex items-center gap-2">
          <Mail className="w-4 h-4" />
          zarowkasp8@gmail.com
        </p>
      </div>

      <p className="text-center text-foreground font-semibold">Zachęcamy do udziału!</p>
    </Reveal>
  </div>
);

export default KonkursPage;
