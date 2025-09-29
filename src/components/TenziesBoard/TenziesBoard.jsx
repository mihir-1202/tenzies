import DiceGrid from '../DiceGrid/DiceGrid'
import DiceRoller from '../DiceRoller/DiceRoller'
import {useState} from 'react'
import './TenziesBoard.css'

export default function TenziesBoard()
{
    const NUM_DICE = 10;
    const getRandomDiceValue = () => Math.floor(Math.random() * 6) + 1;

    const [diceData, setDiceData] = useState(generateAllNewDice());
    const [rolls, setRolls] = useState(0);

    function generateAllNewDice()
    {
        let diceData = [];
        
        for (let i = 0; i < NUM_DICE; i++)
            diceData.push({value: getRandomDiceValue(), isHeld: false});

        return diceData;
    }

    function clickDice(index)
    {
        //clicking a dice should toggle the isHeld state of the dice
        const handleClickDice = () => {
            const newDiceData = [...diceData.slice(0, index), {value: diceData[index].value, isHeld: !diceData[index].isHeld}, ...diceData.slice(index + 1)];
            setDiceData(newDiceData);   
        }

        return handleClickDice;
    }

    function rollDice()
    {
        let newDiceData = [];
        
        for (let i = 0; i < NUM_DICE; i++)
            newDiceData.push({value: (diceData[i].isHeld ? diceData[i].value : getRandomDiceValue()), isHeld: diceData[i].isHeld})

        setDiceData(newDiceData);
        setRolls(rolls + 1);
    }

    function checkGameOver()
    {
        return diceData.every(dice => dice.value === diceData[0].value);
    }

    return(
        <div className = 'tenzies-board'>
            {checkGameOver() ? 
                <>
                    <p className = "you-won">You Won!</p>
                    <p className = "you-won-rolls">You won in {rolls} rolls</p>
                    <button className = "play-again" onClick = {() => {setDiceData(generateAllNewDice()); setRolls(0);}}>Play Again</button>
                </> : 
                
                <>
                    <h1 className="title">Tenzies</h1>
                    <p className="instructions">Roll until all dice are the same. Click each die to freeze </p>
                    <DiceGrid diceData = {diceData} clickDice = {clickDice} />
                    <DiceRoller setDiceData = {setDiceData} rollDice = {rollDice} />
                    <p className = "rolls">Rolls: {rolls}</p>
                </> 
            }

        </div>
    )
}