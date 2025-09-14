# Reflektion

Under arbetet med tutorialen var det svåraste att förklara **skillnaden mellan `type` och `interface`**.

Både `type` och `interface` kan användas för att beskriva objekt, men de har subtila skillnader:

- `interface` kan **mergas**, vilket gör att man kan utöka samma interface flera gånger.
- `type` kan kombinera olika typer med `&` och skapa mer komplexa typer, men kan inte mergas.

Det var svårt att förklara när man ska använda det ena över det andra på ett sätt som är lättförståeligt för nybörjare. Många blir förvirrade eftersom koden fungerar nästan likadant i många fall, men TypeScript beter sig olika i mer avancerade scenarier.

Sammanfattningsvis var det mest utmanande att **göra de små skillnaderna mellan typer och interface tydliga** utan att göra tutorialen för komplicerad.

## Feedback från den andra gruppen och hur vi hanterade den

Den andra gruppen testade vår tutorial och gav följande feedback:

**Styrkor:**

- README:n är tydlig och lätt att följa.
- Koden är enkel och lätt att förstå.
- Bra exempel på hur man lägger till både personer och företag.

**Förbättringsförslag:**

- Just nu ligger all logik i `main.ts`; det skulle kunna delas upp i flera filer för bättre struktur.
- Mer felhantering, till exempel kontrollera att telefonnummer har rätt format.

**Hur vi hanterade feedbacken:**

- Vi diskuterade och planerade att separera logik i funktioner och eventuellt egna moduler, men för skoluppgiftens omfattning behöll vi allt i `main.ts`.
- Vi lade till enklare felkontroller i formuläret, t.ex. att namn och telefonnummer måste fyllas i, vilket gör programmet mer robust och minskar risken för ogiltig data.
