import { NextApiRequest, NextApiResponse } from 'next'
import { getNftAssets } from '@/lib/opensea'
import { generateSlug } from '@/utils/generateSlug'


export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const response = await getNftAssets()
  const items = await response.json()

  const nfts = items.assets.map(({ id, image_url, name, description, permalink, collection, num_sales }) => ({
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

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  )

  return res.status(200).json(JSON.stringify(nfts))
}