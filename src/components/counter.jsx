import React, { Component } from 'react';

class valueer extends Component {

  styles = {
    fontSize: 10,
    fontWeight: 'bold',
  };

  handleIncrement = (e) => {
    this.setState({ value: this.props.counter.value + 1 });
  };
  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatvalue()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
        <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'btn m-2 btn-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatvalue() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}

export default valueer;
