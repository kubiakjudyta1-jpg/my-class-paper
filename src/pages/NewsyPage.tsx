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
        <h3 className="text-xl font-bold text-card-foreground">Recenzja filmu: „Charlie and the Chocolate Factory"</h3>
        <p className="text-foreground leading-relaxed">
          Charlie and the Chocolate Factory to magiczny, trochę mroczny i bardzo kreatywny film, który wciąga od pierwszych minut. Historia Charliego i ekscentrycznego Willy'ego Wonki jest pełna humoru, dziwnych przygód i ważnych lekcji o zachowaniu, rodzinie i skromności. Klimat stworzony przez Johnny Deppa jest naprawdę wyjątkowy — trochę dziwny, ale przez to zapadający w pamięć. Film jest świetny wizualnie, kolorowy i idealny zarówno dla młodszych, jak i starszych widzów.
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
