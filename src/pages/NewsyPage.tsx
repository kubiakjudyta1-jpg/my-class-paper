import schoolImg from "@/assets/school-building.jpg";
import { Film, Globe } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const NewsyPage = () => (
  <div className="space-y-8">
    <Reveal>
      <h2 className="newspaper-section-title text-center">Newsy</h2>
      <div className="newspaper-divider mt-4" />
    </Reveal>

    <div className="grid md:grid-cols-2 gap-8">
      <Reveal as="article" className="space-y-4">
        <h3 className="text-2xl font-bold text-card-foreground">Drugie wydanie!</h3>
        <p className="drop-cap leading-relaxed text-foreground">
          Z przyjemnością prezentujemy drugie wydanie naszej szkolnej gazetki. Po pierwszym numerze, który spotkał się z dużym zainteresowaniem, przygotowaliśmy dla Was jeszcze więcej ciekawych treści. Zapraszamy do lektury!
        </p>
      </Reveal>
      <Reveal delay={120} className="glass rounded-xl overflow-hidden">
        <img src={schoolImg} alt="Szkoła Podstawowa nr 8" width={800} height={512} className="w-full object-cover" loading="lazy" />
      </Reveal>
    </div>

    <div className="newspaper-divider" />

    <Reveal as="article" className="glass rounded-xl p-6 flex gap-4 items-start">
      <Film className="w-7 h-7 text-primary shrink-0 mt-1" />
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-card-foreground">Recenzja filmu: „The Angry Birds Movie"</h3>
        <p className="text-foreground leading-relaxed">
          The Angry Birds Movie to zabawny film animowany oparty na popularnej grze mobilnej. Opowiada historię ptaków żyjących na spokojnej wyspie, których życie zmienia się po przybyciu tajemniczych zielonych świnek. Główny bohater, Red, próbuje odkryć ich prawdziwe zamiary. Film jest pełen humoru, ciekawych postaci i kolorowej animacji. Moim zdaniem to dobra animacja dla dzieci i młodzieży, ponieważ jest śmieszna i pokazuje, jak ważna jest przyjaźń oraz współpraca.
        </p>
      </div>
    </Reveal>

    <Reveal as="article" delay={120} className="glass rounded-xl p-6 flex gap-4 items-start">
      <Globe className="w-7 h-7 text-primary shrink-0 mt-1" />
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-card-foreground">Gazetka internetowa</h3>
        <p className="text-foreground leading-relaxed">
          Chcielibyśmy, żebyście mogli mieć nas zawsze przy sobie. Z tego powodu założyliśmy dla Was gazetkę internetową. To nowoczesny sposób na dzielenie się informacjami z całą społecznością szkolną. Można ją czytać w każdym miejscu i czasie, co sprawia, że jest bardzo wygodna i dostępna dla wszystkich.
        </p>
      </div>
    </Reveal>
  </div>
);

export default NewsyPage;
