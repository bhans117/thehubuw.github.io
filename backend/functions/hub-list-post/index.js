import { mc } from '../../lib/mailchimp'
import { CORS_HEADERS } from '../../lib/cors'

export function handler (event, context, callback) {
  console.log(event)
  try {
  main(JSON.parse(event.body))
    .then((resp) => {
      console.log(resp)
      callback(null, resp)
    })
    .catch((err) => {
      console.log(err)
      callback(null, { statusCode: 500, headers: CORS_HEADERS, body: JSON.stringify(err) })
    })
  } catch (err) {
    console.log(err)
    callback(null, err)
  }
}

function main (body) {
  console.log(body)
  const email = body.email
  const fields = body.fields
  return addToMailchimp(email, fields)
    .then((resp) => {
      const { status } = resp.body
      return { statusCode: 200, headers: CORS_HEADERS, body: JSON.stringify({ email, status }) }
    })
}

function addToMailchimp (email, fields = {firstName, lastName}) {
  const url = `3.0/lists/${process.env.MC_LIST}/members`
  const options = {
    method: 'POST',
    body: {
      email_address: email,
      status: 'subscribed',
      merge_fields: {"FNAME": "first name", "LNAME": "last name"}
    }
  }

  return mc(url, options)
}
