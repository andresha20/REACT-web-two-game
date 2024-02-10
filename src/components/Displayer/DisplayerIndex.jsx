import { useLogicContext } from "../../providers/LogicProvider";

const DisplayerIndex = () => {

    const { generatedRandomNumber, winLossMessage, numberSlots, setSlotPosition } = useLogicContext();

    return (
        <div className="">
          {typeof generatedRandomNumber == 'number' &&
            <div className="grid grid-cols-1 gap-2">
                {numberSlots.map((slot, i) => (
                    <div key={i} className="grid grid-cols-2">
                        <p className="text-center w-full">{slot}</p>
                        {slot == 0 &&
                            <button onClick={() => setSlotPosition(i)} className="w-full    font-bold bg-white text-gray-900 hover:text-white hover:bg-gray-700 transition-all cursor-pointer outline-none border-none" >Save</button>
                        }
                    </div>
                ))}
            </div>
            }
            {winLossMessage.lenght > 0 &&
                <p>{winLossMessage}</p>
            }
        </div>
    )
  }
  
  export default DisplayerIndex;