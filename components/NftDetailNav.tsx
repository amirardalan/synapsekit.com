import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'


export default function NftDetailNav({ assets, asset }) {

  const router = useRouter()

  const navPointer = assets.findIndex((x: { slug: Array<string> }) => x.slug === asset.slug)
  const hasPrev = navPointer >= 1
  const hasNext = navPointer < assets.length-1
  const handlePrev = hasPrev ? assets[navPointer-1].slug : asset.slug
  const handleNext = hasNext ? assets[navPointer+1].slug : asset.slug
  const displayPrev = hasPrev ? '' : 'hidden'
  const displayNext = hasNext ? '' : 'hidden'

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const start = () => { setLoading(true) }
    const end = () => { setLoading(false) }
    Router.events.on("routeChangeStart", start)
    Router.events.on("routeChangeComplete", end)
    Router.events.on("routeChangeError", end)
    document.addEventListener("keyup", (e) => {
      if(e.key === 'ArrowLeft') {
        router.push('/'+assets[navPointer-1].slug)
      } else if (e.key === 'ArrowRight') {
        router.push('/'+assets[navPointer+1].slug)
      }
    })
    return () => {
      Router.events.off("routeChangeStart", start)
      Router.events.off("routeChangeComplete", end)
      Router.events.off("routeChangeError", end)
    }
  }, [assets, navPointer, router])

  const styleDetailNavWrapper = css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    a: {
      display: 'flex',
      '&.hidden': {
        visibility: 'hidden'
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
        ⇽{hasPrev && navPointer < 10 ? '0'+navPointer : navPointer} Prev
        </a>
      </Link>
      <div className="controls"><div>← ⌨️ →</div>arrow keys enabled</div>
      <Link href={'/'+handleNext}>
        <a className={'next '+displayNext} aria-label="Next">
          Next {hasNext && navPointer < 10 ? '0'+(navPointer+1) : (navPointer+1)}⇾
        </a>
      </Link>
    </div>
  )
}