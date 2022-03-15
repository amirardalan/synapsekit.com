import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function NftDetailNav({ assets, asset }) {

  const router = useRouter()

  const navPointer = assets.findIndex((x: { slug: Array<string> }) => x.slug === asset.slug)
  const hasPrev = navPointer >= 1
  const hasNext = navPointer < assets.length-1
  const handlePrev = hasPrev ? assets[navPointer-1].slug : null
  const handleNext = hasNext ? assets[navPointer+1].slug : null
  const displayPrev = hasPrev ? '' : 'disabled'
  const displayNext = hasNext ? '' : 'disabled'


  const styleDetailNavWrapper = css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid var(--color)',
    paddingBottom: '1.5rem',
    a: {
      display: 'flex',
      textDecoration: 'none',
      '&.disabled': {
        color: 'var(--color-neutral)',
        pointerEvents: 'none'
      },
      fontSize: 12,
      textTransform: 'uppercase',
      span: {
        fontSize: 18,
        lineHeight: '.9rem',
        marginRight: '.2rem'
      }
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
        display: 'none'
      }
    }
  })

  const renderPrevLink = () => {
    if (hasPrev && navPointer < 9) {
      return '← .0'+navPointer+' Prev'
    }
    if (hasPrev && navPointer >= 9) {
      return '← .'+navPointer+' Prev'
    }
    if (!hasPrev) {
      return '* .00 Prev'
    }
  }

  const renderNextLink = () => {
    if (hasNext && navPointer < 9) {
      return 'Next .0'+(navPointer+1)+' →'
    }
    if (hasNext && navPointer >= 9) {
      return 'Next .'+(navPointer+1)+' →'
    }
    if (!hasNext) {
      return 'Next .00 *'
    }
  }

  return (
    <div css={styleDetailNavWrapper}>
      <Link href={'/'+handlePrev}>
        <a className={'prev '+displayPrev} aria-label="Previous">
        {renderPrevLink()}
        </a>
      </Link>
      <Link href='/'>
        <a aria-label="Home">
        <span>⊞</span> Grid
        </a>
      </Link>
      <Link href={'/'+handleNext}>
        <a className={'next '+displayNext} aria-label="Next">
          {renderNextLink()}
        </a>
      </Link>
    </div>
  )
}