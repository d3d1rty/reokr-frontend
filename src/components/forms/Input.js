import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <input id={this.props.fieldFor} name={this.props.fieldFor}type={this.props.inputType} onChange={this.props.onChange} />
    );
  }
}

export default Input;
