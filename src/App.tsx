import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import NewsyPage from "./pages/NewsyPage";
import KonkursPage from "./pages/KonkursPage";
import DniWolnePage from "./pages/DniWolnePage";
import SwietaPage from "./pages/SwietaPage";
import AktywnePrzerwyPage from "./pages/AktywnePrzerwyPage";
import KontaktPage from "./pages/KontaktPage";
import OpiniePage from "./pages/OpiniePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/my-class-paper">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/newsy" element={<NewsyPage />} />
            <Route path="/konkurs" element={<KonkursPage />} />
            <Route path="/dni-wolne" element={<DniWolnePage />} />
            <Route path="/swieta" element={<SwietaPage />} />
            <Route path="/aktywne-przerwy" element={<AktywnePrzerwyPage />} />
            <Route path="/kontakt" element={<KontaktPage />} />
            <Route path="/opinie" element={<OpiniePage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
