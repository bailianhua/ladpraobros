# Ladpraobros Guild Website

Simple one-page React site for the Ladpraobros game guild.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Lucide React icons

## Local Development

```bash
npm install
npm run dev
```

## Docker Compose

Build and run the production site locally:

```bash
docker compose up --build
```

The site will be available at <http://localhost:8081>.

To use a different host port:

```bash
APP_PORT=3000 docker compose up --build
```

## GitHub Pages

This project includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

1. Push the project to a GitHub repository.
2. In GitHub, open the repository settings.
3. Go to **Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Push to the `main` branch, or run the workflow manually from the **Actions** tab.

For a normal project repository, the site will deploy to:

```text
https://<github-username>.github.io/<repository-name>/
```

For a user or organization Pages repository named `<github-username>.github.io`,
the site will deploy to:

```text
https://<github-username>.github.io/
```

## Content To Replace

- Update the Discord invite and external URLs in `src/data/siteContent.ts`.
- Replace generated temporary images in `public/images/` with real game screenshots.
