import Container from '@/components/Container'
import { about } from '@/data/content'


export const getStaticProps = async () => {
  return { props: { data: about} }
}


export default function About({ data }) {

  return(
    <Container title={data.meta.title} robots="noindex">
      <div>
        {about.content}
      </div>
    </Container>
  )
}