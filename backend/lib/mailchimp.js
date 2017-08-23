import got from 'got'

function generateMailchimp (dataCenter, apiKey) {
  const baseUrl = `${dataCenter}.api.mailchimp.com`
  const options = {
    auth: `user:${apiKey}`,
    json: true
  }

  return (endUrl, opts) => got(`${baseUrl}/${endUrl}`,
                               Object.assign({}, options, opts))
}

export const mc = generateMailchimp(
  process.env.MC_DATACENTER,
  process.env.MC_API_KEY
)
