import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { useSwipeable } from 'react-swipeable'


export default function NftAsset({ asset, assets }) {

  const router = useRouter()

  const navPointer = assets.findIndex((x: { slug: Array<string> }) => x.slug === asset.slug)
  const hasVideo = asset?.animation_url && asset?.animation_url.endsWith('.mp4')
  const hasPrev = navPointer >= 1
  const hasNext = navPointer < assets.length-1
  const handlePrev = hasPrev ? assets[navPointer-1].slug : null
  const handleNext = hasNext ? assets[navPointer+1].slug : null
  const displayPrev = hasPrev ? '' : 'disabled'
  const displayNext = hasNext ? '' : 'disabled'

  const renderPrevLink = () => {
    if (hasPrev && navPointer < 10) { return '← .0'+navPointer+' Prev' }
    if (hasPrev && navPointer >= 10) { return '← .'+navPointer+' Prev' }
    if (!hasPrev) { return '* .00 Prev' }
  }
  const renderNextLink = () => {
    if (hasNext && navPointer < 9) { return 'Next .0'+(navPointer+1)+' →' }
    if (hasNext && navPointer >= 9) { return 'Next .'+(navPointer+1)+' →' }
    if (!hasNext) { return 'Next .00 *' }
  }

  const handlers = useSwipeable({
    onSwipedRight: () => hasPrev ? router.push('/'+handlePrev) : null,
    onSwipedLeft: () => hasNext ? router.push('/'+handleNext) : null,
    delta: 10,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: false,
    rotationAngle: 0,
  })

  const styleDetailNavWrapper = css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid var(--color)',
    paddingBottom: '1.4rem',
    '@media(max-width: 1024px)': {
      paddingBottom: '.4rem',
    },
    a: {
      display: 'flex',
      textDecoration: 'none',
      '&.disabled': {
        color: 'var(--color-neutral)',
        pointerEvents: 'none'
      },
    },
    '.controls': {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      lineHeight: '.6rem',
      fontSize: 8,
      color: 'var(--color-neutral)',
      div: {
        fontSize: 18,
      },
      '@media(max-width: 1024px)': {
        display: 'none',
      }
    },
  })

  const styleSwipeTip = css({
    display: 'none',
    margin: '.5rem 0 1.5rem',
    textAlign: 'center',
    fontSize: 10,
    textTransform: 'uppercase',
    color: 'var(--color-neutral)',
    '@media(max-width: 768px)': {
      display: 'block',
    }
  })

  const styleDetailWrapper = css({
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'row',
    div: {
      maxWidth: '50%',
    },
    '@media(max-width: 768px)': {
      marginTop: '.5rem',
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
    },
    a: {
      background: 'transparent',
      color: 'var(--color)',
      border: '1px solid var(--color)',
      padding: '.2rem .4rem',
      fontSize: 13,
      textTransform: 'uppercase',
      textDecoration: 'none',
      '&:hover': {
        background: 'var(--color)',
        color: 'var(--color-bg)',
        border: '1px solid var(--color)',
      },
      '&:after': {
        content: '"↗"',
        paddingLeft: '.2rem',
        fontSize: 20,
      }
    }
  })

  return (
    <div {...handlers}>
      <div css={styleDetailNavWrapper}>
        <Link href={'/'+handlePrev}>
          <a className={'prev '+displayPrev} aria-label="Previous">
          {renderPrevLink()}
          </a>
        </Link>
        <Link href='/'>
          <a className="gridControls" aria-label="Home">
            <span>⊞</span> Grid
          </a>
        </Link>
        <Link href={'/'+handleNext}>
          <a className={'next '+displayNext} aria-label="Next">
            {renderNextLink()}
          </a>
        </Link>
      </div>
      <div css={styleSwipeTip}>← Swipe to Navigate →</div>
      <div css={styleDetailWrapper}>
        <div css={styleDetailImage}>
          {hasVideo ?
          <div className="videoWrapper">
            <video width="100%" height="100%" controls muted autoPlay loop playsInline>
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
    </div>
  )
}