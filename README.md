## Eine kuratierte Linksammlung

Diese Linksammlung soll Initiativen, Projekte und Communities
sichtbar machen und helfen, dass sich Hackerinnen
(und die, die es werden wollen) im Internet finden,
inspirieren, austauschen und vernetzen können.

Unter Hackerinnen verstehen wir nicht-männliche Personen die sich für Computer und Technik interessieren.

## Dein Feedback

Es fehlt ein Eintrag oder du hast einen Fehler gefunden? Wir freuen uns über dein Feedback. Erstelle bitte ein [Github-Issue](https://github.com/hackerinnen/hackerinnen-list/issues).

## Projekt auf deinem Rechner starten

### Vorraussetzungen

- NodeJS and npm ([Anleitung](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))
- (NVM - [Node version manager](https://github.com/nvm-sh/nvm))

### Astro telemetry abschalten

Du möchtest keine Daten über dein Nutzungsverhalten an Astro senden? So stellt du das Tracking aus (im Terminal ausführen):

```cli
npm run astro telemetry disable
```

### App starten

Alle Kommandos werden vom Root-Verzeichnet, über den Terminal, ausgeführt.

1. NPM-Pakete installieren: `npm install`
1. Server starten: `npm run dev`
1. Webseite ist jetzt über localhost:3000 erreichbar

### Alle Kommandos

Alle Kommandos werden vom Root-Verzeichnet, über den Terminal, ausgeführt:

| Command           | Action                                                 |
| :---------------- | :----------------------------------------------------- |
| `npm install`     | Installieren der NPM-Pakete                            |
| `npm run dev`     | Starten des lokalen Dev-Servers unter `localhost:3000` |
| `npm run build`   | Bauen der Webseite für Produktion in `./dist/`         |
| `npm run preview` | Vorschau der lokal gebauten Webseite, vor dem Deployen |

### Nix, Flake, Justfile

Die Dateien `justfile`, `flake.nix`, ... kannst du mit guten Gewissen ignorieren. Diese gehören zu unserem Deployment und werden lokal nicht benötigt.

### Inhalte

Lokal werden Beispieldaten geladen.

In Produktion werden die Inhalte werden von [Airtable](https://airtable.com/) geladen. Dazu muss der Airtable Access Token als Environment Variable `SECRET_AIRTABLE_ACCESS_TOKEN` gesetzt werden.

### Astro Dokumentation

Die Astro Dokumentation findest du [hier](https://docs.astro.build).
