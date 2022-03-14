import NftAsset from '@/components/NftAsset'


export default function NftCollection({data}) {

  if (!data) {
    return null
  }

  data = Array.from(data.assets)

  return data.map(asset => (
    <NftAsset key={asset.id} {...asset} />
  ))
}