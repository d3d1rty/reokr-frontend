import React from 'react';

import { mergeModAndClasses } from '../../Utils';

class Title extends React.Component {
  render() {
    return (
      <h2 className={mergeModAndClasses('Card__title', this.props.modifier, this.props.classes)}>
        {this.props.title}
      </h2>
    );
  }
}

export default Title;
