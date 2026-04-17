import { TreePine, Landmark, Candy, Bird, Croissant, LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const items: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: TreePine,
    title: "Kiermasz Wielkanocny",
    text: "27 marca o godzinie 9:00 na pierwszym piętrze odbędzie się Kiermasz Wielkanocny. Będzie można kupić dekoracje świąteczne i popcorn. Zachęcamy do zakupów!",
  },
  {
    icon: Landmark,
    title: "81. rocznica walk o Kołobrzeg — 18 marca",
    text: "18 marca obchodziliśmy 81 rocznicę walk o Kołobrzeg. Jest to jedna z najważniejszych dat dla naszego miasta. W tym roku aby to uczcić niektórzy uczniowie naszej szkoły wzięli udział w takich atrakcjach jak gra miejska i sztafety, które odbyły się pod tym tematem.",
  },
  {
    icon: Candy,
    title: "Dzień Żelków — 28 marca",
    text: "Niezwykłe święto dla miłośników słodkości!",
  },
  {
    icon: Bird,
    title: "Światowy Dzień Gołębia — 9 kwietnia",
    text: "Dzień poświęcony tym pięknym ptakom.",
  },
  {
    icon: Croissant,
    title: "Europejski Dzień Śniadania — 24 kwietnia",
    text: "Świętujemy najważniejszy posiłek dnia!",
  },
];

const SwietaPage = () => (
  <div className="space-y-8 max-w-2xl mx-auto">
    <Reveal>
      <h2 className="newspaper-section-title text-center">Święta i wydarzenia</h2>
      <div className="newspaper-divider mt-4" />
    </Reveal>

    {items.map(({ icon: Icon, title, text }, i) => (
      <Reveal key={title} as="article" delay={i * 80} className="glass rounded-xl p-6 flex gap-4 items-start">
        <Icon className="w-8 h-8 text-primary shrink-0 mt-1" />
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-card-foreground">{title}</h3>
          <p className="text-foreground">{text}</p>
        </div>
      </Reveal>
    ))}
  </div>
);

export default SwietaPage;
