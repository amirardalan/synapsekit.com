import { css } from '@emotion/react'
import Image from 'next/image'

export default function NftAsset({ nft }) {

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

  return (
    <div css={styleDetailWrapper}>
      <div css={styleDetailImage}>
        <Image
          src={nft.image_url}
          alt={nft.name}
          width={512}
          height={512}
        />
      </div>
      <div css={styleInfoPanel}>
        <ul>
          <li><h1 className="pageHeading">
            {nft.name}
          </h1></li>
          <li><h2>{nft.collection}</h2></li>
          <li><p className="desc">{nft.description}</p></li>
          <li>
            <a
              href={nft.permalink}
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