import { css } from '@emotion/react'
import { useState } from 'react'
import Container from '@/components/Container'
import NftCollection from '@/components/NftCollection'
import { home } from '@/data/content'


export default function Home() {

  const [toggleGridView, setToggleGridView] = useState(true)

  const handleGridToggle = () => {
    setToggleGridView(!toggleGridView)
  }

  const styleHome = css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '@media (max-width: 890px)': {
      flexDirection: 'column',
    }
  })

  const styleGridControls = css({
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '1rem',
    button: {
      margin: 0,
      padding: 0,
      background: 'transparent',
      border: 'none',
      boxShadow: 'none',
      cursor: 'pointer',
      textTransform: 'uppercase',
      fontSize: 14,
      lineHeight: '1rem',
      color: 'var(--color)',
    },
    '@media(max-width: 480px)': {
      '&.gridControls': {
        display: 'flex'
      },
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
      gap: '1rem',
      gridTemplateColumns: 
        toggleGridView
          ? 'repeat(1, 1fr)' 
          : 'repeat(2, 1fr)',
    },
  })

  return (
    <Container title={home.meta.title}>
      <div css={styleGridControls} className="gridControls hide">
        <button onClick={()=> handleGridToggle()}>
          {toggleGridView ?
          <div className="grid">
            <span>⊞</span>Grid
          </div> :
          <div className="full">
            <span>⊡</span>Full
          </div>
          }
        </button>
      </div>
      <main css={styleHome}>
        <div css={styleGridContainer}>
          <NftCollection/>
        </div>
      </main>
    </Container>
  )
}