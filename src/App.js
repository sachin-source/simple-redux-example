import { useSelector, useDispatch } from 'react-redux'
import { actions } from './store';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.incriment(1))
  };
  const decrement = () => {
    dispatch(actions.decriment(1))
    // dispatch({ type : "DEC" })
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
