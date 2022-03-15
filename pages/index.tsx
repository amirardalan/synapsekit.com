import { css } from '@emotion/react'
import Container from '@/components/Container'
import NftCollection from '@/components/NftCollection'
import { home } from '@/data/content'


export default function Home() {

  const styleHome = css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '@media (max-width: 890px)': {
      flexDirection: 'column',
    }
  })

  const styleGridContainer = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 4fr)',
    gap: '4rem',
    gridAutoRows: 'minmax(275px, auto)',
    lineHeight: '1.2rem',
    '@media (max-width: 1024px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 480px)': {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  })

  return (
    <Container title={home.meta.title}>
      <main css={styleHome}>
        <div css={styleGridContainer}>
          <NftCollection/>
        </div>
      </main>
    </Container>
  )
}