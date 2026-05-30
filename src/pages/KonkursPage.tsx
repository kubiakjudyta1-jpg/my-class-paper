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
        Czy pamiętacie jeszcze konkurs na logo naszego wydawnictwa? Termin oddania prac już minął, a wiele prac zostało zgłoszonych do nas. Mieliśmy bardzo trudny wybór, bo wszystkie pomysły były bardzo kreatywne. Ale na szczęście udało nam się podjąć decyzję. Zwycięzcą naszego konkursu została Wiera Dębiec z klasy 6a. Serdecznie jej gratulujemy i dziękujemy wszystkim za udział w konkursie!
      </p>
    </Reveal>

    <Reveal delay={180} className="glass rounded-xl p-8 space-y-5">
      <div className="text-center space-y-3">
        <Camera className="w-16 h-16 text-primary mx-auto" />
        <h3 className="text-2xl font-bold text-card-foreground">
          Wyniki konkursu fot. pt. „Wiosna w obiektywie"
        </h3>
      </div>
      <p className="text-foreground leading-relaxed">
        Termin zgłaszania prac do naszego konkursu fotograficznego „Wiosna w obiektywie" już minął. Bardzo dziękujemy wszystkim uczestnikom za nadesłane zdjęcia — było ich naprawdę wiele, a każde z nich pokazywało wiosnę z innej, niepowtarzalnej perspektywy. Wybór nie był łatwy, ale po długich naradach redakcja podjęła decyzję.
      </p>
      <p className="text-foreground leading-relaxed">
        Zwycięskie zdjęcie wraz z krótkim artykułem autora pojawi się w następnym wydaniu gazetki, a laureat otrzyma <strong>małą słodką nagrodę</strong>. Serdecznie gratulujemy i zapraszamy do śledzenia kolejnych numerów ŻARÓWKI!
      </p>
    </Reveal>
  </div>
);

export default KonkursPage;

