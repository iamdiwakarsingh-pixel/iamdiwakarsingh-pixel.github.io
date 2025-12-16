import { Switch, Route, Router } from "wouter"; // Ensure Router is imported from 'wouter'
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Research from "@/pages/Research";
import Teaching from "@/pages/Teaching";
import Contact from "@/pages/Contact";

// No changes needed in this function definition
function RouterComponent() { 
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/research" component={Research} />
      <Route path="/teaching" component={Teaching} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        
        {/* WRAP THE ROUTER WITH THE BASEPATH CONFIGURATION HERE */}
        <Router basepath="/The-Theory-Lab">
          <RouterComponent />
        </Router>

      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
