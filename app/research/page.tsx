import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { publications } from "@/lib/data";

export const metadata: Metadata = {
  title: "Research — Martina Eghwrudjakpor",
};

export default function ResearchPage() {
  return (
    <>
      <Nav />
      <main>
        <div className="pageHead">
          <p className="eyebrow monoInk">Research</p>
          <h1>Published and research work</h1>
        </div>
        <div className="researchList">
          {publications.map((pub, i) => (
            <div className="rItem" key={pub.title}>
              <span className="rNum">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="rTitle">{pub.title}</p>
                <p className="rMeta">{pub.meta}</p>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </main>
    </>
  );
}
