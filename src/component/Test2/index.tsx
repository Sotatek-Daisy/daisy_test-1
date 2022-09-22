import { useState } from "react";

const example = [
  [59],
  [73, 101],
  [52, 40, 9],
  [26, 53, 6, 34],
  [10, 51, 87, 86, 81],
  [61, 95, 66, 57, 25, 68],
  [90, 81, 80, 38, 92, 67, 73],
  [30, 28, 51, 76, 81, 18, 75, 44],
  [84, 14, 95, 87, 62, 81, 17, 78, 58],
  [21, 46, 71, 58, 2, 79, 62, 39, 31, 9],
];

const Test2 = () => {
  const [data, setData] = useState(example);

  const maxArray = (data: number[][], row: number) => {
    let convertData: number[][] = data.map((item, i) => {
      return [...item, ...Array(data.length - 1).fill(0)];
    });

    for (let i = row - 1; i >= 0; i--) {
      for (let j = 0; j <= i; j++) {
        if (convertData[i + 1][j] > convertData[i + 1][j + 1])
          convertData[i][j] += convertData[i + 1][j];
        else convertData[i][j] += convertData[i + 1][j + 1];
      }
    }
    return convertData[0][0];
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    value ? setData(JSON.parse(value)) : setData([]);
  };

  return (
    <div>
      <p>Input array: </p>
      <input
        type="string"
        value={data.length > 0 ? JSON.stringify(data) : ""}
        onChange={handleChangeInput}
      ></input>
      <p>
        The result is: 
        <strong> {data.length > 0 ? maxArray(data, data.length - 1) : 0}</strong>
      </p>
    </div>
  );
};

export default Test2;
