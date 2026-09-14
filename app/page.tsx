import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WorkStrip from "@/components/WorkStrip";
import ProjectsGrid from "@/components/ProjectsGrid";
import Timeline from "@/components/Timeline";
import Practice from "@/components/Practice";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WorkStrip />

        <div className="wrap" style={{ maxWidth: 1080 }}>
          <section id="projects" className="homeSection">
            <p className="eyebrow">Projects</p>
            <h2>Selected work</h2>
          </section>
        </div>
        <div style={{ marginTop: "-2.4rem", paddingBottom: "1.5rem" }}>
          <ProjectsGrid />
        </div>

        <div className="wrap">
          <section id="path" className="homeSection">
            <p className="eyebrow">Path</p>
            <h2>Teaching, leadership &amp; research</h2>
            <Timeline />
          </section>

          <section id="practice" className="homeSection">
            <p className="eyebrow">Practice</p>
            <h2>Research interests &amp; recognition</h2>
            <Practice />
          </section>

          <section id="contact" className="homeSection">
            <p className="eyebrow">Get in touch</p>
            <h2>Contact</h2>
            <p className="bodyText">For speaking, teaching collaborations, research partnerships, or studio inquiries.</p>
            <ContactForm />
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
}
