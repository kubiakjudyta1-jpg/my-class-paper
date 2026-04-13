import { NavLink, Outlet } from "react-router-dom";
import { Lightbulb, Newspaper, Trophy, Calendar, Gift, BookOpen, Mail } from "lucide-react";

const navItems = [
  { to: "/", label: "Strona Główna", icon: Newspaper },
  { to: "/newsy", label: "Newsy", icon: BookOpen },
  { to: "/konkurs", label: "Konkurs", icon: Trophy },
  { to: "/dni-wolne", label: "Dni Wolne", icon: Calendar },
  { to: "/swieta", label: "Święta", icon: Gift },
  { to: "/aktywne-przerwy", label: "Aktywne Przerwy", icon: Lightbulb },
  { to: "/kontakt", label: "Kontakt", icon: Mail },
];

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b-2 border-newspaper-border bg-card">
        <div className="container max-w-5xl mx-auto px-4 py-6 text-center">
          <h1 className="text-5xl md:text-6xl font-black font-serif tracking-tight text-newspaper-headline">
            ŻARÓWKA
          </h1>
          <p className="text-muted-foreground text-sm mt-1 font-sans">
            Gazetka Szkoły Podstawowej nr 8 im. Kpt. zw. Konstantego Maciejewicza w Kołobrzegu
          </p>
          <div className="newspaper-divider mt-4" />
        </div>

        {/* Navigation */}
        <nav className="container max-w-5xl mx-auto px-4 pb-3">
          <ul className="flex flex-wrap justify-center gap-1 md:gap-2">
            {navItems.map(({ to, label, icon: Icon }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-semibold font-sans transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-secondary-foreground hover:bg-secondary"
                    }`
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main */}
      <main className="flex-1 container max-w-5xl mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-newspaper-border bg-card py-4 text-center">
        <p className="text-muted-foreground text-xs font-sans">
          © 2026 ŻARÓWKA — Gazetka SP8 Kołobrzeg | Pierwsze wydanie
        </p>
      </footer>
    </div>
  );
};

export default Layout;
