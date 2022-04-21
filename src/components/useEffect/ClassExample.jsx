//useEffect example of class based
import React, { Component } from 'react'

export default class ClassExample extends Component {
    state = {
        count: 0,
    }
    componentDidMount() {
        document.title = `i am class based component ${this.state.count}`
    }
    componentDidUpdate() {
        document.title = `i am class based component ${this.state.count}`;
    }
  render() {
    return (
        <div>
            <hr />
            <h2>{this.state.count}</h2>
            <button onClick={() => this.setState({count: this.state.count + 1})}>Increment</button>
      </div>
    )
  }
}
