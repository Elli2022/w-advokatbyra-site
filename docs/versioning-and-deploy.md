# Versionering och deploy

## Rekommenderad branschpraxis för det här repot

- Använd `master` som enda långlivade produktionsgren.
- Gör arbete i kortlivade feature-grenar och mergea tillbaka till `master`.
- Skapa kronologiska, annoterade Git-tags (`vMAJOR.MINOR.PATCH`) för releaser.
- Dokumentera releaser i `CHANGELOG.md` och gärna i GitHub Releases.
- Undvik långlivade `version/*`-grenar om du inte underhåller flera versioner parallellt.

## Release-modell (SemVer)

- `MAJOR`: brytande ändringar.
- `MINOR`: ny funktionalitet utan brytande ändringar.
- `PATCH`: buggfixar, förbättringar och små justeringar.

Exempel:

- `v1.2.0` -> ny funktion eller större UI-förbättring.
- `v1.2.1` -> mindre fix utan ändrat API/beteende för konsumenter.

## Netlify-flöde

- `netlify.toml` styr build-kommando, publiceringsmapp och functions.
- Netlify Git integration bör deploya automatiskt vid push till `master`.
- `.github/workflows/netlify-deploy.yml` används för CI-validering (test + build).
- Deploy ska i första hand observeras i Netlify-dashboard för rätt site.

## Praktiskt arbetssätt framåt

1. Skapa en feature-gren från `master`.
2. Kör `npm run test:ci` och `npm run build`.
3. Öppna PR och mergea till `master`.
4. Tagga releasen, uppdatera changelog och publicera GitHub Release.

