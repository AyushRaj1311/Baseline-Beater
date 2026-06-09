import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Performance } from "@/components/sections/performance";
import { Improvements } from "@/components/sections/improvements";
import { MathExplanation } from "@/components/sections/math-explanation";
import { Tech } from "@/components/sections/tech";
import { Results } from "@/components/sections/results";
import { Repo } from "@/components/sections/repo";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Performance />
        <Improvements />
        <MathExplanation />
        <Tech />
        <Results />
        <Repo />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
