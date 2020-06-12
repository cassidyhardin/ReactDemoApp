import React, { Component } from "react";

class Counter extends Component {
  /* state attributes calling to pop values is only excuted when the attribute/componenet is initialzied */

  state = {
    value: this.props.counter.value,
    tags: [],
  };
  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  /* arrow functions inheret not bind the 'this' key word
    alternative to suing a construct, simply render with the arrow key to inheret the previous classes this method
    prevent the need to indivdually rebind any/every event handler

    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }
  */

  /*
  use react base component methods in order to update this state attributes within functions/actions 
  that can be recognized and obsereved within function calls and changes 
  override propertites of state object if they are already existing, otherwise will be merged in as state properties
  allows for react to be aware of state changes
  */

  handleIncrement = (amount) => {
    console.log(amount);
    this.setState({ value: this.state.value + 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0)
      return <p> There are currently no tags :(</p>;
    // returning a new react element
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li ley={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    /* becase we are modifying here we cannot use const and need to use let in order for it to be updated within instances */
    console.log("props", this.props);

    return (
      /* set key values within a map in order for DOM to be able to
        automagically render them and update their attributes whenever
        internal changed occur */

      <div>
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatValue()}{" "}
        </span>
        <button
          onClick={() => this.handleIncrement({ id: 5 })}
          className="btn btn-secondary btn-sm"
        >
          {" "}
          Increment{" "}
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {this.state.tags.length === 0 &&
          "You don't have any tags please create them now !!!"}
        {this.renderTags()}

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete Tag
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
