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
        this.cellHeigth = 43;
        this.cellWidth = 6;
        // this.obstacles = [];
        this.score = 0;
        this.numberOfPokemon = 258;
        // this.gameIsOver = false;
        // code to be added
    }

    generatePokedex() {
       this.pokedex.innerHTML = "";
       cells = [];
       for (let i = 0; i < this.cellWidth * this.cellHeigth; i++) {
         const cell = this.generateCellPokemon(i);
         this.pokedex.append(cell);
         cells.push(cell);
       }
    }

    generateCellPokemon(index) {
     const cell = document.createElement("div");
     cell.textContent = index;
     cell.classList.add("cellPokedex");
     return cell;
   }

   async fetchPokemon(){
    const reponse = await fetch("https://pokeapi.co/api/v2/pokemon/3");
    const pokemon = await reponse.json();
    console.log(pokemon.name);
    console.log(pokemon);

   }


      

        // start(){
        //     this.gameScreen.style.height = `${this.height}px`;
        //     this.gameScreen.style.width = `${this.width}px`;

        //     this.startScreen.style.display = "none";

        //     this.gameScreen.style.display = "block";

        //     this.gameLoop()

        // };

    }
