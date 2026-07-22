import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioItems, type PortfolioItem } from "../data/siteContent";
import { ImageZoomOverlay } from "./ImageZoomOverlay";
import { ZoomButton } from "./ZoomButton";

const AUTOPLAY_INTERVAL_MS = 4000;

function getItemAt(activeIndex: number, offset: number) {
  const length = portfolioItems.length;
  return portfolioItems[(activeIndex + offset + length) % length];
}

export function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [zoomedItem, setZoomedItem] = useState<PortfolioItem | null>(null);

  function showPrevious() {
    setActiveIndex(
      (current) => (current - 1 + portfolioItems.length) % portfolioItems.length
    );
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % portfolioItems.length);
  }

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(showNext, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [isPaused, activeIndex]);

  const previousItem = getItemAt(activeIndex, -1);
  const activeItem = getItemAt(activeIndex, 0);
  const nextItem = getItemAt(activeIndex, 1);

  return (
    <section id="portfolio" className="content-section">
      <div className="section-heading">
        <p className="section-kicker">Portfolio</p>
        <h2>Guild moments</h2>
      </div>
      <div
        className="portfolio-slideshow"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="slideshow-track">
          <article
            className="portfolio-card portfolio-card-side"
            key={`prev-${previousItem.title}`}
          >
            <img
              src={previousItem.image}
              alt={`${previousItem.title} preview`}
            />
            <ZoomButton
              label={`Zoom into ${previousItem.title}`}
              onClick={() => setZoomedItem(previousItem)}
            />
          </article>
          <article
            className="portfolio-card portfolio-card-active"
            key={`active-${activeItem.title}`}
          >
            <img src={activeItem.image} alt={`${activeItem.title} preview`} />
            <ZoomButton
              label={`Zoom into ${activeItem.title}`}
              onClick={() => setZoomedItem(activeItem)}
            />
            <div className="portfolio-card-body">
              <span>{activeItem.tag}</span>
              <h3>{activeItem.title}</h3>
              <p>{activeItem.description}</p>
            </div>
          </article>
          <article
            className="portfolio-card portfolio-card-side"
            key={`next-${nextItem.title}`}
          >
            <img src={nextItem.image} alt={`${nextItem.title} preview`} />
            <ZoomButton
              label={`Zoom into ${nextItem.title}`}
              onClick={() => setZoomedItem(nextItem)}
            />
          </article>
        </div>
        {zoomedItem && (
          <ImageZoomOverlay
            image={zoomedItem.image}
            alt={`${zoomedItem.title} full size`}
            onClose={() => setZoomedItem(null)}
          />
        )}
        <div className="slideshow-controls">
          <button
            type="button"
            className="slideshow-arrow"
            onClick={showPrevious}
            aria-label="Previous guild moment"
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <div className="slideshow-dots">
            {portfolioItems.map((item, index) => (
              <button
                type="button"
                key={item.title}
                className={`slideshow-dot${
                  index === activeIndex ? " active" : ""
                }`}
                aria-label={`Go to ${item.title}`}
                aria-current={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          <button
            type="button"
            className="slideshow-arrow"
            onClick={showNext}
            aria-label="Next guild moment"
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
