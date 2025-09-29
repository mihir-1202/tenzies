import "./Dice.css"

export default function Dice({value, isHeld, onClick})
{
    return(
        <button className={`dice ${isHeld ? 'held' : ''}`} onClick={onClick} style={{backgroundColor: isHeld ? '#59E391' : '#FFFFFF'}}>
            <span>{value}</span>
        </button>
    )
}