import { useState } from "react";
import { games, type GameEntry } from "../data/siteContent";
import { ImageZoomOverlay } from "./ImageZoomOverlay";
import { ZoomButton } from "./ZoomButton";

export function Games() {
  const [zoomedGame, setZoomedGame] = useState<GameEntry | null>(null);

  return (
    <section id="games" className="content-section">
      <div className="section-heading">
        <p className="section-kicker">Games</p>
        <h2>Where we play</h2>
      </div>
      <div className="game-grid">
        {games.map((game) => (
          <article className="game-card" key={game.title}>
            <img src={game.image} alt={`${game.title} artwork`} />
            <ZoomButton
              label={`Zoom into ${game.title}`}
              onClick={() => setZoomedGame(game)}
            />
            <div className="game-card-body">
              <h3>{game.title}</h3>
              <dl className="game-meta">
                <div>
                  <dt>Guild</dt>
                  <dd>{game.guildName}</dd>
                </div>
                <div>
                  <dt>Server</dt>
                  <dd>{game.server}</dd>
                </div>
                <div>
                  <dt>{game.detailLabel}</dt>
                  <dd>{game.detailValue}</dd>
                </div>
              </dl>
              <p>{game.description}</p>
            </div>
          </article>
        ))}
      </div>
      {zoomedGame && (
        <ImageZoomOverlay
          image={zoomedGame.image}
          alt={`${zoomedGame.title} full size`}
          onClose={() => setZoomedGame(null)}
        />
      )}
    </section>
  );
}
