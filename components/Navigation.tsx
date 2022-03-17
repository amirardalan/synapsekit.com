import { css } from '@emotion/react'
import { useState } from 'react'
import Link from '@/components/Link'
import Logo from '@/components/Logo'
import { nav } from '@/data/navigation'


export default function Navigation() {
  
  
  const styleMainNav = css({
    display: 'flex',
    alignItems: 'center',
    marginRight: '1.5rem',
    fontSize: 14,
    a: {
      margin: '0 1.5rem',
      color: 'var(--color-text)',
      textDecoration: 'none',
    },
    '@media(max-width: 768px)': {
      display: 'none',
    }
  })
  const styleMobileNavWrapper = css ({
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'center',
    position: 'absolute',
    height: '105vh',
    width: '75vw',
    background: 'var(--color-bg)',
    top: 0,
    right: 0,
    '.closeArea': {
      animation: 'fadeIn80 .6s ease',
      opacity: '.80',
      height: '100%',
      width: 200,
      background: 'var(--color-gradient)',
      border: 'none',
      position: 'absolute',
      left: -200,
      top: 0,
      cursor: 'pointer',
      '@media (max-width: 768px) and (max-height: 600px)': {
        width: 400,
        left: -400
      }
    },
    '@media(min-width: 769px)': {
      display: 'none',
    },
  })
  const styleMobileNavButton = css({
    alignItems: 'center',
    margin: '.1rem 0 0 1.8rem',
    zIndex: 6,
    width: 36,
    height: 22,
    background: 'transparent',
    border: 'none',
    transform: 'rotate(0deg)',
    cursor: 'pointer',
    span: {
      display: 'block',
      position: 'absolute',
      height: 1,
      width: '100%',
      background: 'var(--color-text)',
      opacity: 1,
      left: 0,
      transform: 'rotate(0deg)',
      transition: '.25s ease-in-out',
      '&:nth-of-type(1)': { top: 0, },
      '&:nth-of-type(2)': { top: 10, },
      '&:nth-of-type(3)': { top: 10, },
      '&:nth-of-type(4)': { top: 20, }
    },
    '&.open': {
      'span:nth-of-type(1)': {
        top: 10,
        width: 0,
        left: '50%',
      },
      'span:nth-of-type(2)': {
        transform: 'rotate(45deg)',
      },
      'span:nth-of-type(3)': {
        transform: 'rotate(-45deg)',
      },
      'span:nth-of-type(4)': {
        top: 14,
        width: '0%',
        left: '50%',
      },
    },
    '@media(min-width: 769px)': {
      display: 'none',
    },
  })

  const styleNavIcon = css({
    height: 16,
    width: 16,
    lineHeight: 0,
    '@media(max-width: 768px)': {
      height: 30,
      width: 30,
    }
  })

  const styleNavitem = css({
    position: 'relative',
    display: 'flex',
    a: {
      position: 'relative',
      color: 'var(--color-text)',
      '&.active': {
        '&::before': {
          color: 'var(--color)',
          position: 'absolute',
          content: '">"',
          left: -10,
        }
      },
      '@media (max-width: 768px)': {
        '&.active': {
          '&::before': {
            position: 'absolute',
            content: '">"',
            left: -30,
          },
        },
      },
    },
    '@media(max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'flex-end',
      fontSize: 18,
      WebkitMarqueeIncrement: '0vw',
      lineHeight: '3rem',
    },
    '@media (max-width: 768px) and (max-height: 600px)': {
      paddingRight: '1rem',
      alignItems: 'flex-end',
      lineHeight: '3rem',
    },
  })
  const styleMobileNavSecondary = css({
    margin: '2rem 0',
    height: 80,
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    fontFamily: 'var(--font-secondary)',
    position: 'relative',
    a: {
      display: 'block',
      marginBottom: '.5rem',
      color: 'var(--color-neutral)',
      textAlign: 'right',
    },
    '@media (max-width: 768px) and (max-height: 600px)': {
      display: 'none',
    }
  })

  // Mobile Menu
  const [toggleDisableScrolling, setToggleDisableScrolling] = useState(false)
  const disableScroll = () => {
    setToggleDisableScrolling(!toggleDisableScrolling)
    toggleDisableScrolling
      ? document.body.style.overflow = 'scroll'
      : document.body.style.overflow = 'hidden'
  }
  const [toggleMobileNav, setToggleMobileNav] = useState(false)
  const toggleMenu = () => {
    setToggleMobileNav(!toggleMobileNav),
    disableScroll()
  }
  const MobileMenu = () => (
    <div css={styleMobileNavWrapper}>
      <Navitem />
      <div css={styleMobileNavSecondary}>
        <Logo />
      </div>
      <button
        className="closeArea"
        onClick={toggleMenu}
      ></button>
    </div>
  )

  const Navitem = () => (
    <nav css={styleNavitem}>
      {nav.map((item: any, index: number) => {
        return (
          <Link href={item.path} activeClassName="active" exact={item.exact} as="" key={index}>
            <a onClick={toggleMobileNav ? toggleMenu : null} className={item.cName} aria-label={item.aria}>
              {item.icon ? <div css={styleNavIcon}></div> : item.title}
            </a>
          </Link>
        )}
      )}
    </nav>
  )

  return (
    <>
      <div css={styleMainNav}>
        <Navitem />
      </div>
      <button
        css={styleMobileNavButton}
        onClick={toggleMenu}
        className={toggleMobileNav ? 'open' : 'closed'}
        aria-label="Navigation Menu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
      { toggleMobileNav ? <MobileMenu /> : null }
    </>
  )
}