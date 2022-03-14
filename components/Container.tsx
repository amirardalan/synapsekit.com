import { useRouter } from 'next/router'
import { GlobalStyles } from '@/styles/global'
import Head from 'next/head'
import Footer from '@/components/Footer'

export default function Container(props: any) {

  const { children, ...customMeta } = props;
  const router = useRouter()
  const meta = {
    title: 'SynapseKit – NFT Collection',
    description: 'A collection of NFTs from the Metaverse.',
    image: `${process.env.NEXT_PUBLIC_SITE_URL}/thumbnail.jpg`,
    type: 'website',
    robots: 'follow, index',
    ...customMeta
  }


  return (
    <>
      <Head>
        <title>{meta.title}</title>
        {/* <meta name="robots" content={meta.robots} /> */}
        <meta name="robots" content="noindex"/>

        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`} />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`} />
        
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="SynapseKit" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />

        <meta name="description" content={meta.description} />
        <meta name="thumbnail" property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@synapsekit.com" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:image:alt" content={meta.title} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <GlobalStyles />
      <div className="siteWrapper">
        <div className="container">
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}
