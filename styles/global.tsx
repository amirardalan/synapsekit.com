import { Global } from '@emotion/react'

const fontPrimary = '"JetBrains Mono", Menlo, Monaco, "Courier New", monospace'

const light = '#ffffff'
const lightAccent = '#ededed'
const dark = '#000000'
const darkAccent = '#222222'
const grayColor = '#a3a3a3'
const warning = '#ec4949'
const gradientDark = 'linear-gradient(to bottom, #000 0%,#555 50%,#fff 100%)'

export function GlobalStyles () {

  return (
    <>
      <Global styles={{
        '@font-face': {
          fontFamily: 'JetBrains Mono',
          fontStyle: 'normal',
          fontWeight: 400,
          fontDisplay: 'swap',
          src: 'url("/fonts/jetbrains-mono-v11-latin-regular.woff2") format("woff2")'
        },
      }}/>
      <Global styles={{
        'body, body[data-theme="light"], body[data-theme="dark"]': {
          '--font-primary': fontPrimary,
          '--color-light': light,
          '--color-dark': dark
        },
        'body, body[data-theme="light"]': {
          '--logo': 'url(/logo/logo-light.svg)',
          '--color': dark,
          '--color-warning': warning,
          '--color-neutral': grayColor,
          '--color-bg': light,
          '--color-text': dark,
          '--color-accent': lightAccent,
          '--color-gradient': gradientDark,
          '--icon-grid': 'url(icons/grid-light.svg)',
          '--icon-full': 'url(icons/full-light.svg)',
        },
        
        'body[data-theme="dark"]': {
          '--logo': 'url(/logo/logo-dark.svg)',
          '--color': light,
          '--color-warning': warning,
          '--color-neutral': grayColor,
          '--color-bg': dark,
          '--color-text': light,
          '--color-accent': darkAccent,
          '--color-gradient': gradientDark,
          '--icon-grid': 'url(icons/grid-dark.svg)',
          '--icon-full': 'url(icons/full-dark.svg)',
        }
      }} />
      <Global styles={{
        // Reset
        'html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary, time, mark, audio, video': {
          margin: 0,
          padding: 0,
          border: 0,
          fontSize: '100%',
          verticalAlign: 'baseline',
        },
        'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section': { 
          display: 'block'
        },
        'nav ul': {
          listStyle: 'none'
        },
        'blockquote, q': {
          quotes: 'none'
        },
        'blockquote:before, blockquote:after, q:before, q:after': {
          content: '" "',
        },
        ins: {
          backgroundColor: 'var(--color-accent)',
          color: 'var(--color-text)',
          textDecoration: 'none',
        },
        mark: {
          backgroundColor: 'var(--color-accent)',
          color: 'var(--color-text)',
          fontStyle: 'italic',
          fontWeight: 'bold',
        },
        del: {
          textDecoration: 'line-through',
        },
        'abbr[title], dfn[title]': {
          borderBottom: '1px dotted',
          cursor: 'help',
        },
        table: {
          borderCollapse: 'collapse',
          borderSpacing: 0,
        },
        hr: {
          display: 'block',
          height: 1,
          border: 0,  
          borderTop: '1px solid var(--color-neutral)',
          margin: '3em 0',
          padding: 0,
        },
        'input, select': {
          verticalAlign: 'middle',
        },
      }}/>
      <Global styles={{
        // Base
        'html, body': {
          backgroundColor: 'var(--color-bg)',
          fontFamily: 'var(--font-primary)',
          color: 'var(--color-text)',
          WebkitTextSizeAdjust: '100%',
        },
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          '&:before, &:after': {
              boxSizing: 'border-box',
          },
        },
        title: {
          margin: 0,
          padding: 0,
        },
        a: {
          cursor: 'pointer',
          margin: 0,
          padding: 0,
          fontSize: '100%',
          verticalAlign: 'baseline',
          background: 'transparent',
          color: 'var(--color)',
          textDecoration: 'underline',
        },
        p: {
          margin: 0,
          padding: 0,
          lineHeight: '1.8rem',
        },
        'ul, li': {
          listStyle: 'none',
          margin: 0,
          padding: 0,
        },
        button: {
          fontFamily: 'var(--font-primary)'
        },
        '.gridControls': {
          '.grid:before, .full:before': {
            content: '""',
            display: 'inline-block',
            marginRight: '.3rem',
            width: 9,
            height: 9,
          },
          '.grid:before': {
            background: 'var(--icon-grid) no-repeat',
            backgroundSize: 'contain',
          },
          '.full:before': {
            background: 'var(--icon-full) no-repeat',
            backgroundSize: 'contain',
          }
        },
      }} />
      <Global styles={{
        // Layout
        '.siteWrapper': {
          margin: '0 auto',
          maxWidth: 1200,
          minHeight: '88vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          '@media(max-width: 768px)': {
            minHeight: '80vh',
          }
        },
        '.container': {
          minHeight: '35vh',
          marginTop: '2rem',
          padding: '0 4rem',
          position: 'relative',
          '@media (max-width: 768px)': {
            padding: '0 1.5rem',
          },
          '.pageHeading': {
            marginBottom: '1rem',
            fontFamily: 'var(font-secondary)',
            fontSize: 35,
            WebkitMarqueeIncrement: '0vw',
            '@media (max-width: 768px)': {
              fontSize: 24,
            },
          },
        }
      }} />
      <Global styles={{
        // Utils
        '.center': {
          display: 'flex',
          justifyContent: 'center',
        },
        '.hide': {
          display: 'none'
        },
        '.hidden': {
          visibility: 'hidden'
        }
      }} />
      <Global styles={{
        // Text Highlighting
        '::selection': {
          background: 'var(--color)',
          color: 'var(--color-bg)',
        },
      }} />
    </>
  )
}


