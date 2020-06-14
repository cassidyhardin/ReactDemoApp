import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  /* simplify with obejct destructign to change to only be referencing the objects 
  no longer requires needing to include 'this.props' directly reference props arguments to be passed in woth {} */

  render() {
    console.log("Counters - Rendered");
    // extract properties of props of interest within component class
    // arguments are selected from 'this.props'
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            // we can pass an entier counter as the object rather than defining each indivdual attribute to be passed
            // value={counter.value}
            // selected={true}
            // id={counter.id}
          >
            <p> Counter #{counter.id}</p>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
