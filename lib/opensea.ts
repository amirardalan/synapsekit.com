import { generateSlug } from '@/utils/generateSlug'

const WALLET_ADDRESS = process.env.OPENSEA_WALLET_ADDRESS
const X_API_KEY = process.env.OPENSEA_API_KEY
const OPENSEA_WALLET_ENDPOINT = `https://api.opensea.io/api/v2/chain/ethereum/account/0xc2a0f075dfd4a8ce1b49cbbed8cfb1664b4e789b/nfts?limit=50`
const options = { method: 'GET', headers: { Accept: 'application/json', 'X-Api-Key': `${X_API_KEY}`, Host: 'api.opensea.io' }}

export const getNftAssets = async () => {

    const res = await fetch(OPENSEA_WALLET_ENDPOINT, options)
    const items = await res.json()

    console.log(items.nfts)

    const data = items.nfts.map(({ id, image_url, animation_url, name, description, permalink, collection, num_sales }) => ({
      ["slug"]: generateSlug(name),
      ["id"]: id,
      ["image_url"]: image_url,
      ["animation_url"]: animation_url,
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
  return fetch(OPENSEA_WALLET_ENDPOINT, options)
}

