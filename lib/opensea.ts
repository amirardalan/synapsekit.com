const WALLET_ADDRESS = process.env.OPENSEA_WALLET_ADDRESS
const X_API_KEY = process.env.OPENSEA_API_KEY
const OPENSEA_WALLET_ENDPOINT = `https://api.opensea.io/api/v1/assets?owner=${WALLET_ADDRESS}&order_direction=desc&limit=20`


export const getNftAssets = async () => {

  return fetch(OPENSEA_WALLET_ENDPOINT, {
    method: 'GET',
    headers: { Accept: 'application/json', 'X-API-KEY': `${X_API_KEY}` }
  })
}