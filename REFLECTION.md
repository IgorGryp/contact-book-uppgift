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
- Bra exempel på hur man lägger till personer.

**Förbättringsförslag:**

- Just nu ligger all logik i `main.ts`; det skulle kunna delas upp i flera filer för bättre struktur.
- Mer felhantering, till exempel kontrollera att telefonnummer har rätt format.

**Hur vi hanterade feedbacken:**

- Vi diskuterade och planerade att separera logik i funktioner och eventuellt egna moduler, men för skoluppgiftens omfattning behöll vi allt i `main.ts`.
- Eftersom alla fält i formuläret är `required` i HTML behöver vi inte längre kontrollera tomma fält i JavaScript.
- Vi förbättrade istället felkontrollen genom att:
  - Kontrollera att telefonnummer följer ett korrekt format (endast siffror och bindestreck).
  - Lägga till enkel validering av e-postadress för att säkerställa att den är giltig.
- Dessa förbättringar gör programmet mer robust och minskar risken för ogiltig data.

## Vad vi lärt oss genom att granska andras tutorial och exempelkod

- Hur viktigt det är med tydliga instruktioner och struktur – tutorials som är logiskt uppbyggda och väl kommenterade är mycket lättare att följa.
- Att det är viktigt med en tydlig och genomarbetad projektbeskrivning i README-filen, så att man direkt förstår hur projektet är uppbyggt, hur det fungerar och hur det ska köras.
- Att det är bra att dela upp koden i mindre funktioner eller filer för att göra den mer överskådlig och lättare att underhålla.
