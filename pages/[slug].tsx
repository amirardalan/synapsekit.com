import { GetStaticPaths, GetStaticProps } from 'next'
import { getNftAssets } from '@/lib/opensea'
import Container from '@/components/Container'
import NftDetail from '@/components/NftDetail'
import NftDetailNav from '@/components/NftDetailNav'
import { title } from '@/data/content'


export const getStaticPaths: GetStaticPaths = async () => {
  const assets = await getNftAssets()
  const paths = assets.map((asset: any) => ({ 
    params: { slug: asset.slug},
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const assets = await getNftAssets()
  const currentAsset = assets.findIndex((x: { slug: Array<string> }) => x.slug === params.slug)
  const assetArr = assets
  const asset = assets[currentAsset]
  return { props: { asset: asset, assets: assetArr } }
}

export default function Detail({ asset, assets }) {
  return (
    <Container title={`${title} - ${asset.name}`}>
      <NftDetailNav asset={asset} assets={assets} />
      <NftDetail asset={asset} />
    </Container>
  )
}