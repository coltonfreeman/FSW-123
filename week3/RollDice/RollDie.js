import {useState} from 'react'
import Die from './Die.js';


 function RollDice(props) {
    const [die1, setDie1] = useState("1");
    const [die2, setDie2] = useState("1");

    const blowRollDie = () => {
        setDie1(Math.floor(Math.random() * 6) + 1)
        setDie2(Math.floor(Math.random() * 6) + 1)
    }

    return(
      <Die
            die1 = {die1}
            die2 = {die2}
            rollDice = {blowRollDie}
        />
    )
}

export default RollDice;