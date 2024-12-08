import { useState } from "react";

function App() {
  const [colour, setColor] = useState("red");

  return (
    <div
      style={{ backgroundColor: colour }}
      className="w-full h-screen duration-200"
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-col sm:flex-row felx-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">
          <button
            className="online-none rounded-full px-4 py-1 shadow-lg"
            onClick={() => setColor("white")}
          >
            White
          </button>
          <button
            className="online-none rounded-full px-4 py-1 text-white shadow-lg"
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            className="online-none rounded-full px-4 py-1 text-white shadow-lg"
            onClick={() => setColor("black")}
            style={{ backgroundColor: "Black" }}
          >
            Black
          </button>
          <button
            className="online-none rounded-full px-4 py-1 text-white shadow-lg"
            onClick={() => setColor("Blue")}
            style={{ backgroundColor: "Blue" }}
          >
            Blue
          </button>
          <button
            className="online-none rounded-full px-4 py-1 text-white shadow-lg"
            onClick={() => setColor("olive")}
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            className="online-none rounded-full px-4 py-1 text-white shadow-lg"
            onClick={() => setColor("Green")}
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>
          <button
            className="online-none rounded-full px-4 py-1 text-white shadow-lg"
            onClick={() => setColor("Brown")}
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>
          <button
            className="online-none rounded-full px-4 py-1  shadow-lg"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}

          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
