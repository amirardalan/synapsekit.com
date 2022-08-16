import { css } from '@emotion/react'
import Container from '@/components/Container'
import { about } from '@/data/content'

export default function About() {

  const styleAboutWrapper = css({
    display: 'flex',
    flexDirection: 'column',
  })

  const styleAboutContent = css({
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'row',
    '@media(max-width: 768px)': {
      flexDirection: 'column'
    },
    '.contentWrapper': {
      'h1, h2': {
        marginBottom: '.5rem',
        fontSize: 30,
        '@media(max-width: 768px)': {
          fontSize: 22,
        },
      },
      '&:first-of-type': {
        width: '65%',
        marginRight: '4rem'
      },
      '&:last-of-type': {
        width: '35%',
      },
      '@media(max-width: 768px)': {
        '&:first-of-type, &:last-of-type': {
          width: '100%',
          marginRight: 0,
        },
      },
    },
    '.contentContainer': {
      borderTop: '1px solid var(--color)',
      marginTop: '1rem',
      paddingTop: '1rem',
      fontSize: 13,
      '@media(max-width: 768px)': {
        marginBottom: '2rem'
      },
      '&.right p': {
        '&:before': {
          content: '"> "'
        }
      }
    }
  })

  return(
    <Container title={about.meta.title}>
      <div css={styleAboutWrapper}>
        <div css={styleAboutContent}>
          <div className="contentWrapper">
            <h1>{about.title}</h1>
            <div className="contentContainer">
              <p>{about.contentLeft}</p>
            </div>
          </div>
          <div className="contentWrapper">
            <h2>{about.titleRight}</h2>
            <div className="contentContainer right">
              <p>
                <a
                  href={about.linkRight}
                  target="_blank"
                  rel="noopener, noreferrer"
                >
                  {about.github}
                </a>.
              </p>
              <p>
                {about.assets}
                <a
                  href={about.linkRight2}
                  target="_blank"
                  rel="noopener, noreferrer"
                >
                  {about.owner}
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}