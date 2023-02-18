import React, { Component } from 'react';

class valueer extends Component {
  state = {
    value: this.props.value,
  };
  styles = {
    fontSize: 10,
    fontWeight: 'bold',
  };

  handleIncrement = (e) => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatvalue()}
        </span>
        <button
          onClick={() => this.handleIncrement(1)}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
        <button className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'btn m-2 btn-';
    classes += this.state.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatvalue() {
    const { value } = this.state;
    return value === 0 ? 'Zero' : value;
  }
}

export default valueer;
