import { mc } from '../../lib/mailchimp'

export function handler (event, context, callback) {
  main(event)
    .then((resp) => {
      callback(null, resp)
    })
    .catch((err) => {
      callback(err)
    })
}

function main (event) {
  const email = event.body.email
  return addToMailchimp(email)
    .then((resp) => {
      const { status } = resp.body
      return { statusCode: 200, headers: {}, body: { email, status } }
    })
}

function addToMailchimp (email, fields = {}) {
  const url = `3.0/lists/${process.env.MC_LIST}/members`
  const options = {
    method: 'POST',
    body: {
      email_address: email,
      status: 'subscribed',
      merge_fields: fields
    }
  }

  return mc(url, options)
}
