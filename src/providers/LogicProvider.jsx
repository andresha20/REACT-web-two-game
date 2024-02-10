import { createContext, useContext, useEffect, useState } from "react";

const LogicContext = createContext();

export const LogicContextProvider = ({ children }) => {

    const numberSlotsSchema = [0, 0, 0, 0, 0];
    const buttonInState = "Click the button to generate";
    const winMsg = "You won";
    const lossMsg = "You lost";
    const [winLossMessage, setWinLossMessage] = useState("");
    const [randomNumbers, setRandomNumbers] = useState([]);
    const [numberSlots, setNumberSlots] = useState(numberSlotsSchema);
    const [generatedRandomNumber, setGeneratedRandomNumber] = useState(buttonInState);

    const generateRandomNumber = () => {
        const generatedNumber = Math.floor(Math.random() * 10) + 1;
        return generatedNumber;
    }

    const resetGame = () => {
        setRandomNumbers([]);
        setGeneratedRandomNumber(buttonInState);
        setNumberSlots(numberSlotsSchema);
    }
    
    const getRandomNumber = () => {
        if (randomNumbers.length == 5) return false;
        let generatedNumber = generateRandomNumber();
        if (randomNumbers.includes(generatedNumber)) {
            return getRandomNumber();
        }
        setGeneratedRandomNumber(generatedNumber);
        randomNumbers.push(generatedNumber);
    }

    const runTimeout = (msg, reset) => {
        setWinLossMessage(msg)
        
        alert(msg)
        setTimeout(() => {
            setWinLossMessage("");
            if (reset) {
                resetGame();
            }
        }, 5000)
    }

    const setSlotPosition = (i) => {
        let mutatedSlots = [...numberSlots];
        if (mutatedSlots[i] != 0) return false;
        mutatedSlots[i] = generatedRandomNumber;
        setNumberSlots([...mutatedSlots]);
        let lost = false;
        if (randomNumbers.length > 0 && i != 0) {
            for (let startIndex = i; startIndex >= 0; startIndex--) {
                if (generatedRandomNumber > mutatedSlots[startIndex]) {
                    if (mutatedSlots[startIndex] == 0) continue;
                    lost = true;
                } 
            }
            for (let startIndex = i; startIndex <= 4; startIndex++) {
                if (generatedRandomNumber < mutatedSlots[startIndex]) {
                    if (mutatedSlots[startIndex] == 0) continue;
                    lost = true;
                } 
            }
        }
        if (lost) return runTimeout(lossMsg, true);
        if (randomNumbers.length == 5) return runTimeout(winMsg, true);
        getRandomNumber();
        return;
    }

    const values = {
        generateRandomNumber,
        setNumberSlots,
        randomNumbers,
        numberSlots,
        generatedRandomNumber,
        getRandomNumber,
        resetGame,
        setSlotPosition,
        winLossMessage
    };

    return <LogicContext.Provider value={values}>{children}</LogicContext.Provider>
}

export const useLogicContext = () => useContext(LogicContext);