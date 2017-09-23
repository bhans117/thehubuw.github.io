import rp from 'request-promise';
import FormActions from '../actions/FormActions';

const hubUrl = 'https://e1raa2dpna.execute-api.us-east-1.amazonaws.com/production/hub';

export function getSubscriberStatus(email) {
  rp(`${hubUrl}/list?email=${email}`)
    .then((response) => {
      FormActions.APIResponse(response);
    })
    .catch((err) => {
      // API call failed...
      console.log(`Failed API Call ${err}`);
    });
}

export function addSubscriber(email, firstName, lastName) {
  const options = {
    method: 'POST',
    uri: `${hubUrl}/list`,
    body: {
      email,
      firstName,
      lastName,
    },
    json: true,
  };
  rp.post(options)
    .then((repos) => {
      console.log(repos);
    })
    .catch((err) => {
      // API call failed...
      console.log(`Failed API Call ${err}`);
    });
}
