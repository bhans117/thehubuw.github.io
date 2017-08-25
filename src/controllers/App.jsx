import React, { Component } from 'react';
import Signup from '../components/Signup';
import Profile from '../components/Profile';
const FormStore = require('../stores/FormStore');

var obj = {
  "users": [
    {
    user_name: 'Chris Olszewski',
    user_bio: 'I am a CS nerd',
    img_src: 'ChrisOlszewski',
    profile_link: 'Chris',
    },
    {
      user_name: 'Ben Hansen',
      user_bio: 'I am not a CS nerd',
      img_src: 'BenHansen',
      profile_link: 'Ben',
    },
  ]
}

  function getAppState() {
    return {
      form: FormStore.getForm()
    };
  }

  function createProfile(data) {
    return <Profile key={data.user_name} user_name={data.user_name} user_bio={data.user_bio} img_src={data.img_src} profile_link={data.profile_link} />;
  }

  function createProfiles(data) {
    return data.map(createProfile);
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
      <Signup value={this.state.value}/>
      {createProfiles(obj.users)}
    </div>
    )
  }

  onChange() {
    this.setState(getAppState());
  }

}