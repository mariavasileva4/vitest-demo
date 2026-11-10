# Vitest Demo – Alters-Check (Live-Demo)

Ein kleines Projekt mit **einem Thema**: Ist eine Person volljährig?
Man gibt ein Alter ein – die App zeigt „Volljährig“ oder „Nicht volljährig“.

| Datei | Was ist das? |
|---|---|
| `src/volljaehrig.js` | Die **Funktion** `istVolljaehrig`: 18 Jahre oder älter? (die Rechnung im Hintergrund) |
| `src/volljaehrig.test.js` | 3 Tests: 17 Jahre, 30 Jahre und genau 18 Jahre |
| `src/components/AlterCheck.vue` | Die **Komponente**: Eingabefeld + Text, den der Nutzer sieht. Sie benutzt `istVolljaehrig`. |
| `src/components/AlterCheck.test.js` | 2 Tests: Alter eingeben → steht der richtige Text da? |
| `vite.config.js` | Die Einstellungen – für App UND Tests |

**Zusammen: 5 Tests.**
