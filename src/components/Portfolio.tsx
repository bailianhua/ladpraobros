import { portfolioItems } from "../data/siteContent";

export function Portfolio() {
  return (
    <section id="portfolio" className="content-section">
      <div className="section-heading">
        <p className="section-kicker">Portfolio</p>
        <h2>Guild moments</h2>
        <p>
          Temporary artwork is included for the first version. Replace these
          with real in-game screenshots when you have them ready.
        </p>
      </div>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <article className="portfolio-card" key={item.title}>
            <img src={item.image} alt={`${item.title} preview`} />
            <div className="portfolio-card-body">
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
