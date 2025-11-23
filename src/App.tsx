import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { FloatingContact } from "@/components/FloatingContact";
import Index from "./pages/Index";
import AliCloud from "./pages/AliCloud";
import AWS from "./pages/AWS";
import AWSEC2 from "./pages/AWSEC2";
import Migration from "./pages/Migration";
import Partner from "./pages/Partner";
import Tutorials from "./pages/Tutorials";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <FloatingContact />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/alicloud" element={<AliCloud />} />
              <Route path="/aws" element={<AWS />} />
              <Route path="/aws-ec2" element={<AWSEC2 />} />
              <Route path="/migration" element={<Migration />} />
              <Route path="/partner" element={<Partner />} />
              <Route path="/tutorials" element={<Tutorials />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
