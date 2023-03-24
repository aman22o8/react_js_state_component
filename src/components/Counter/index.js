import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }
  onDecrement = () => {
    console.log('on decrement')
    this.setState(prevState => {
      return {count: prevState.count - 1}
    })
  }
  render() {
    console.log(this.state)
    const {count} = this.state //if this is not written we have to write or embed in p tag as==> this.state.count
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count"> {count}</p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
