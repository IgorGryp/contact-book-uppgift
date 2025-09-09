# 📒 TypeScript Contact Book – Tutorial

# Kom igång

1. Installera dependencies: `npm install`

2. Starta utvecklingsservern: `npm run dev`

3. Öppna webbläsaren på: `http://localhost:5173/`

---

# Introduktion

Denna tutorial visar hur man använder **TypeScript types och interfaces** i ett enkelt webbaserat kontaktbok-program.

TypeScript hjälper oss att fånga fel tidigt genom att ge tydliga regler för hur data ska se ut.

Det gör koden mer robust, lättare att förstå och enklare att vidareutveckla.

# När/varför använder man TypeScript typer och interface?

- **Klarare kod** – Du ser direkt vilken form data ska ha, vilket gör det lättare att förstå vad funktioner förväntar sig.
- **Färre buggar** – Kompilatorn varnar om du försöker använda fel typ (t.ex. sträng när ett nummer förväntas).
- **Bättre utvecklarupplevelse** – Autocomplete, snabb info i editorn och säkrare refaktorering.
- **Tydligare samarbete** – Andra utvecklare vet vad som ska skickas och vad som returneras utan att läsa all logik.

# Skillnader i praktiken

- **Type**

  - Används när du behöver flexibilitet: kombinera typer, skapa alias för flera möjliga former, eller beskriva sammansatta konstruktioner.
  - Passar bra för saker som _”det här värdet kan vara antingen A eller B”_ eller för interna, sammansatta typer.

- **Interface**
  - Används främst för att beskriva formen på objekt och som ett kontrakt som klasser kan följa.
  - Lätt att utöka: samma interface kan kompletteras på flera ställen, vilket är praktiskt när strukturen växer över tid.

# När välja vad?

1. Välj **type** om du behöver:

   - Kombinera flera typer (t.ex. ett värde som kan ha flera olika former).
   - Skapa alias för tuple- eller union-liknande konstruktioner.

2. Välj **interface** om du behöver:

   - Definiera struktur för objekt som ska vara ett tydligt kontrakt i koden.
   - Göra något som andra delar av programmet ska implementera eller utöka.

3. I praktiken funkar ofta båda — välj det som gör koden tydligast och konsekvent.

**Sammanfattning:**  
Båda verktygen gör koden tydligare, tryggare och enklare att samarbeta kring.  
Använd **type** när du behöver flexibilitet och kombinationer, och **interface** när du vill definiera tydliga objektkontrakt som kan växa över tid.

---

# Vanliga fel och felsökning

## 1. Fel typ på variabel

```ts
let phone: string = 12345;
```

**Felmeddelande**: Type 'number' is not assignable to type 'string'.

✅ Lösning:

```ts
let phone: string = '12345';
```

## 2. Saknar obligatoriskt fält

```ts
const alice: Person = {
  phone: '070-1234567',
};
```

**Felmeddelande**: Property 'name' is missing in type '{ phone: string; }' but required in type 'Person'.

✅ Lösning:

```ts
const alice: Person = {
  name: 'Alice Andersson',
  phone: '070-1234567',
};
```

## 3. Extra egenskap som inte finns

```ts
const bob: Person = {
  name: 'Bob Berg',
  phone: '073-9876543',
  age: 42,
};
```

**Felmeddelande**: Object literal may only specify known properties, and 'age' does not exist in type 'Person'.

✅ Lösning: Ta bort age eller lägg till det i interfacet:

```ts
interface Person {
  name: string;
  phone: string;
  email?: string;
  age?: number;
}
```

---

# Övningsuppgift

👉 Utöka programmet så att varje kontakt också har en ålder (`age`).

Ledtrådar:

- Uppdatera `interface Person` med ett nytt fält `age: number`.
- Lägg till ett `<input>`-fält i formuläret där användaren kan skriva in åldern.
- Hämta värdet i `main.ts` när kontakten läggs till.
- Visa åldern i kontaktlistan i `renderContacts()`.

---
