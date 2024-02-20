window.onload = function () {
    const startButton = document.getElementById("start-button");
    const gameIntro = document.getElementById("game-intro");
    const gameElement = document.getElementById("game");
    const pokemonAppearScreen = document.getElementById("pokemon-appear");
    const continueButton = pokemonAppearScreen.querySelector("button");
    const newPokemon = document.querySelector(".new-pokemon");
    // const replayButton = looseGameScreen.querySelector("button");
    // let game;
    let cellWidth = 26;
    let cellHeigth = 20;
    let playerPosition = 0;
    let canMove = true;
    let numberMovePlayer = 0
    let randomNumber = Math.ceil(Math.random() * 30)
   
  
    startButton.addEventListener("click", function () {
      startGame();
    });
    continueButton.addEventListener("click", continueGame);
  
    function startGame() {
      console.log("start game");
      gameIntro.style.display = "none";
      generateBoard()
      generateCell()
      showPlayer()
      pokedex = new Pokedex();
      pokedex.generatePokedex();
      pokedex.generateCellPokemon();
      move()
      randomNumb ()
      // pokedex.fetchPokemon()
    }

    function continueGame() {
      pokemonAppearScreen.querySelector("div").remove()
      pokemonAppearScreen.close();
      console.log("continue game");
      canMove = true;
      // gameIntro.style.display = "none";
      // generateBoard()
      // generateCell()
      // showPlayer()
      // pokedex = new Pokedex();
      // pokedex.generatePokedex();
      // pokedex.generateCellPokemon();
      // move()
      // randomNumb ()
      // pokedex.fetchPokemon()
    }

    function generateBoard() {
        gameElement.innerHTML = "";
        cells = [];
        for (let i = 0; i < cellWidth * cellHeigth; i++) {
          const cell = generateCell(i);
          gameElement.append(cell);
          cells.push(cell);
        }
      }
      
      function generateCell(index) {
        const cell = document.createElement("div");
        cell.textContent = index;
        cell.classList.add("cell");
        return cell;
      }

      function showPlayer() {
        cells[playerPosition].classList.add("player");
      }

      function randomNumb (){
        randomNumber = Math.ceil(Math.random() * 30)
        // console.log(randomNumber)
        return randomNumber
      }

    function move(event, direction){
      if (!canMove) {
        return;
      }
      let key;
      if (event) {
        event.preventDefault();
        key = event.key;
      } else {
        key = direction;
      }
        const possibleKeystrokes = [
          "ArrowLeft",
          "ArrowUp",
          "ArrowRight",
          "ArrowDown",
        ];

    
        if (possibleKeystrokes.includes(key)) {
          event.preventDefault();
          
          switch (key) {
            case "ArrowLeft":
              // const cellLeft = cells[playerPosition - 1];
              if (playerPosition % 26 !== 0) {
              cells[playerPosition].classList.remove("player")
              playerPosition -= 1;
              cells[playerPosition].classList.add("player")
              console.log("ArrowLeft")
              numberMovePlayer += 1
              }
              break;
            case "ArrowUp":
              // const cellUp = cells[playerPosition - 26];
              if (playerPosition > 25) {
                cells[playerPosition].classList.remove("player")
                playerPosition -= 26;
                cells[playerPosition].classList.add("player")
                console.log("Arrowup")
                numberMovePlayer += 1
              }
              break;
            case "ArrowRight":
              // const cellRight = cells[playerPosition + 1];
              if (playerPosition % 26 !== 25){
              cells[playerPosition].classList.remove("player")
              playerPosition += 1;
              cells[playerPosition].classList.add("player")
              console.log("ArrowRight")
              numberMovePlayer += 1
              }
              break;
            case "ArrowDown":
              // const cellDown = cells[playerPosition + 26];
              if (playerPosition < 494) {
              cells[playerPosition].classList.remove("player")
              playerPosition += 26;
              cells[playerPosition].classList.add("player")
              console.log("ArrowDown")
              numberMovePlayer += 1
              }
              break;
          }
        }
        // console.log(randomNumber)
        // console.log(numberMovePlayer)

        if (randomNumber === numberMovePlayer) {
          const newDiv = document.createElement("div");
          const img = document.createElement("img")
          fetch(`https://pokeapi.co/api/v2/pokemon/${Math.ceil(Math.random() * 649)}`)
      .then((response) => { 
        return response.json();
      })
      .then((data) => {
              // console.log("Parsed response: ", data);
              // const newContent = `${data.name}`;
              const newContent = document.createTextNode(`${data.name}`)
              newDiv.appendChild(newContent);
              img.src = data.sprites.other.dream_world.front_default;
              img.style.height = '80px';
              img.style.width = '80px';
              newDiv.appendChild(img);
              console.log(data.name)
              // newDiv.textContent = `${data.name}`
      })
      .catch( (err) => console.log(err));
          // const newContent = document.createTextNode("Hi you found another one!");
          pokemonAppearScreen.append(newDiv)
          newDiv.classList.add("new-pokemon");
          pokemonAppearScreen.showModal()
          canMove = false;
          console.log(`New pokemon appear ${Math.ceil(Math.random() * 649)}`)
          randomNumb()
          numberMovePlayer = 0
        } 

        // if (randomNumber === numberMovePlayer) {
        //   const newDiv = document.createElement("div");
        //   const newContent = document.createTextNode("Hi you found another one!");
        //   newDiv.appendChild(newContent);
        //   pokemonAppearScreen.append(newDiv)
        //   pokemonAppear.showModal()
        //   canMove = false;

        //   console.log(`New pokemon appear ${Math.ceil(Math.random() * 649)}`)
        //   randomNumb()
        //   numberMovePlayer = 0
        // }

        window.addEventListener("keydown", move);
      }
    
     
      
    }
