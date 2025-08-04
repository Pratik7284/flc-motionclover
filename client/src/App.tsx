import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import PageTransition from "@/components/ui/page-transition";
import CursorFollower from "@/components/ui/cursor-follower";
import ScrollProgress from "@/components/ui/scroll-progress";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <PageTransition>
          <div className="hidden md:block">
            <CursorFollower />
          </div>
          <ScrollProgress />
          <Toaster />
          <Router />
        </PageTransition>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
