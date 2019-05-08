import React from 'reeact'; 
import { connect } from 'react-redux'; 
import './Counter.css'; 

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: 'Increment'}); 
  }; 

  decrement = () => {
    this.props.dispatch({ type: 'Decrement' }); 
  }; 

  render() {
    return (
      <div className='counter'>
        <h2>Counter</h2>
      </div>
      
    )
  }