import React, { Component } from "react";
import NavBar from "./componenets/navbar";
import Counters from "./componenets/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 10 },
      { id: 2, value: 5 },
      { id: 3, value: 0 },
      { id: 4, value: 7 },
      { id: 5, value: 2 },
    ],
  };

  /* constructor are only ever called during the instance in which a class is create 
  initialized properties within an instnace 
  set state based on the props recieved from the outside 
  constructors can set state directly and does not require calls to 'this.setState'
  - called during render when an object is being placed in the DOM

  props needs to be passed as a paramater to the constructor (otherwise cannot access)
  & must also be passed to the constructor of the base class with super
  
  */

  constructor() {
    super();
  }

  /* called after a component has been rendered into the DOM
  - make AJAX calls to get data from the server

  when rendered all children are also rendered recursivley
  */
  componentDidMount() {
    // this.setState({movies})
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDelete = (counter) => {
    const counters = this.state.counters.filter((c) => c.id !== counter.id);
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
      <React.Fragment>
        <NavBar
          counter_number={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
