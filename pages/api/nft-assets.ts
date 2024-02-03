import { NextApiRequest, NextApiResponse } from 'next'
import { getApiRoute } from '@/lib/opensea'
import { generateSlug } from '@/utils/generateSlug'


export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const response = await getApiRoute()
  const items = await response.json()

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

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  )

  return res.status(200).json(data)
}