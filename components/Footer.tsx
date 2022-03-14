import { css } from '@emotion/react'
import { footer } from '@/data/content'


export default function Footer() {


  const styleFooterWrapper = css({
    marginTop: '6rem',
    padding: '4rem 4rem 1rem 4rem',
    '@media(max-width: 1024px)': {
      marginTop: '4rem',
      padding: '3.5rem 2.5rem 1rem 2.5rem',
    },
    '@media(max-width: 480px)': {
      padding: '3rem 1.5rem 1rem 1.5rem',
    }
  })
  const styleCopyright = css({
    fontFamily: 'var(--font-primary)',
    fontSize: 10,
    lineHeight: '1.2rem',
  })

  return (
    <footer css={styleFooterWrapper}>
      <div css={styleCopyright}>
        <div>
          {footer.copyright.text+(new Date().getFullYear())} {'• '} 
          <a href={footer.copyright.link} target="_blank" rel="noopener noreferrer" aria-label={footer.copyright.name}>
            {footer.copyright.name}
          </a>
        </div>
      </div>
    </footer>
  )
}