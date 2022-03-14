import { css } from '@emotion/react'
import Navigation  from '@/components/Navigation'
import Link from 'next/link'
import Logo from '@/components/Logo'
import { nav } from '@/data/content'

import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'

const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), {
  ssr: false
})

export const getStaticProps: GetStaticProps = async () => {
  return { props: { data: nav } }
}


const Header = ({ toggleTheme }) => {
  
  const styleHeaderWrapper = css({
    maxWidth: 1200,
    margin: '0 auto',
    padding: '2rem 4rem 0',
    position: 'sticky',
    top: '-2rem',
    backgroundColor: 'var(--color-bg)',
    zIndex: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'left',
    '@media(max-width: 768px)': {
      padding: '0 1.5rem',
      top: 0,
    },
  })

  const styleTitle = css({
    padding: '.8rem 0',
    height: 'auto',
    justifyContent: 'left',
    a:  { textDecoration: 'none' },
    '.siteDescription': {
      marginTop: '.5rem',
      color: 'var(--color-neutral)',
      fontSize: 10,
      transition: '0.2s',
    }
  })

  const styleLogoButton = css({
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  })

  const styleControlsWrapper = css({
    display: 'flex',
    justifyContent: 'right',
    '.styleControls': {
      height: 25,
      display: 'flex',
      flexDirection: 'row',
      '@media (max-width: 768px)': {
        flexDirection: 'row-reverse',
      },
    }
  })

  return (
    <div css={styleHeaderWrapper}>

      <div css={styleTitle}>
        <Link
          href="/"
          aria-label="Synapse Kit"
          passHref
        >
          <button css={styleLogoButton}>
            <Logo />
          </button>
        </Link>

      </div>

      <div css={styleControlsWrapper}>
        <div className="styleControls">
          <Navigation />
          <ThemeToggle toggleTheme={toggleTheme} />
        </div>

      </div>


    </div>
  )

}

export default Header