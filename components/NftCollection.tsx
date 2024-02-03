import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import NftAsset from '@/components/NftAsset'


export default function NftCollection() {

  const { data } = useSWR('/api/nft-assets', fetcher)

  if (!data) {
    return null
  }

  return data.map((asset: { id: number, name: string }) => (
    <NftAsset key={asset.id + asset.name} {...asset} />
  ))
}