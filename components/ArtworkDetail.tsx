import Image from "next/image";
import type { Artwork } from "@/lib/data";

export default function ArtworkDetail({ artwork }: { artwork: Artwork }) {
  return (
    <>
      <div className="pageHead">
        <p className="eyebrow monoInk">Multiple Objects on Sheet Metal</p>
        <h1>{artwork.title}</h1>
      </div>

      <div className="wide">
        <div className="artHeroMedia">
          <Image
            src={artwork.woodPanel.image}
            alt={`${artwork.title} — ${artwork.woodPanel.styleLabel}`}
            fill
            sizes="(max-width: 780px) 100vw, 1080px"
            priority
          />
        </div>
      </div>
      <div className="heroCaption wide">
        <span>
          <span className="hcLabel">Title</span>
          {artwork.title}
        </span>
        <span>
          <span className="hcLabel">Dimension</span>
          {artwork.woodPanel.size}
        </span>
        <span>
          <span className="hcLabel">Style</span>
          {artwork.woodPanel.styleLabel}
        </span>
        <span>
          <span className="hcLabel">Technique</span>
          Sheet-metal intaglio, multiple objects
        </span>
        <span>
          <span className="hcLabel">Year</span>
          {artwork.woodPanel.year}
        </span>
      </div>

      <div className="aboutBody">
        <h2>Art Media</h2>
        <ul className="mediaList">
          {artwork.media.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
        {artwork.description.map((para, i) => (
          <p className="bodyText" key={i}>
            {para}
          </p>
        ))}
      </div>

      <section className="workCompare wide">
        <p className="eyebrow monoInk">Two renderings of one composition</p>
        <div className="wcGrid">
          {[artwork.woodPanel, artwork.plastoCast].map((v) => (
            <figure className="wcTile" key={v.figureLabel}>
              <div className="wcMedia">
                <Image src={v.image} alt={`${artwork.title} — ${v.styleLabel}`} fill sizes="(max-width: 700px) 100vw, 50vw" />
              </div>
              <figcaption className="wcCaption">
                <span className="wcCaptionTitle">{v.styleLabel}</span>
                <span className="wcCaptionMeta">
                  {v.size} · {v.year}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
