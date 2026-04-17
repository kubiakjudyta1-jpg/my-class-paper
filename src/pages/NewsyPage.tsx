import schoolImg from "@/assets/school-building.jpg";
import { TreePine, Landmark, Film } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const NewsyPage = () => (
  <div className="space-y-8">
    <Reveal>
      <h2 className="newspaper-section-title text-center">Newsy</h2>
      <div className="newspaper-divider mt-4" />
    </Reveal>

    <div className="grid md:grid-cols-2 gap-8">
      <Reveal as="article" className="space-y-4">
        <h3 className="text-2xl font-bold text-card-foreground">Pierwsze wydanie!</h3>
        <p className="drop-cap leading-relaxed text-foreground">
          Witamy serdecznie czytelników pierwszego numeru naszego nowego pisma! Nie mamy jeszcze logo i zachęcamy Was do pomocy przy jego stworzeniu. Chcieli byśmy, aby gazeta stała się znakiem rozpoznawczym naszej szkoły. Będziemy pokazywać w niej najważniejsze wydarzenia z naszego szkolnego życia. Dzisiaj pokażemy Wam marcowe i kwietniowe wieści.
        </p>
      </Reveal>
      <Reveal delay={120} className="glass rounded-xl overflow-hidden">
        <img src={schoolImg} alt="Szkoła Podstawowa nr 8" width={800} height={512} className="w-full object-cover" loading="lazy" />
      </Reveal>
    </div>

    <div className="newspaper-divider" />

    <Reveal as="article" className="glass rounded-xl p-6 flex gap-4 items-start">
      <TreePine className="w-7 h-7 text-primary shrink-0 mt-1" />
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-card-foreground">Kiermasz Wielkanocny</h3>
        <p className="text-foreground">
          <strong>27 marca</strong> o godzinie 9:00 na pierwszym piętrze odbędzie się Kiermasz Wielkanocny. Będzie można kupić dekoracje świąteczne i popcorn. Zachęcamy do zakupów!
        </p>
      </div>
    </Reveal>

    <Reveal as="article" delay={80} className="glass rounded-xl p-6 flex gap-4 items-start">
      <Landmark className="w-7 h-7 text-primary shrink-0 mt-1" />
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-card-foreground">81. rocznica walk o Kołobrzeg</h3>
        <p className="text-foreground">
          <strong>18 marca</strong> obchodziliśmy 81 rocznicę walk o Kołobrzeg. Jest to jedna z najważniejszych dat dla naszego miasta. W tym roku aby to uczcić niektórzy uczniowie naszej szkoły wzięli udział w takich atrakcjach jak gra miejska i sztafety, które odbyły się pod tym tematem.
        </p>
      </div>
    </Reveal>

    <Reveal as="article" delay={160} className="glass rounded-xl p-6 flex gap-4 items-start">
      <Film className="w-7 h-7 text-primary shrink-0 mt-1" />
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-card-foreground">Ciekawostka</h3>
        <p className="text-foreground">
          Potrzeba ponad <strong>60 tysięcy lat</strong>, aby obejrzeć wszystkie filmiki zamieszczone obecnie na Youtube!
        </p>
      </div>
    </Reveal>
  </div>
);

export default NewsyPage;
