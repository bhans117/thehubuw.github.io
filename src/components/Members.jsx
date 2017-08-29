import React from 'react';
import Profile from './Profile'

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

export default function Members(props) {
  return (
    <section className="bg-white" id="members">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Our Amazing Members</h2>
            <h3 className="section-subheading text-muted">Executive Team</h3>
          </div>
        </div>
        <div className="row">
          {createProfiles(obj.users)}
        </div>
      </div>
    </section>
  );
}