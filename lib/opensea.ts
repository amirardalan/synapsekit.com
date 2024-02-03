import { generateSlug } from '@/utils/generateSlug'

const WALLET_ADDRESS = process.env.OPENSEA_WALLET_ADDRESS
const X_API_KEY = process.env.OPENSEA_API_KEY
const OPENSEA_WALLET_ENDPOINT = `https://api.opensea.io/api/v2/chain/ethereum/account/${WALLET_ADDRESS}/nfts?limit=50`
const options = { method: 'GET', headers: { Accept: 'application/json', 'X-Api-Key': `${X_API_KEY}`, Host: 'api.opensea.io' }}

export const getNftAssets = async () => {

    const res = await fetch(OPENSEA_WALLET_ENDPOINT, options)
    const items = await res.json()

    const data = items.nfts.map(({ identifier, image_url, animation_url, name, description, opensea_url, collection, updated_at }) => ({
      ["slug"]: generateSlug(name),
      ["id"]: identifier,
      ["image_url"]: image_url,
      ["animation_url"]: animation_url ?? image_url,
      ["name"]: name,
      ["description"]: description,
      ["permalink"]: opensea_url,
      ["collection"]: collection,
      ["created_date"]: updated_at,
    }))
  
    return data
}

export const getApiRoute = async () => {
  return fetch(OPENSEA_WALLET_ENDPOINT, options)
}

