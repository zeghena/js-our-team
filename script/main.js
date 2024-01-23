// #### NUOVA VARIABILE DI ARRAY DI OGGETTI



const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];
  
  // #### STAMPO SU CONSOLE I VALORI DELLE CHIAVI
  
  console.log(team[0].name);

  let elemento = document.getElementById("container")
  console.log(elemento.innerText)

// #### scrivendo += evito di scrivere più volte innerhtml
  elemento.innerHTML = elemento.innerHTML + "<h1>banana</h1>"

  for (const oggetto of team) {
    console.log("nome: " + oggetto.name)
    console.log("role: " + oggetto.role)
    console.log(oggetto.name + " " + oggetto.role)
    console.log("---")
    elemento.innerHTML = elemento.innerHTML + "<h1>"+ oggetto.name +"</h1>"
    
  }


//   ### stampare le stesse informazioni su DOM sottoforma di stringhe







