import { css } from '@emotion/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function NftDetailNav({ assets, asset }) {

  const router = useRouter()

  const navPointer = assets.findIndex((x: { slug: Array<string> }) => x.slug === asset.slug)
  const hasPrev = navPointer >= 1
  const hasNext = navPointer < assets.length-1
  const handlePrev = hasPrev ? assets[navPointer-1].slug : asset.slug
  const handleNext = hasNext ? assets[navPointer+1].slug : asset.slug
  const displayPrev = hasPrev ? '' : 'hide'
  const displayNext = hasNext ? '' : 'hide'

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if(e.key === 'ArrowLeft') {
        router.push('/'+handlePrev)
      } else if (e.key === 'ArrowRight') {
        router.push('/'+handleNext)
      }
    })
  },[handleNext, handlePrev, router])

  const styleDetailNavWrapper = css({
    display: 'flex',
    justifyContent: hasPrev ? 'space-between' : 'right',
    alignItems: 'center',
    a: {
      display: 'flex',
      '&.prev': {
        alignSelf: 'flex-end',
      },
      '&.next': {
        alignSelf: 'flex-end',
      },
      '&.hide': {
        display: 'none'
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
        display: 'none'
      }
    }
  })

  return (
    <div css={styleDetailNavWrapper}>
      <Link href={'/'+handlePrev}>
        <a className={'prev '+displayPrev} aria-label="Previous">
          ← Previous
        </a>
      </Link>
      <div className="controls"><div>← ⌨️ →</div>arrow keys enabled</div>
      <Link href={'/'+handleNext}>
        <a className={'next '+displayNext} aria-label="Next">
          Next →
        </a>
      </Link>
    </div>
  )
}