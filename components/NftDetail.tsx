import { css } from '@emotion/react'
import { assert } from 'console'
import Image from 'next/image'

export default function NftAsset({ asset }) {

  const styleDetailWrapper = css({
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'row',
    div: {
      maxWidth: '50%',
    },
    '@media(max-width: 768px)': {
      flexDirection: 'column',
      div: {
        maxWidth: 'unset',
      },
    },
  })

  const styleDetailImage = css({
    marginRight: '2rem',
    '.videoWrapper': {
      maxheight: 400,
      maxWidth: 400,
    },
    '@media(max-width: 768px)': {
      marginBottom: '2rem',
      marginRight: 0,
    }
  })

  const styleInfoPanel = css({
    li: {
      marginBottom: '1.5rem',
      '.desc': {
        fontSize: 12,
        lineHeight: '1.2rem'
      }
    }
  })

  const hasVideo = asset?.animation_url && !asset?.animation_url.startsWith('https://ipfs.io') && !asset?.animation_url.endsWith('.glb')

  return (
    <div css={styleDetailWrapper}>
      <div css={styleDetailImage}>
        {hasVideo ?
        <div className="videoWrapper">
          <video width="100%" height="100%" controls muted autoPlay loop webkit-playsinline playsInline>
            <source src={asset.animation_url} type="video/mp4" />
          </video>
        </div> :
        <Image
          src={asset.image_url}
          alt={asset.name}
          width={400}
          height={400}
        />}
      </div>
      <div css={styleInfoPanel}>
        <ul>
          <li><h1 className="pageHeading">
            {asset.name}
          </h1></li>
          <li><h2>{asset.collection}</h2></li>
          <li><p className="desc">{asset.description}</p></li>
          <li>
            <a
              href={asset.permalink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on OpenSea
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}