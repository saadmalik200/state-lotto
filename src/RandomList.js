import { useState } from "react";

function RandomList() {
  const [numbers, setNewNumber] = useState([]);

  // //   GENERATE RANDOM NUMBERS FROM ARRAY
  // const randomNum = () => {
  //   const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  //   let counter = 0;
  //   const totalDigits = 4;
  //   let random = "";
  //   while (counter < totalDigits) {
  //     const idx = Math.ceil(Math.random() * array.length - 1);
  //     random += array[idx];
  //     array.splice(idx, 1);
  //     counter++;
  //   }

  //   return random;
  // };

  // console.log(randomNum());

  const randomHandler = () => {
    let newArr = [...numbers];

    const random1 = Math.floor(Math.random() * 49 + 1);
    const random2 = Math.floor(Math.random() * 49 + 1);
    const random3 = Math.floor(Math.random() * 49 + 1);
    const random4 = Math.floor(Math.random() * 49 + 1);
    const random5 = Math.floor(Math.random() * 49 + 1);
    const random6 = Math.floor(Math.random() * 49 + 1);

    newArr = [random1, random2, random3, random4, random5, random6];

    setNewNumber(newArr);

    // setNewNumber([...numbers, Math.random()]);
    console.log("Numbers Array", numbers);
  };

  return (
    <div>
      <div className="flex gap-5">
        {numbers.map((item, i) => (
          <div className="my-5 flex items-center justify-center bg-transparent text-blue-700 font-semibold    border border-blue-500 rounded-full p-4">
            <p className="w-[20px] h-[20px] text-center" key={i}>
              {item}
            </p>
          </div>
        ))}
      </div>
      <div className="flex gap-[10px]">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
          onClick={() => setNewNumber([])}
        >
          Reset
        </button>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={randomHandler}
        >
          Show me lucky numbers
        </button>
      </div>
    </div>
  );
}

export default RandomList;
