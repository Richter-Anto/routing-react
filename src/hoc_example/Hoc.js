//class based Hoc
// import React, { Component } from "react";

// const Hoc = WrappedComponent => {
//   class Comp extends Component {
//     render() {
//       return <WrappedComponent username="shashi"/>;
//     }
//   }
//   return Comp;
// };

// export default Hoc;


//function based Hoc (not even require React library)
const Hoc = WrappedComponent => {
    return () => {
      return <WrappedComponent username="shashi" />
  }
};

export default Hoc