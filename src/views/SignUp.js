import React from 'react';
import { Translation } from 'react-i18next';

import Card from '../components/cards/Card';
import Form from '../components/forms/Form';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    };
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    this.submitRequest().then((data) => console.log(data));
    event.preventDefault();
  }

  async submitRequest() {
    const data = {
      first_name: this.state['first_name'],
      last_name: this.state['last_name'],
      username: this.state['username'],
      email: this.state['email'],
      password: this.state['password'],
      password_confirmation: this.state['password_confirmation']
    }

    const response = await fetch('http://localhost:3000/auth', {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    return response.json();
  }


  render() {
    return (
      <Translation ns={['layout']}>
        {
          (t, { i18n }) =>
          <Card modifier="bottomBorder">
            <Card.Body>
              <Card.Title title="Sign Up" />
              <Form onSubmit={this.handleSubmit.bind(this)}>
                <Form.Group groupFor="first_name" modifier="boxed">
                  <Form.Label labelText={t('First Name')} />
                  <Form.Input inputType="text" value={this.state['first_name'].value} onChange={this.handleChange.bind(this)} />
                </Form.Group>
                <Form.Group groupFor="last_name" modifier="boxed">
                  <Form.Label labelText={t('Last Name')} />
                  <Form.Input inputType="text" value={this.state['last_name'].value} onChange={this.handleChange.bind(this)} />
                </Form.Group>
                <Form.Group groupFor="username" modifier="boxed">
                  <Form.Label labelText={t('Username')} />
                  <Form.Input inputType="text" value={this.state['username'].value} onChange={this.handleChange.bind(this)} />
                </Form.Group>
                <Form.Group groupFor="email" modifier="boxed">
                  <Form.Label labelText={t('Email')} />
                  <Form.Input inputType="email" value={this.state['email'].value} onChange={this.handleChange.bind(this)} />
                </Form.Group>
                <Form.Group groupFor="password" modifier="boxed">
                  <Form.Label labelText={t('Password')} />
                  <Form.Input inputType="password" value={this.state['password'].value} onChange={this.handleChange.bind(this)} />
                </Form.Group>
                <Form.Group groupFor="password_confirmation" modifier="boxed">
                  <Form.Label labelText={t('Confirm Password')} />
                  <Form.Input inputType="password" value={this.state['password_confirmation'].value} onChange={this.handleChange.bind(this)} />
                </Form.Group>
                <Form.Action>
                  <Form.Submit classes="Button--solid-primary" buttonText={t('Sign up')} />
                </Form.Action>
              </Form>
            </Card.Body>
          </Card>
        }
      </Translation>
    );
  }
}

export default SignUp;
