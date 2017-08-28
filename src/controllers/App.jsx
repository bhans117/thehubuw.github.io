import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Signup from '../components/Signup';
import Members from '../components/Members';
const FormStore = require('../stores/FormStore');

  function getAppState() {
    return {
      form: FormStore.getForm()
    };
  }

export default class FormStoreApp extends Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    FormStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    FormStore.removeChangeListener(this.onChange);
  }

  render() {
    return (
    <div>
      <Navigation />
      <Header />
      <Signup value={this.state.value}/>
      <Members />
    </div>
    )
  }

  onChange() {
    this.setState(getAppState());
  }

}