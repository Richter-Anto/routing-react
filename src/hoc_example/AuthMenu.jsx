//using functional way
// import React from 'react'
// import Hoc from "./Hoc"

// const AuthMenu = props => {
//     return <div>Welcome to {props.username}</div>
// }

// export default Hoc(AuthMenu)


//using class based way
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class AuthMenu extends Component {
    handleClick = e => {
        console.log(this.props);
        this.props.history.push("/")
    }
  render() {
    return (
        <div>
            <ul>
                <li>
                    <button onClick={this.handleClick}>Logout</button>
                </li>
            </ul>
      </div>
    )
  }
}


export default withRouter(AuthMenu);