let tCells;
let diceHandler;
const CLICKABLE_CLASS = 'player-clickable';
const SELECTED_CLASS = 'player-selected';
const ACTIVE_ATTRIBUTE = 'data_is_active';
const ACTIVE_LEVEL = {ACTIVE: 'True', NOT_ACTIVE: 'False'};
const NUMBER_OF_DICE = 5;


function loadValuesFromServer(values) {

    try {
        const json = JSON.parse(values)
        let dice = json['dice']
        let playerValues = json['playerValues']
        let enemyValues = json['enemyValues']

        diceHandler.updateDice(dice)
        loadPlayerValues(playerValues)
        loadEnemyValues(enemyValues)
    }
    catch (e){}
}


/**
 * resets the game
 */
function startNewGame(isSinglePlayer) {

    diceHandler = new DiceHandler(NUMBER_OF_DICE)
    tCells = document.getElementsByTagName('td')

    for (let i = 0; i < tCells.length; i++) {
        let cell = tCells[i];
        cell.innerText = null;//resetting the cell for the next game
        cell.classList = null;
        cell.classList.add(CLICKABLE_CLASS);
        cell.setAttribute(ACTIVE_ATTRIBUTE, ACTIVE_LEVEL.ACTIVE);

        if (i % 2 === 0 && (i < 11 || (i > 14 && i < 30))) //setting the ranges that the user can score with
        {
            cell.addEventListener("click", cellClick);
            cell.style.cursor = "pointer";
        } else if (i % 2 !== 0 && (i <= 11 || (i > 15 && i < 30))) //setting the ranges that the foe can score with
        {
            cell.addEventListener("click", cellClick);
            cell.style.cursor = "pointer";
        }
    }

    let param = (isSinglePlayer) ? 'true' : 'false';

    fetch('http://localhost:3000/start-game/' + param, {method: 'PUT'})
        .then(response => response.text())
        .then(text => {
            console.clear()
            loadValuesFromServer(text)
        })

    diceHandler.resetDice()
}

/**
 * click handler for the cells the player can use
 * @param event
 */
function cellClick(event) {
    let el = event.target;

    for (let i = 0; i < tCells.length; i++) {
        if (!(tCells[i] == el))
            continue

        fetch('http://localhost:3000/cells/lock/' + i, {method: 'PUT'})
            .then(response => {
                if (response.status === 544) {
                    return
                }

                el.classList.remove(CLICKABLE_CLASS)
                el.classList.add(SELECTED_CLASS)
                diceHandler.resetDice()

                loadValuesFromServer(response.text())

            })
        break;

    }

}


/**
 * rolls all the dice
 */
function rollDice() {
    fetch('http://localhost:3000/roll-dice')
        .then(response => response.text())
        .then(text => {
            loadValuesFromServer(text)
        })
}


function loadPlayerValues(values) {
    for (let i = 0; i < values.length; i++) {
        tCells[i * 2].innerText = values[i]
    }
}

function loadEnemyValues(values) {
    for (let i = 0; i < values.length; i++) {
        tCells[(i * 2) + 1].innerText = values[i]
    }
}