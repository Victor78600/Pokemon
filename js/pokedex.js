class Pokedex {
    constructor(){
        // this.startScreen = document.getElementById("game-intro");
        this.pokedex = document.getElementById("pokedex");
        // this.gameEndScreen = document.getElementById("game-end");
        // this.player = new Player (
        //     this.gameScreen,
        //     200,
        //     500,
        //     100,
        //     150,
        //     "./images/car.png"
        // );
        this.cellHeigth = 649;
        this.cellWidth = 1;
        // this.obstacles = [];
        this.score = 0;
        this.numberOfPokemon = 649;
        // this.gameIsOver = false;
        // code to be added
    }

      generatePokedex() {
       this.pokedex.innerHTML = "";
       this.cells = [];
       for (let i = 1; i <= this.cellWidth * this.cellHeigth; i++) {
        // const reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        // const pokemon = await reponse.json().name;
         const cell = this.generateCellPokemon(i);
         this.pokedex.append(cell);
         this.cells.push(cell);
       }
    }

    // generateCellPokemon(index) {
      //    const cell = document.createElement("div");
      //    try{
      //    const reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
      //    const pokemon = await reponse.json();
      //    console.log(pokemon.name)
      //    cell.textContent = await pokemon.name;
      //    cell.classList.add("cellPokedex");
      //    return cell;
      //   } catch (err) {
      //     console.log(err)
      //   }
      //  }
      
    //   fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
    //   .then((response) => { 
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("Parsed response: ", data.name);
    //   })
    //   .catch( (err) => console.log(err));
    // }

//  

// async generateCellPokemon(index) {
//   try {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
//     const jsonResponse = await response.json();
//     // Assuming cell is defined somewhere in your code
//     const cell = document.createElement("div");
//     setTimeout (() => {
//       // cell.textContent = jsonResponse.name;
//       cell.textContent = index;
//     }, 2000)
//     cell.classList.add("cellPokedex");
//     // Manipulate the cell or jsonResponse as needed
//     console.log("Parsed response: ", jsonResponse.name);
//     return cell;
//   } catch (err) {
//     // Handle error more gracefully
//     console.error("Something went wrong!", err);
//     // Optionally, you can return an error message or a placeholder cell
//     const errorCell = document.createElement("div");
//     errorCell.textContent = "Error loading Pokémon";
//     errorCell.classList.add("errorCell");
//     return errorCell;
//   }
// }

  //    const cell = document.createElement("div");
  //    try{
  //    const reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
  //    const pokemon = await reponse.json();
  //    console.log(pokemon.name)
  //    cell.textContent = await pokemon.name;
  //    cell.classList.add("cellPokedex");
  //    return cell;
  //   } catch (err) {
  //     console.log(err)
  //   }
  //  }

  // generateCellPokemon(index) {
  //   const cell = document.createElement("div");
  //   fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
  //     .then((response) => { 
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("Parsed response: ", data.name);
  //       cell.textContent = index;
  //       cell.classList.add("cellPokedex");
  //       return cell;
  //     })
  //     .catch( (err) => console.log(err));
  // }

   generateCellPokemon(index) {

    const cell = document.createElement("div");
    const img = document.createElement("img")
    fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
      .then((response) => { 
        return response.json();
      })
      .then((data) => {
              // console.log("Parsed response: ", data);
              cell.textContent = `${index}.${data.name}`;
              // img.src = data.sprites.front_default;
              // setTimeout (() => {
              img.src = data.sprites.other.dream_world.front_default;
              img.style.height = '80px';
              img.style.width = '80px';
              cell.appendChild(img);
            // }, 1000)
              // document.body.appendChild(img)

      })
      .catch( (err) => console.log(err));
    cell.classList.add("cellPokedex");
    // document.cellPokedex.appendChild(img)
    return cell;
   }
   
  //  async fetchPokemon(){
  //   const reponse = await fetch("https://pokeapi.co/api/v2/pokemon/1025");
  //   const pokemon = await reponse.json();

  //   console.log(pokemon);

  //  }


      

        // start(){
        //     this.gameScreen.style.height = `${this.height}px`;
        //     this.gameScreen.style.width = `${this.width}px`;

        //     this.startScreen.style.display = "none";

        //     this.gameScreen.style.display = "block";

        //     this.gameLoop()

        // };

    }
