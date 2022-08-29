import { useSelector, useDispatch } from 'react-redux'

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type : "INC" })
  };
  const decrement = () => {
    dispatch({ type : "DEC" })
  };
  return (
    <div className="App">
    <h1>counter :</h1>
    <h1>{counter}</h1>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;
