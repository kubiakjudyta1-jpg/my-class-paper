import { Mail, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const KontaktPage = () => (
  <div className="space-y-8 max-w-2xl mx-auto">
    <Reveal>
      <h2 className="newspaper-section-title text-center">Kontakt</h2>
      <div className="newspaper-divider mt-4" />
    </Reveal>

    <Reveal delay={100} className="glass rounded-xl p-8 text-center space-y-6">
      <Mail className="w-16 h-16 text-primary mx-auto" />
      <h3 className="text-2xl font-bold text-card-foreground">Napisz do nas!</h3>
      <p className="text-foreground leading-relaxed">
        Chcielibyśmy, żebyście dzielili się z nami swoimi osiągnięciami i pomysłami na nowe artykuły. Z tego powodu założyliśmy dla Was internetową skrzynkę pocztową Gmail.
      </p>

      <a
        href="mailto:zarowkasp8@gmail.com"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity"
      >
        <Send className="w-5 h-5" />
        zarowkasp8@gmail.com
      </a>

      <p className="text-muted-foreground text-sm">
        Zachęcamy do przesyłania informacji!
      </p>
    </div>
  </div>
);

export default KontaktPage;
