import rp from 'request-promise';

const hubUrl = 'https://e1raa2dpna.execute-api.us-east-1.amazonaws.com/development/hub';

export function getSubscriberStatus(email) {
  return rp(`${hubUrl}/list?${email}`);
}

export function addSubscriber(email) {
  const options = {
    method: 'POST',
    uri: `${hubUrl}/list`,
    body: { email },
    json: true,
  };
  return rp.post(options);
}
