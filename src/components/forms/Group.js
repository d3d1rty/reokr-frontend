import React from 'react';

import { mergeModAndClasses } from '../../Utils';

class Group extends React.Component {
  render() {
    const updateChildrenWithProps = React.Children.map(
      this.props.children,
      (child) => {
        return React.cloneElement(child, {
          fieldFor: this.props.groupFor,
        });
      }
    );

    return (
      <div className={mergeModAndClasses('Form__group', this.props.modifier, this.props.classes)}>
        {updateChildrenWithProps}
      </div>
    );
  }
}

export default Group;
