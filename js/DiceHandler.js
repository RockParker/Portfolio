class DiceHandler {
    constructor(numberOfDice) {
        this.dice = [];
        this.numDice = numberOfDice;
        this.#createDice(numberOfDice);
    }


    #createDice() {
        for (let i = 0; i < this.numDice; i++)
            this.dice.push(new Dice(0, 'die-img' + (i + 1),i));
    }

    resetDice() {
        for (let i = 0; i < this.numDice; i++)
            this.dice[i].reset();

        fetch('http://localhost:3000/reset-dice',{method:'PUT'}).then(r =>r)
    }


    /**
     * rolls all the dice
     * @param poe
     */
    updateDice(values) {
        for(let i = 0; i < values.length; i++)
        {
            this.dice[i].setNumber(values[i])
        }
    }
}