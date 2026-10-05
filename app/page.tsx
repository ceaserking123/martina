import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WorkStrip from "@/components/WorkStrip";
import ProjectsGrid from "@/components/ProjectsGrid";
import Gallery from "@/components/Gallery";
import Practice from "@/components/Practice";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { contact } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WorkStrip />

        <div className="wide">
          <section id="projects" className="homeSection">
            <p className="eyebrow">Projects</p>
            <h2>Selected work</h2>
          </section>
        </div>
        <div style={{ paddingBottom: "1rem" }}>
          <ProjectsGrid />
        </div>

        <div className="wide">
          <section id="path" className="homeSection">
            <p className="eyebrow">Gallery</p>
            <h2>Studio gallery</h2>
          </section>
        </div>
        <div style={{ paddingBottom: "1rem" }}>
          <Gallery />
        </div>

        <div className="wrap">
          <section id="practice" className="homeSection">
            <p className="eyebrow">Practice</p>
            <h2>Research interests and recognition</h2>
            <Practice />
          </section>

          <section id="contact" className="homeSection">
            <p className="eyebrow">Get in touch</p>
            <h2>Contact</h2>
            <p className="bodyText">For speaking, teaching collaborations, research partnerships, or studio inquiries.</p>
            <div className="contactGrid">
              <div className="contactDetails">
                <div className="cdRow">
                  <span className="cdLabel">Email</span>
                  <span className="cdValue">{contact.email}</span>
                </div>
                <div className="cdRow">
                  <span className="cdLabel">Phone</span>
                  <span className="cdValue">{contact.phone}</span>
                </div>
                <div className="cdRow">
                  <span className="cdLabel">Studio</span>
                  <span className="cdValue">{contact.studio}</span>
                </div>
              </div>
              <ContactForm />
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
}
