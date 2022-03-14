import NftAsset from '@/components/NftAsset'


export default function NftCollection({data}) {

  if (!data) {
    return null
  }

  return data.map((asset: { id: number }) => (
    <NftAsset key={asset.id} {...asset} />
  ))
}