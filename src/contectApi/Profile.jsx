//context api functional based
// import React, { Fragment, useContext } from "react";
// import { AuthContext } from "./ContextApi";

// const Profile = () => {
//   let value = useContext(AuthContext);
//   console.log(value);
//   return (
//     <div>
//       {value.map((val, index) => {
//         return (
//           <Fragment key={index}>
//             <li>{val.username}</li>
//             <li>{val.salary}</li>
//             <li>{val.company}</li>
//           </Fragment>
//         );
//       })}
//     </div>
//   );
// };

// export default Profile;

//context api class based
import React, { Component,Fragment } from "react";
import { AuthContext } from "./ContextApi";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <AuthContext.Consumer>
          {value =>
            value.map((val, index) => {
              return (
                <Fragment key={index}>
                  <li>{val.username}</li>
                  <li>{val.salary}</li>
                  <li>{val.company}</li>
                </Fragment>
              );
            })
          }
        </AuthContext.Consumer>
      </div>
    );
  }
}
