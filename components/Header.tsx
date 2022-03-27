import { css } from '@emotion/react'
import Navigation  from '@/components/Navigation'
import Link from 'next/link'
import Logo from '@/components/Logo'

import dynamic from 'next/dynamic'

const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), {
  ssr: false
})


const Header = ({ toggleTheme }) => {
  
  const styleHeaderWrapper = css({
    maxWidth: 1200,
    margin: '0 auto',
    padding: '2rem 4rem 0',
    position: 'sticky',
    top: '-2rem',
    backgroundColor: 'var(--color-bg)',
    zIndex: 5,
    '.excludeInHeader': {
      display: 'none',
    },
    '@media(max-width: 1024px)': {
      padding: '0 2.5rem',
      top: 0,
    },
    '@media(max-width: 600px)': {
      padding: '0 1.5rem',
    }
  })

  const styleHeader = css({
    paddingBottom: '1rem',
    paddingTop: '1rem',
    height: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    a:  { textDecoration: 'none' },
    '.headerRight': {
      minWidth: '395.2px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      '@media (max-width: 768px)': {
        flexDirection: 'row-reverse',
        minWidth: 'unset',
      }
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


  return (
    <header css={styleHeaderWrapper}>
      <div css={styleHeader}>
        <Link
          href="/"
          aria-label="SynapseKit"
          passHref
        >
          <button css={styleLogoButton}>
            <Logo /> 
          </button>
        </Link>
        <div className="headerRight">
          <Navigation />
          <ThemeToggle toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  )

}

export default Header