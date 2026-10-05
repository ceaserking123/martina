import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WorkStrip from "@/components/WorkStrip";
import ProjectsGrid from "@/components/ProjectsGrid";
import Gallery from "@/components/Gallery";
import Practice from "@/components/Practice";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { contact, documentedWorks, galleryImages } from "@/lib/data";

const studioItems = galleryImages.map((src, i) => ({
  src,
  alt: `Studio photograph ${i + 1} by Martina Uremu Eghwrudjakpor`,
  label: String(i + 1).padStart(2, "0"),
}));

const documentedItems = documentedWorks.map((w) => ({
  src: w.src,
  alt: `${w.title}, artwork by Martina Uremu Eghwrudjakpor`,
  label: w.title,
}));

export const metadata: Metadata = {
  title: { absolute: "Martina Uremu Eghwrudjakpor · Printmaker, educator and researcher" },
  description:
    "Printmaker, educator and researcher Martina Uremu Eghwrudjakpor, working in sheet-metal intaglio from Warri, Delta State, Nigeria. Selected works, studio gallery, biography and contact.",
  alternates: { canonical: "/" },
};

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
          <Gallery items={studioItems} />
        </div>

        <div className="wide">
          <section id="documented" className="homeSection">
            <p className="eyebrow">Documented works</p>
            <h2>From the PhD documentation</h2>
          </section>
        </div>
        <div style={{ paddingBottom: "1rem" }}>
          <Gallery items={documentedItems} />
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
