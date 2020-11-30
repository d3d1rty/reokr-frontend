import React from 'react';

class Submit extends React.Component {
  render() {
    return (
      <input type="submit" className={this.props.classes} value={this.props.buttonText} />
    );
  }
}

export default Submit;
