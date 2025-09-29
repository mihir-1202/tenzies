import DiceGrid from '../DiceGrid/DiceGrid'
import DiceRoller from '../DiceRoller/DiceRoller'
import {useState} from 'react'
import './TenziesBoard.css'

export default function TenziesBoard()
{
    const NUM_DICE = 10;
    const getRandomDiceValue = () => Math.floor(Math.random() * 6) + 1;

    const [diceData, setDiceData] = useState(generateAllNewDice());

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
    }

    return(
        <div className = 'tenzies-board'>
            <DiceGrid diceData = {diceData} clickDice = {clickDice} />
            <DiceRoller setDiceData = {setDiceData} rollDice = {rollDice} />
        </div>
    )
}