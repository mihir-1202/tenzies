import "./Dice.css"

export default function Dice({value})
{
    return(
        <button className="dice">
            <span>{value}</span>
        </button>
    )
}