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

---

## 1. Einmal vorbereiten (zu Hause, vor dem 13.11.)

1. **Node.js installieren:** Version 22.12 oder neuer (https://nodejs.org).
   Prüfen im Terminal: `node -v`
2. **Ordner in IntelliJ öffnen:** File → Open → Ordner `vitest-demo` auswählen.
3. **Terminal in IntelliJ öffnen:** unten auf „Terminal“ klicken.
4. **Pakete installieren:**
   ```
   npm install
   ```
5. **Einmal testen:**
   ```
   npm test
   ```
   Es sollte stehen: `Tests 5 passed (5)`. Dann ist alles bereit.
   Mit `q` beendest du Vitest wieder.
6. **Schrift groß stellen:** View → Appearance → Presentation Mode.

---

## 2. Ablauf der Live-Demo (ca. 3:30 Minuten)

### Schritt 1 – Die App zeigen (was der Nutzer sieht)
- Im Terminal: `npm run dev` → den Link öffnen (meist http://localhost:5173).
- **17** eingeben → „Nicht volljährig“. **18** eingeben → „Volljährig“.
- Sagen: „Genau das prüfen unsere Tests – automatisch.“
- Zurück zu IntelliJ, im Terminal mit `Strg + C` beenden.

### Schritt 2 – Tests starten (alles grün)
- Im Terminal: `npm test`
- Ergebnis: **5 Tests grün.** Vitest läuft weiter und beobachtet die Dateien (Watch-Mode).

### Schritt 3 – Fehler einbauen (rot)
- `src/volljaehrig.js` öffnen und ändern:
  `return alter >= 18`  →  `return alter > 18`
- Publikum fragen: **„Grün oder rot?“**
- Speichern (Strg + S).
- Ergebnis: **sofort 2 Tests rot**, ohne Neustart:
  - `genau 18 Jahre: ja` → *expected false to be true*
  - `zeigt "Volljährig" bei 18` → *Expected: "Volljährig", Received: "Nicht volljährig"*
- Erklären: Die anderen 3 Tests bleiben grün. Nur die **Grenze 18** ist kaputt.
  Und auch die **Komponente** ist rot – weil sie die Funktion benutzt.

### Schritt 4 – Reparieren (wieder grün)
- Zurück zu `return alter >= 18`, speichern.
- Ergebnis: **wieder alle 5 Tests grün.**

### Schritt 5 – Coverage zeigen
- Vitest mit `q` beenden, dann:
  ```
  npm run coverage
  ```
- Ergebnis: **100 %** – jede Zeile wurde von einem Test geprüft.

---

## 3. Wenn etwas nicht klappt

| Problem | Lösung |
|---|---|
| `npm` wird nicht gefunden | Node.js installieren und IntelliJ neu starten |
| Fehler bei `npm install` | Internet prüfen, dann nochmal `npm install` |
| Vitest meldet eine zu alte Node-Version | Node.js 22.12 oder neuer installieren |
| Die Demo hängt im Vortrag | Screenshots zeigen (vorher machen: App, grün, rot, grün, Coverage) |
