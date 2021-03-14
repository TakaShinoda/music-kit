import Layout from '../components/Layout'
import { TodaysHit } from '../components/TodaysHit'

const IndexPage = () => (
  <Layout title="Home">
    <h1>Hello Music 🎧</h1>
    <TodaysHit />
  </Layout>
)

export default IndexPage
