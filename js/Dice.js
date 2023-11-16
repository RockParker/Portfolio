
class Dice
{
    constructor(number = null, element, index)
    {
        this.number = number;
        this.isActive = true;
        this.index = index;
        this.prevRotate = 0
        this.count = 0

        //this number is the base amount that the image element representing the dice will be rotated at.
        //more info in the animate method
        this.seed = 120 + Math.floor(Math.random() * 240);

        this.imgEl = document.getElementById(element);

        this.imgEl.onclick = (event) =>
        {
            this.isActive = !this.isActive;
            if(!this.isActive)
                this.imgEl.classList.add('blur');
            else
                this.imgEl.classList.remove('blur');

            fetch('http://localhost:3000/dice/lock/' + this.index, {method:'PUT'}).then(r  => r)
        }
    }

    setNumber(newNumber)
    {
        if(this.count >= 3)
            return
        if(newNumber < 1 || newNumber > 6)
            return;

        if(this.isActive)
        {
            this.#animateDice();
            this.number = newNumber;
            this.#setImg();

        }
        this.count++
    }

    reset()
    {
        this.isActive = true;
        this.imgEl.classList.remove('blur');
        this.number = 1;
        this.#setImg();
        this.number = null;
        this.imgEl.style.transform = 'rotate(0deg)';
        this.count = 0
    }

    #setImg()//private
    {
        this.imgEl.setAttribute('src', 'Images/Dice/'+this.number+'_face.png');
    }

    /**
     rotates the image element using css, giving us our animation
     */
    #animateDice()
    {
        //uses an instance variable to make sure that the dice will always roll a minimum amount
        //it takes previous number, then adds the seed amount, and sets the number lower than 360
        //this step also makes it so that the dice sometimes roll the other direction, which is nice
        this.prevRotate = (this.prevRotate += this.seed) % 360;

        this.imgEl.style.transform = 'rotate('+ this.prevRotate+ 'deg)';
    }
}