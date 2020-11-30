import React from 'react';

import { mergeModAndClasses } from '../../Utils';

import Group from './Group';
import Label from './Label';
import Input from './Input';
import Action from './Action';
import Submit from './Submit';

class Form extends React.Component {
  render() {
    return (
      <form className={mergeModAndClasses('Form', this.props.modifier, this.props.classes)} onSubmit={this.props.onSubmit}>
        {this.props.children}
      </form>
    );
  }
}

Form.Group = Group;
Form.Label = Label;
Form.Input = Input;
Form.Action = Action;
Form.Submit = Submit;

export default Form;
