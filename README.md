# W Advokatbyrå

Moderniserad React-webbplats för en advokatbyrå i Malmö, ombyggd med fokus på tydligare design, bättre struktur och robustare drift.

## Stack

- React 19
- React Router 7
- Vite 6
- TypeScript 6
- Vitest + Testing Library
- Netlify Functions för nyhetsproxy

## Kom igång

```bash
npm install
npm run dev
```

## Viktiga skript

```bash
npm run dev
npm run build
npm run test
npm run typecheck
```

## Nyhetsflöde

Startsidan försöker hämta extern juridisk omvärldsbevakning via `NEWS_API_KEY`.
Om nyhetskällan inte är tillgänglig används ett inbyggt fallback-flöde så att startsidan fortfarande känns levande och stabil.

För lokal körning med Netlify Functions:

```bash
NEWS_API_KEY=din_nyckel netlify dev
```

Om du bara kör `npm run dev` fungerar sajten fortfarande, men nyhetssektionen visar fallback-innehåll tills proxyn finns tillgänglig.

## Versionsgrenar

- `version/0-original`: originalet från GitHub
- `version/1-foundation`: ny grund med Vite, React 19 och modern routing
- `version/2-modern-ui`: ny visuell riktning, videohero och sökbar tjänsteöversikt
- `version/3-robust`: tåligare nyhetsflöde, förbättrad Netlify-funktion och uppdaterad dokumentation

## Deploy

Projektet är förberett för Netlify:

- byggkommando: `npm run build`
- publiceringsmapp: `dist`
- functions-mapp: `netlify/functions`

SPA-routing och `/api/news` är konfigurerade i `netlify.toml`.
