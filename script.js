
// const name = document.getElementById('name');
// const password = document.getElementById('pass');
// const userform = document.getElementById('userform');

// document.getElementById('userForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent default form submission

//     const name = document.getElementById('name').value;
//     const password = document.getElementById('pass').value;

//     console.log('Form Submitted!');
//     console.log('Name:', name);
//     console.log('password:', password);
//     const userId = {
//       name:`${name}`,
//       password:`${password}`
//     }

//     const userFormData = new FormData(userform);

//     fetch('https://reqres.in/api/users', {
//       method: 'POST', 
//       headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(userId)
//     })
//   })


// const blob = new Blob([userId], {type:'text/plain'})

// const url = URL.createObjectURL(blob);
// console.log(url);

// userform.href = url;
// uderform.download = 'blob-to-download.txt';


async function fetchDataP(){

  try{
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

    if(!response.ok){
      throw new Error("Could not fetch info")
    }

    const data = await response.json();
    console.log(data);

    const pokemonSprite = data.sprites.front_default;
    const imageElement =document.getElementById("pokemonSprite");

    imageElement.src = pokemonSprite;
    imageElement.style.display = "block";

    const h1Name = document.getElementById('Pname');
    h1Name.textContent = `Name: ${pokemonName}`;

    const h1Type = document.getElementById('Ptype');

    if (data.types.length == 1){
      h1Type.textContent = `Type: ${data.types[0].type.name}`;
    }else{
      h1Type.textContent = `Type: ${data.types[0].type.name} ${data.types[1].type.name}`;
    }
    console.log(data.abilities)
    dataLength = data.abilities.length;
    data.abilities.forEach((ability, index) => {
      const btnMove = document.getElementById(`Pmove${index}`);
      if (btnMove) {
          btnMove.textContent = ability.ability.name;
      }
  });

  //   for (let i = 0; i < data.abilities.length; i++) {
  //     const btnMove1 = document.getElementById(`Pmove${i}`);
  //     btnMove1.textContent = `${data.abilities[i].ability.name}`;
  // }

    }
  catch(error){
    console.log("error");
  }
}

async function fetchDataE(){

  try{
    const pokemonName = document.getElementById("Ename").value.toLowerCase();

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Ename}`)


    if(!response.ok){
      throw new Error("Could not fetch info")
    }

    const data = await response.json();
    console.log(data);

    const pokemonSprite = data.sprites.front_default;
    const imageElement =document.getElementById("EpokemonSprite");

    imageElement.src = pokemonSprite;
    imageElement.style.display = "block";

    const h1Name = document.getElementById('Ename');
    h1Name.textContent = `Name: ${pokemonName}`;

    const h1Type = document.getElementById('Etype');

    if (data.types.length == 1){
      h1Type.textContent = `Type: ${data.types[0].type.name}`;
    }else{
      h1Type.textContent = `Type: ${data.types[0].type.name} ${data.types[1].type.name}`;
    }
  }
  catch(error){
    console.log("error");
  }
}
  function handleEnterKey(event) {
    if (event.key == 'Enter') {
      fetchDataP();
      fetchDataE();


    }
}

// Attach the event listener to the entire document
document.addEventListener('keydown', handleEnterKey);