import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter'; 
import { createStore } from 'redux'; 
import { Provider } from 'react-dux'; 

const initialState = {
  count: 0
}; 

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'Increment':
      return {
        count: state.count + 1
      }; 
    case 'Decrement'; 
      return {
        count: state.count - 1 
      };
    default: 
      return state; 
    }
  }

  const store = createStore(reducer); 
  const App = () => (
    <Provider store={store}>
      <Counter />  
    </Provider>
  ); 

  ReactDOM.render(<App />, document.getElementById('root')); 
      