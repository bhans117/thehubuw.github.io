import Promise from 'bluebird'
import { mc } from '../../lib/mailchimp'

export function handler (event, context, callback) {
  return addEmailToList(event).asCallback(callback)
}

function addEmailToList (event) {
  const email = event.body.email
  return addToMailchimp(email)
    .then((resp) => {
      return { statusCode: 200, headers: {}, body: resp.body }
    })
}

function addToMailchimp (email, fields = {}) {
  const url = `3.0/lists/${process.env.MC_LIST}/members`
  const options = {
    body: {
      email_address: email,
      status: 'subscribed',
      merge_fields: fields
    }
  }

  return mc(url, options)
}
