import { createHash } from 'crypto'
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
  const email = event.queryStringParameters.email

  if (!email) { return { statusCode: 400, headers: {}, body: 'email needed' } }
  console.log(email.trim())

  let hash = createHash('md5')
  hash.update(email.trim())
  const emailHash = hash.digest('hex')

  return mc(`3.0/lists/${process.env.MC_LIST}/members/${emailHash}`)
    .then((resp) => {
      return { statusCode: 200, headers: {}, body: resp.body.status }
    })
    .catch((err) => {
      if (err.statusCode === 404) { return { statusCode: 404, headers: {}, body: err.statusMessage } }
      throw err
    })
}
