import React from "react";

// stateless functional coponent which does not need to be defined by a class and can be executed and rendered with a single fucntion

const NavBar = ({ counter_number }) => {
  /* return a react element from within a single function rather than needing to extend a component
  props is passed as an argument to the function at run time and no longer requires needing to have passed the current 'this' instance to the function
  object destructuring to destructre props argument and prevent needing to constanlty reference items

  object destructign begins with curly brackets
  */
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="https://github.com/cassidyhardin">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {counter_number}
        </span>
      </a>
    </nav>
  );
};

// class NavBar extends Component {
//   render() {}
// }

export default NavBar;
