import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import About from "@/components/About";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#241C15]">
      <Navbar onOpenContact={() => setContactOpen(true)} />

      <main className="flex-1">
        <Hero onOpenContact={() => setContactOpen(true)} />
        <Projects />
        <Skills />
        <Achievements />
        <About />
      </main>

      <Footer onOpenContact={() => setContactOpen(true)} />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}
