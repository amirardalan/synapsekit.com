import { css } from '@emotion/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Container from '@/components/Container'


const URL = process.env.NEXT_PUBLIC_SITE_URL

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${URL}/api/nft-assets`)
  const assets = await res.json()
  const paths = assets.nfts.map((asset: any) => ({ 
    params: { slug: asset.slug},
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`${URL}/api/nft-assets/`)
  const assets = await res.json()
  const assetIndex = assets.nfts.findIndex((
    x: { slug: Array<string> }) => x.slug === params.slug
  )
  const asset = assets.nfts[assetIndex]
  return { props: { nft: asset } }
}

export default function Detail({ nft }) {
  
  const styleDetailWrapper = css({
    display: 'flex',
  })

  return (
    <Container title={`SynapseKit - ${nft.name}`}>
      <div css={styleDetailWrapper}>
        Detail goes here
      </div>
    </Container>
  )
}