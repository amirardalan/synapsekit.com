import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import Container from '@/components/Container'
import NftDetail from '@/components/NftDetail'
import { title } from '@/data/content'


const URL = process.env.NEXT_PUBLIC_SITE_URL
const options = { 
  method: "GET",
  headers: { Accept: 'application/json, text/plain, */*' },
  'User-Agent': '*',
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${URL}/api/nft-assets`, options)
  const assets = await res.json()
  const paths = assets.nfts.map((asset: any) => ({ 
    params: { slug: asset.slug},
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`${URL}/api/nft-assets`, {
    method: "GET",
    headers: { Accept: "application/json; charset=UTF-8"},
  }
)
  const assets = await res.json()
  const assetIndex = assets.nfts.findIndex((
    x: { slug: Array<string> }) => x.slug === params.slug
  )
  const asset = assets.nfts[assetIndex]
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