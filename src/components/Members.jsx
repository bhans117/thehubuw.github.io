import React from 'react';
import Profile from './Profile'

var obj = {
  "users": [
    {
      user_name: 'Chris Olszewski',
      user_bio: 'Computer Science & Mathematics',
      img_src: 'Chris',
      profile_link: 'Chris',
      fb: 'https://www.facebook.com/chris.olszewski.39',
    },
    {
      user_name: 'Ben Hansen',
      user_bio: 'Computer Science & Mathematics & Communication Arts',
      img_src: 'Ben',
      profile_link: 'Ben',
      fb: 'https://www.facebook.com/ben.hansen.5059',
      linkedIn: 'https://www.linkedin.com/in/benjamin-hansen-501b97107/',
    },
    {
      user_name: 'Nicholas Mandal',
      user_bio: 'Computer Science & Business',
      img_src: 'Nick',
      profile_link: 'http://nickmandal.com/',
      fb: 'https://www.facebook.com/nick.mandal',
      linkedIn: 'https://www.linkedin.com/in/nicholasmandal/',
    },
    {
      user_name: 'Griffin Kelley',
      user_bio: 'Computer Science',
      img_src: 'Griffin',
      profile_link: 'http://www.GriffinKelley.com',
      linkedIn: 'https://www.linkedin.com/in/griffin-kelley-a9ab0792/',
    },
    {
      user_name: 'Cynthia Qian',
      user_bio: 'Computer Science',
      img_src: 'Cynthia',
      profile_link: 'Cynthia',
      fb: 'https://www.facebook.com/cynthia.x.qian',
      linkedIn: 'https://www.linkedin.com/in/cynthiaqian/',
    },
    {
      user_name: 'Kendra Raczek',
      user_bio: 'Computer Science',
      img_src: 'Kendra',
      profile_link: 'Kendra',
      fb: 'https://www.facebook.com/kendra.raczek',
      linkedIn: 'https://www.linkedin.com/in/kendra-raczek-741732139',
    },
    {
      user_name: 'Caroline Clancy',
      user_bio: 'Computer Science',
      img_src: 'Caroline',
      profile_link: 'carolineclancy.github.io',
      fb: 'https://www.facebook.com/caroline.clancy.547',
      linkedIn: 'https://www.linkedin.com/in/caroline-clancy-1818b8ba/',
    },
  ]
}

  function createProfile(data) {
    return <Profile 
              key={data.user_name} 
              user_name={data.user_name} 
              user_bio={data.user_bio} 
              img_src={data.img_src} 
              profile_link={data.profile_link}
              twitter={data.twitter}
              fb={data.fb}
              linkedIn={data.linkedIn}
            />;
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