import React from 'react';

import { mergeModAndClasses } from '../../Utils';

import Body from './Body';
import Title from './Title';


class Card extends React.Component {
  render() {
    return (
      <section className={mergeModAndClasses('Card', this.props.modifier, this.props.classes)}>
        {this.props.children}
      </section>
    );
  }
}

Card.Body = Body;
Card.Title = Title;

export default Card;
