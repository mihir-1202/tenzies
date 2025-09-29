import Dice from "../Dice/Dice"
import "./DiceGrid.css"


export default function DiceGrid({diceData, clickDice})
{
    console.log(diceData);
    
    const diceElements = diceData.map((dice, index) => <Dice key = {index} value = {dice.value} isHeld = {dice.isHeld} onClick = {clickDice(index)} />)
    
    return(
        <div className = "dice-grid">
            {diceElements}
        </div>
    )
}