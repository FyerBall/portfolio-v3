require('dotenv').config()
const Airtable = require('airtable-node')

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('appbfCKDM7Dzo78dk')
  .table('projects')

exports.handler = async (event, context) => {
  const { id } = event.queryStringParameters
  if (id) {
    try {
      const product = await airtable.retrieve(id)
      if (product.error) {
        return {
          statusCode: 404,
          body: `No product with id: ${id}`,
        }
      }
      return {
        statusCode: 200,
        body: JSON.stringify(product),
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: `Server Error`,
      }
    }
  }
  try {
    const { records } = await airtable.list()
    const products = records.map((product) => {
      const { id } = product
      const {
        name,
        image,
        library,
        year,
        linkLive,
        linkSource,
        desc,
        archived,
        category,
        libraryInfo,
        todos,
      } = product.fields
      const imageUrl = image.map(({ url }) => url)
      const libraryUrl = library.map(({ url }) => url)

      return {
        id,
        name,
        imageUrl,
        libraryUrl,
        year,
        linkLive,
        linkSource,
        desc,
        archived,
        category,
        libraryInfo,
        todos,
      }
    })
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Server Error',
    }
  }
}
