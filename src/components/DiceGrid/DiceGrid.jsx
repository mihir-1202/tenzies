import Dice from "../Dice/Dice"
import "./DiceGrid.css"

function getRandomDiceValue()
{
    return Math.floor(Math.random() * 6) + 1;
}

export default function DiceGrid()
{
    let diceValues = [];
    
    for (let i = 0; i < 10; i++)
        diceValues.push(getRandomDiceValue());
    
    const diceElements = diceValues.map((value, index) => <Dice key = {index} value = {value} />)
    
    return(
        <div className = "dice-grid">
            {diceElements}
        </div>
    )
}