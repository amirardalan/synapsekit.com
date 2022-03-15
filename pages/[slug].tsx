import { GetStaticPaths, GetStaticProps } from 'next'
import { getNftAssets } from '@/lib/opensea'
import Link from 'next/link'
import Container from '@/components/Container'
import NftDetail from '@/components/NftDetail'
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
  
  const assetIndex = assets.findIndex((
    x: { slug: Array<string> }) => x.slug === params.slug
  )
  const asset = assets[assetIndex]
  return { props: { nft: asset } }
}

export default function Detail({ nft }) {
  return (
    <Container title={`${title} - ${nft.name}`}>
      <Link href='/'>
        <a aria-label="Back to Collection">
          ← Collection
        </a>
      </Link>
      <NftDetail nft={nft} />
    </Container>
  )
}