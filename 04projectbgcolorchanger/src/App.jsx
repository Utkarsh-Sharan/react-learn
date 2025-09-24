import { useState } from "react";

function App() {
  const [color, setColor] = useState("orange-200");

  // function changeColor(color){
  //   setColor(color);
  // }

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none rounded-md bg-red-500 hover:bg-red-700 px-4 py-1 shadow-lg text-white"
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none rounded-md bg-green-500 hover:bg-green-700 px-4 py-1 shadow-lg text-white"
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none rounded-md bg-blue-500 hover:bg-blue-700 px-4 py-1 shadow-lg text-white"
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
