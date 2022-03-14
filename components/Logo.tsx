import { css } from '@emotion/react'


export default function Logo() {

  const styleLogoWrapper = css({
    position: 'relative',
  })

  const styleLogo = css({
    display: 'block',
    background: 'var(--logo) no-repeat',
    backgroundSize: 'contain',
    width: 45,
    height: 45,
    '@media (max-width: 768px)': {
      width: 30,
      height: 30,
    }
  })

  return (
    <div css={styleLogoWrapper}>
      <div css={styleLogo}></div>
    </div>
  )
}