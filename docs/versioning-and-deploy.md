# Versionering och deploy

## Rekommenderad branschpraxis för det här repot

- Använd `master` som produktionsgren för den version som ska ligga live.
- Spara större milstolpar som separata grenar under `version/*` i stället för att skapa nya repositories.
- Märk produktionsklara leveranser med Git-tags, till exempel `release/2026-04-30-mobile-first-refresh`.
- Gör vanliga ändringar via featuregrenar och mergea tillbaka till `master` när build och test är gröna.

## Befintliga snapshot-grenar

Det här repot har redan en bra grund att bygga vidare på med följande snapshots:

- `version/0-original`
- `version/1-foundation`
- `version/2-modern-ui`
- `version/3-robust`
- `version/4-node24-netlify`

Nästa naturliga steg efter den här uppdateringen är att skapa en ny snapshotgren, till exempel `version/5-mobile-first-refresh`.

## Netlify-flöde

- `netlify.toml` styr byggkommando, publiceringsmapp och SPA-routing.
- Om GitHub-repot redan är kopplat direkt till Netlify kommer varje push till `master` att kunna deployas kontinuerligt därifrån.
- Workflow-filen `.github/workflows/netlify-deploy.yml` bygger och testar repot på pull requests och pushar.
- Samma workflow kan även deploya till Netlify vid push till `master` om GitHub-secrets `NETLIFY_AUTH_TOKEN` och `NETLIFY_SITE_ID` finns satta.

## Praktiskt arbetssätt framåt

1. Skapa en featuregren för större ändringar.
2. Kör tester och build lokalt eller via GitHub Actions.
3. Mergea till `master` när ändringen är redo.
4. Skapa en ny `version/*`-gren eller en release-tag när du vill frysa ett viktigt steg i historiken.

