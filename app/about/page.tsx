import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PlateIcon from "@/components/PlateIcon";
import { aboutPhotos } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — Martina Eghwrudjakpor",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <div className="pageHead">
          <p className="eyebrow monoInk">About</p>
          <h1>Two decades in the classroom. A doctorate in printmaking. One research practice.</h1>
        </div>
        <div className="aboutLede">
          <p>
            Martina Eghwrudjakpor is a printmaker, art educator and school leader based in Warri, Delta State,
            working chiefly in sheet-metal intaglio.
          </p>
        </div>
        <div className="photostrip">
          {aboutPhotos.map((p) => {
            const img = p.images[0];
            return (
              <div className="psTile" key={p.label}>
                {img ? (
                  <Image src={img} alt={p.label} fill sizes="(max-width: 700px) 50vw, 25vw" />
                ) : (
                  <PlateIcon className="plate" />
                )}
                <span className="psLabel">{p.label}</span>
              </div>
            );
          })}
        </div>
        <div className="aboutBody">
          <p className="bodyText">
            Her career started in the classroom, not the studio. In 1993 she took a teaching post at Ekakpamre
            Grammar School in Delta State, the first of five schools where she would work over more than two
            decades. She later moved into school leadership, serving as Vice-Principal at Ekpan Secondary School,
            with responsibilities spanning discipline, counselling, examinations, and curriculum delivery.
          </p>
          <p className="bodyText">
            In 2014, well into her teaching career, she enrolled full-time at the University of Benin for
            postgraduate study: a Master of Fine and Applied Arts in Advertising, completed in 2017, followed by a
            PhD in Printmaking, awarded in 2026 for a dissertation on composing multiple objects on sheet metal.
          </p>
          <p className="bodyText">
            That research practice grew out of real studio time. In 2022 she spent an intensive period doing field
            and studio work at the Ovuomaroro Gallery in Mushin, Lagos, under the mentorship of Dr. Bruce
            Onobrakpeya, widely regarded as Nigeria&rsquo;s foremost printmaker. She has kept returning to his
            foundation&rsquo;s Harmattan Workshop since, from its 21st edition in 2019 to its 28th in 2026.
          </p>
        </div>
        <blockquote className="pullQuote">
          &ldquo;Dedication, technical competence, and collaborative endeavour.&rdquo;
          <cite>Dr. Bruce Onobrakpeya, MFR, NNOM &middot; Letter of Recommendation, Dec 2022</cite>
        </blockquote>
        <Footer />
      </main>
    </>
  );
}
