

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. 
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
const team = [
    {
          name: 'Wayne Barnett ',
          role: 'Founder & CEO ',
          image: 'wayne-barnett-founder-ceo.jpg '
    },
    {
          name: 'Angela Caroll ',
          role: 'Chief Editor ',
          image: 'angela-caroll-chief-editor.jpg '
    },
    {
          name: 'Walter gordon ',
          role: 'Office Manager ',
          image: 'walter-gordon-office-manager.jpg '
    },
    {
          name: 'Angela Lopez ',
          role: 'Social Media Manager ',
          image: 'angela-lopez-social-media-manager.jpg '
    },
    {
          name: 'Scott Estrada ',
          role: 'Developer ',
          image: 'scott-estrada-developer.jpg '
    },
    {
          name: 'Barbara Ramos ',
          role: 'Grafic Designer ',
          image: 'barbara-ramos-graphic-designer.jpg '
    }

]

// MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto

for (let i = 0; i < team.length; i++) {
    const member = team[i];
    console.log(member);
    for (const key in member) {
          console.log(key, member[key]);
    }
}
    
// MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
const stringsEl = document.querySelector('.strings')
for (let i = 0; i < team.length; i++) {
    const member = team[i];
    const divEl = document.createElement('div');
    stringsEl.append(divEl);
    
    for (const key in member) {
          divEl.append(key, ' ', member[key]);
    }
    
}

// BONUS 1: Trasformare la stringa foto in una immagine effettiva

// BONUS 2: Organizzare i singoli membri in card/schede 