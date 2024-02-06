import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./Redux/Features/CounterSlice";
import { RootState } from "./Redux/Store";

function App() {
  const count = useSelector((state: RootState) => state.Counter.count);
  const dispatch = useDispatch();

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex border border-purple-500 p-8 rounded-md bg-purple-200">
        <button
          className="px-3 py-2 bg-green-500 rounded-md text-white font-semibold"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increament
        </button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button
          className="px-3 py-2 bg-red-500 rounded-md text-white font-semibold"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decreament
        </button>
        <button
          className="px-3 ml-4 py-2 bg-red-500 rounded-md text-white font-semibold"
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(3))}
        >
          Increament By 3
        </button>
      </div>
    </div>
  );
}

export default App;
