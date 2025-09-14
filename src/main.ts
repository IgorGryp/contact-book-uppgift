import './style.css';

// ----- Types & Interfaces ----- //

type PhoneNumber = string; // Alias för en string som ska representera ett telefonnummer
type Email = string; // Alias för en string som ska representera ett e-postadresser

interface Person {
  name: string; // Namn måste vara en sträng
  phone: PhoneNumber; // Telefonnummer måste vara en sträng
  email?: Email; // E-post är måste vara en sträng (valfri)
}

// En lista av personer
type ContactList = Person[]; // Alias för en array med Person-objekt

// ----- Data ----- //

//"Adressbok" från början med två personer
let contacts: ContactList = [
  { name: 'Alice Andersson', phone: '070-1234567', email: 'alice@example.com' },
  { name: 'Bob Berg', phone: '073-9876543' },
];

// ----- Funktioner ----- //

function renderContacts() {
  const list = document.querySelector<HTMLUListElement>('#contact-list')!;

  list.innerHTML = '';

  // Rendera varje kontakt i listan
  contacts.forEach((contact) => {
    const li = document.createElement('li');
    li.className = 'p-2 border-b';
    li.innerHTML = `
      <strong>${contact.name}</strong><br>
      Tel: ${contact.phone} ${
      contact.email ? `<br>Email: ${contact.email}` : ''
    }
    `;
    list.appendChild(li); // Lägg till listobjektet i kontaktlistan
  });
}

// Funktion för att lägga till en ny kontakt
function addContact(person: Person) {
  contacts.push(person);
  renderContacts(); // Uppdatera visningen av kontaktlistan
}

// ----- Event Listeners -----

// Hantera datainmatning från formuläret
document
  .querySelector<HTMLFormElement>('#contact-form')!
  .addEventListener('submit', (e) => {
    e.preventDefault(); // Stoppar sidan från att laddas om
    const name = document
      .querySelector<HTMLInputElement>('#name')!
      .value.trim();
    const phone = document
      .querySelector<HTMLInputElement>('#phone')!
      .value.trim();
    const email = document
      .querySelector<HTMLInputElement>('#email')!
      .value.trim();

    /// Kollar att namn och telefon inte är tomma
    if (!name || !phone) {
      alert('Name and phone are required!');
      return;
    }

    // Validerar att telefonnumret bara innehåller siffror och bindestreck
    const phoneRegex = /^[0-9-]+$/;
    if (!phoneRegex.test(phone)) {
      alert('Phone number can only contain digits and hyphens!');
      return;
    }

    // Validerar e-postformatet om en e-postadress är angiven
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      alert('Please enter a valid email address!');
      return;
    }

    addContact({ name, phone, email: email || undefined }); // Lägger till den nya kontakten i listan
    document.querySelector<HTMLFormElement>('#contact-form')!.reset(); // Rensar formuläret
  });

// ----- Init -----
renderContacts(); // Kör renderContacts en gång i början, så att de förifyllda kontakterna syns direkt
