import Container from '@/components/Container'
import Link from 'next/link'
import { error } from '@/data/content'


export const getStaticProps = async () => {
  return { props: { data: error} }
}


export default function Custom404({ data }) {

  return(
    <Container title={data.meta.title} robots="noindex">
      <div>

        <div css={{
          padding: '4rem 1.5rem',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'var(--page-bg)',
        }}>

          <div css={{
            display: 'flex',
            justifyContent: 'center',
            animation: 'slideUp .5s forwards',

            h1: {
              margin: '0 1rem 0 .5rem',
              paddingRight: '1rem',
              alignSelf: 'center',
              borderRight: '1px solid var(--color-neutral)',
              fontSize: '40px',
            },
            h2: {
              alignSelf: 'center',
              fontFamily: 'var(--font-primary)',
              fontSize: '12px',
              fontWeight: 'normal',
            },
          }}>
            <h1 aria-label={data.title}>
              {data.title}
            </h1>
            <h2 aria-label={data.text}>
              {data.text}
            </h2>
          </div>
          <div css={{
            marginTop: '1.5rem',
            textAlign: 'center',
            animation: 'slideUp 1s forwards',
          }}>
            <Link
              href={data.link.path}
              aria-label={data.link.title}
            >
              {data.link.title}
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}