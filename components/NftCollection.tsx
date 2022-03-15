import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import NftAsset from '@/components/NftAsset'


export default function NftCollection() {

  const { data } = useSWR('/api/nft-assets', fetcher)

  if (!data) {
    return null
  }

  console.log(data)

  return data.nfts.map((asset: { id: number }) => (
    <NftAsset key={asset.id} {...asset} />
  ))
}