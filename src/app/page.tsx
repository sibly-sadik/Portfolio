import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#05070d] text-white selection:bg-amber-500 selection:text-black">
      {/* Interactive Custom Magnetic Cursor */}
      <CustomCursor />

      {/* Floating Glassmorphic Navigation */}
      <Navbar />

      {/* Hero: 500vh Sticky Scrollytelling Sequence Canvas + Parallax Overlay */}
      <ScrollyCanvas />

      {/* Ambient Seamless Gradient Transition */}
      <div className="relative w-full h-32 bg-gradient-to-b from-[#05070d] to-[#070b14] pointer-events-none" />

      {/* Work Grid: 4 Glass-morphism Case Studies */}
      <div className="relative bg-[#070b14]">
        <Projects />
      </div>

      {/* About Section: Manifesto & Performance KPIs */}
      <div className="relative bg-[#05070d]">
        <About />
      </div>

      {/* Skills Matrix: Bento Grid of Technical Capabilities */}
      <div className="relative bg-[#070b14]">
        <Skills />
      </div>

      {/* Experience & Recognition Timeline */}
      <div className="relative bg-[#05070d]">
        <Experience />
      </div>

      {/* Interactive Contact & Comprehensive Footer */}
      <div className="relative bg-[#030408]">
        <Contact />
      </div>
    </main>
  );
}
