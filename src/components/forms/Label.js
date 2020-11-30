import React from 'react';

class Label extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.fieldFor}>
        {this.props.labelText}
      </label>
    );
  }
}

export default Label;
