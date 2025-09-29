import './DiceRoller.css'

export default function DiceRoller({rollDice})
{
    return(
        <button className = 'dice-roller' onClick = {rollDice}>
            Roll
        </button>
    )
}