import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'czv1yn3y',
  dataset: 'production',
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2022-01-31',
})

export default client
