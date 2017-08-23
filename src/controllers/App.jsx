import React from 'react';
import Signup from '../components/Signup';
import Profile from '../components/Profile';

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

  function createProfile(data) {
    return <Profile key={data.user_name} user_name={data.user_name} user_bio={data.user_bio} img_src={data.img_src} profile_link={data.profile_link} />;
  }

  function createProfiles(data) {
    return data.map(createProfile);
  }

function App() {
  return (
    <div>
      <Signup />
      {createProfiles(obj.users)}
    </div>
  );
}

export default App;
