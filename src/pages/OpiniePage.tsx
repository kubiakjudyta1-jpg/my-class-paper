import { useState } from "react";
import { MessageSquare, Send, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface Opinion {
  id: number;
  name: string;
  rating: number;
  message: string;
  date: string;
}

const OpiniePage = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [message, setMessage] = useState("");
  const [opinions, setOpinions] = useState<Opinion[]>([
    {
      id: 1,
      name: "Ania z 6b",
      rating: 5,
      message: "Super gazetka! Czekam na następne wydanie 😊",
      date: "2026-03-15",
    },
    {
      id: 2,
      name: "Kacper z 7a",
      rating: 4,
      message: "Fajne aktywne przerwy, więcej takich pomysłów!",
      date: "2026-03-18",
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedMessage || rating === 0) {
      toast({
        title: "Uzupełnij formularz",
        description: "Podaj imię, ocenę i treść opinii.",
        variant: "destructive",
      });
      return;
    }

    if (trimmedName.length > 50 || trimmedMessage.length > 500) {
      toast({
        title: "Za długi tekst",
        description: "Imię max 50, opinia max 500 znaków.",
        variant: "destructive",
      });
      return;
    }

    const newOpinion: Opinion = {
      id: Date.now(),
      name: trimmedName,
      rating,
      message: trimmedMessage,
      date: new Date().toISOString().split("T")[0],
    };

    setOpinions((prev) => [newOpinion, ...prev]);
    setName("");
    setRating(0);
    setMessage("");
    toast({ title: "Dziękujemy!", description: "Twoja opinia została dodana." });
  };

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <h2 className="newspaper-section-title text-center">Opinie</h2>
      <div className="newspaper-divider" />

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-card border-2 border-primary rounded-lg p-6 space-y-4"
      >
        <h3 className="font-serif text-xl font-bold text-card-foreground flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-primary" />
          Zostaw swoją opinię
        </h3>

        <Input
          placeholder="Twoje imię (np. Ania z 6b)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={50}
          className="bg-background"
        />

        <div className="space-y-1">
          <p className="text-sm font-semibold text-card-foreground">Ocena:</p>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="p-0.5"
              >
                <Star
                  className={`w-7 h-7 transition-colors ${
                    star <= (hoverRating || rating)
                      ? "fill-primary text-primary"
                      : "text-muted-foreground"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <Textarea
          placeholder="Napisz co sądzisz o naszej gazetce..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={500}
          rows={3}
          className="bg-background"
        />

        <Button type="submit" className="w-full gap-2">
          <Send className="w-4 h-4" />
          Wyślij opinię
        </Button>
      </form>

      {/* Opinions list */}
      <div className="space-y-4">
        {opinions.map((op) => (
          <div
            key={op.id}
            className="bg-card border border-border rounded-lg p-4 space-y-2"
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-card-foreground">{op.name}</span>
              <span className="text-xs text-muted-foreground">{op.date}</span>
            </div>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className={`w-4 h-4 ${
                    s <= op.rating
                      ? "fill-primary text-primary"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <p className="text-foreground text-sm leading-relaxed">{op.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpiniePage;
