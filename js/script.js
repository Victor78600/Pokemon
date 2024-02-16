window.onload = function () {
    const startButton = document.getElementById("start-button");
    const gameIntro = document.getElementById("game-intro");
    const gameElement = document.getElementById("game");
    const restartButton = document.getElementById("restart-button");
    // let game;
    let cellWidth = 26;
    let cellHeigth = 20;
    let playerPosition = 0;
    let canMove = true;
  
    startButton.addEventListener("click", function () {
      startGame();
    });
  
    function startGame() {
      console.log("start game");
      gameIntro.style.display = "none";
      generateBoard()
      generateCell()
      showPlayer()
      move()
      pokedex = new Pokedex();
      pokedex.generatePokedex();
      pokedex.generateCellPokemon();
      pokedex.fetchPokemon()
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
              }
              // console.log("ArrowLeft")
              break;
            case "ArrowUp":
              // const cellUp = cells[playerPosition - 26];
              if (playerPosition > 25) {
                cells[playerPosition].classList.remove("player")
                playerPosition -= 26;
                cells[playerPosition].classList.add("player")
              }
              break;
            case "ArrowRight":
              // const cellRight = cells[playerPosition + 1];
              if (playerPosition % 26 !== 25){
              cells[playerPosition].classList.remove("player")
              playerPosition += 1;
              cells[playerPosition].classList.add("player")
              }
              // console.log("ArrowRight")
              break;
            case "ArrowDown":
              // const cellDown = cells[playerPosition + 26];
              if (playerPosition < 494) {
              cells[playerPosition].classList.remove("player")
              playerPosition += 26;
              cells[playerPosition].classList.add("player")
              }
              // console.log("ArrowDown")
              break;
          }
        }
        window.addEventListener("keydown", move);
      }
    
     
      
    }
