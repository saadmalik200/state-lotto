import { useState } from "react";

function RandomList() {
  const numbers49 = [];

  for (let i = 1; i < 50; i++) numbers49.push(i);

  const [sixnumbers, setSixnumbers] = useState(new Array(6).fill(0));
  const [tzoker, setTzoker] = useState([0]);

  const handleGenerate = () => {
    const oldNumbers = [];

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * numbers49.length);
      const randomNumber = numbers49[randomIndex];
      console.log("randomNumber", randomNumber);
      oldNumbers.push(randomNumber);

      numbers49.splice(randomIndex, 1);
    }

    setSixnumbers(oldNumbers); // update the state

    setTzoker(Math.ceil(Math.random() * 10));
  };

  const resetHandler = () => {
    setSixnumbers([]);
    setTzoker([]);
  };

  return (
    <div>
      <div className="flex gap-5">
        {sixnumbers.map((item, i) => (
          <div className="my-5 flex items-center justify-center bg-transparent text-blue-700 font-semibold border border-blue-500 rounded-full p-4">
            <p className="w-[20px] h-[20px] text-center" key={i}>
              {item}
            </p>
          </div>
        ))}
        {tzoker.length !== 0 && (
          <div className=" bg-gray-200 my-5 flex items-center justify-center bg-transparent text-blue-700 font-semibold border border-blue-500 rounded-full p-4">
            <p className="w-[20px] h-[20px] text-center">{tzoker}</p>
          </div>
        )}
      </div>
      <div className="flex gap-[10px] mt-3">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
          onClick={resetHandler}
        >
          Reset
        </button>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={handleGenerate}
        >
          Show me lucky numbers
        </button>
      </div>
    </div>
  );
}

export default RandomList;
