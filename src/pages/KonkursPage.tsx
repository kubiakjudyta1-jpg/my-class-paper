import { Trophy, Camera } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import wiosnaWObiektywie from "@/assets/wiosna-w-obiektywie.jpg";
import michalDyplom from "@/assets/michal-dyplom.jpg";

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
        Mamy zwycięzcę naszego konkursu fotograficznego „Wiosna w obiektywie"! Pierwsze miejsce zajął <strong>Michał Gierlicz z klasy 6b</strong>. Serdecznie gratulujemy! Poniżej krótka rozmowa, którą przeprowadziła z nim nasza redakcja.
      </p>

      <div className="glass rounded-xl p-5 space-y-2 text-foreground leading-relaxed">
        <p><strong>— Cześć, jak się nazywasz?</strong></p>
        <p>— Michał.</p>
        <p><strong>— Zająłeś pierwsze miejsce w konkursie pt. „Wiosna w obiektywie". Powiedz mi, czy interesujesz się fotografowaniem na co dzień?</strong></p>
        <p>— Tak, najczęściej robię zdjęcia wtedy, kiedy chodzę na spacery z moją rodziną, ale też kiedy idę do sklepu czy na basen.</p>
        <p><strong>— Długo już się tym interesujesz?</strong></p>
        <p>— Już trochę czasu, można by powiedzieć, że od 4 klasy.</p>
        <p><strong>— To świetnie! Gratulujemy i życzymy dalszych sukcesów!</strong></p>
        <p>— Dzięki.</p>
      </div>

      <figure className="space-y-2">
        <img
          src={wiosnaWObiektywie}
          alt="Zwycięskie zdjęcie konkursu Wiosna w obiektywie — motyl rusałka pawik na gałęzi kwitnącej tarniny, autor: Michał Gierlicz, klasa 6b"
          className="w-full rounded-xl shadow-lg"
          loading="lazy"
        />
        <figcaption className="text-center text-sm text-muted-foreground italic">
          Zwycięskie zdjęcie — fot. Michał Gierlicz, kl. 6b
        </figcaption>
      </figure>

      <figure className="space-y-2">
        <div className="w-full overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
          <img
            src={michalDyplom}
            alt="Michał Gierlicz z klasy 6b z dyplomem za pierwsze miejsce w konkursie Wiosna w obiektywie"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 18%" }}
            loading="lazy"
          />
        </div>
        <figcaption className="text-center text-sm text-muted-foreground italic">
          Michał Gierlicz odbiera dyplom za 1. miejsce
        </figcaption>
      </figure>
    </Reveal>
  </div>
);

export default KonkursPage;
