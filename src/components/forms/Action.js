import React from 'react';

class Action extends React.Component {
  render() {
    return (
      <div className="Form__action">
        {this.props.children}
      </div>
    );
  }
}

export default Action;
