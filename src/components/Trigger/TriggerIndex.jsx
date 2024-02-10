import { useLogicContext } from "../../providers/LogicProvider";

const TriggerIndex = () => {

  const { getRandomNumber, randomNumbers, generatedRandomNumber, resetGame } = useLogicContext();

    return (
      <>
        <div className="space-y-10">
          {typeof generatedRandomNumber == 'number' &&
            <p>Random number:</p>
          }
          <h1 className="text-5xl font-bold">{generatedRandomNumber}</h1>
          <div className="space-x-5">
            {randomNumbers.length == 0 &&
              <button onClick={() => getRandomNumber()} className="font-bold bg-green-700 hover:bg-gray-700 transition-all cursor-pointer outline-none border-none" >Get random number</button>
            }
            {typeof generatedRandomNumber == 'number' &&
              <button onClick={() => resetGame()} className="font-bold bg-red-700 hover:bg-gray-700 transition-all cursor-pointer outline-none border-none" >Reset</button>
            }
            </div>
        </div>
      </>
    )
  }
  
  export default TriggerIndex;