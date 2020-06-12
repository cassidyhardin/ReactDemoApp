import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 10 },
      { id: 2, value: 5 },
      { id: 3, value: 0 },
      { id: 4, value: 7 },
      { id: 5, value: 2 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
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
