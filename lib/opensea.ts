import { generateSlug } from '@/utils/generateSlug'

const WALLET_ADDRESS = process.env.OPENSEA_WALLET_ADDRESS
const X_API_KEY = process.env.OPENSEA_API_KEY
const OPENSEA_WALLET_ENDPOINT = `https://api.opensea.io/api/v1/assets?owner=${WALLET_ADDRESS}&order_direction=desc&limit=20`
const options = { method: 'GET', headers: { Accept: 'application/json', 'X-API-KEY': `${X_API_KEY}` }}

export const getNftAssets = async () => {

    const res = await fetch(OPENSEA_WALLET_ENDPOINT, options)
    const items = await res.json()

    const data = items.assets.map(({ id, image_url, name, description, permalink, collection, num_sales }) => ({
      ["slug"]: generateSlug(name),
      ["id"]: id,
      ["image_url"]: image_url,
      ["name"]: name,
      ["description"]: description,
      ["permalink"]: permalink,
      ["collection"]: collection.name,
      ["created_date"]: collection.created_date,
      ["num_sales"]: num_sales
    }))
  
    return data
}

export const getApiRoute = async () => {
  return fetch(OPENSEA_WALLET_ENDPOINT, {
    method: 'GET',
    headers: { Accept: 'application/json', 'X-API-KEY': `${X_API_KEY}` }
  })
}

