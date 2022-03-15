import { css } from '@emotion/react'
import Container from '@/components/Container'

export default function Detail() {

  const styleDetailWrapper = css({
    display: 'flex',
  })

  return (
    <Container title={`SynapseKit - `}>
      <div css={styleDetailWrapper}>
        Detail goes here
      </div>
    </Container>
  )
}