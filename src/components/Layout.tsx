import { NavLink, Outlet } from "react-router-dom";
import { Lightbulb, Newspaper, Trophy, Calendar, Gift, BookOpen, Mail, MessageSquare, Sun } from "lucide-react";

const VACATION_START = new Date(2026, 5, 27); // 27 czerwca 2026
const getDaysToVacation = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = Math.ceil((VACATION_START.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  return Math.max(0, diff);
};

const navItems = [
  { to: "/", label: "Strona Główna", icon: Newspaper },
  { to: "/newsy", label: "Newsy", icon: BookOpen },
  { to: "/konkurs", label: "Konkurs", icon: Trophy },
  { to: "/dni-wolne", label: "Nietypowe Święta", icon: Calendar },
  { to: "/aktywne-przerwy", label: "Aktywne Przerwy", icon: Lightbulb },
  { to: "/kontakt", label: "Kontakt", icon: Mail },
  { to: "/opinie", label: "Opinie", icon: MessageSquare },
];

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col liquid-bg">
      {/* Header */}
      <header className="glass-header sticky top-0 z-50">
        <div className="container max-w-5xl mx-auto px-4 py-6 text-center">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight" style={{ color: 'hsl(var(--newspaper-headline))' }}>
            ŻARÓWKA
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Gazetka Szkoły Podstawowej nr 8 im. Kpt. zw. Konstantego Maciejewicza w Kołobrzegu
          </p>
          <p className="text-muted-foreground text-xs mt-1 flex items-center justify-center gap-1 flex-wrap">
            Redakcja:
            <span className="inline-flex items-center gap-0.5 font-semibold">
              Kubiak Judyta <Lightbulb className="w-3.5 h-3.5 text-yellow-500" />
            </span>
            ,
            <span className="inline-flex items-center gap-0.5 font-semibold">
              Martyniuk Aleksandra <Lightbulb className="w-3.5 h-3.5 text-yellow-500 rotate-180" />
            </span>
          </p>
          <div className="newspaper-divider mt-4" />
        </div>

        {/* Navigation */}
        <nav className="container max-w-5xl mx-auto px-4 pb-3">
          <ul className="flex flex-wrap justify-center gap-1.5 md:gap-2">
            {navItems.map(({ to, label, icon: Icon }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? "glass-pill-active text-primary-foreground"
                        : "glass-pill text-secondary-foreground"
                    }`
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{label}</span>
                </NavLink>
              </li>
            ))}
            <li>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-semibold glass-pill text-secondary-foreground">
                <Sun className="w-4 h-4 text-yellow-500" />
                <span>Do wakacji: {getDaysToVacation()} dni</span>
              </div>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main */}
      <main className="flex-1 container max-w-5xl mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="glass-header py-4 text-center">
        <p className="text-muted-foreground text-xs">
          © 2026 ŻARÓWKA — Gazetka SP8 Kołobrzeg | Pierwsze wydanie
        </p>
        <p className="text-muted-foreground text-[10px] mt-2 px-4 max-w-2xl mx-auto italic">
          Przepraszamy za ewentualne błędy w tekście — strona jest tworzona przy pomocy sztucznej inteligencji, dlatego u każdej osoby może prezentować się nieco inaczej.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
