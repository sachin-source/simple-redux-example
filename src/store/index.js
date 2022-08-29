const { createStore } = require("redux");

const reducerFunction = (state = { counter : 0}, action) => {
    if (action.type == 'INC') {
        return { counter : state.counter + 1 }
    } else if (action.type == 'DEC') {
        return { counter : state.counter - 1 }
    } 
    return state;
}

const store = createStore(reducerFunction);
export default store;