import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import PageTitle from '../components/atoms/PageTitle'

const Home = (): JSX.Element => {
  const pageList = ['react-beautiful-dnd']
  return (
    <Layout>
      <Head>
        <title>Next.js Playground</title>
      </Head>
      <PageTitle pageName={'ページ一覧'} />
      {pageList.map((page, index) => (
        <Link href={'/' + page} key={index}>
          <a>{page}</a>
        </Link>
      ))}
    </Layout>
  )
}

export default Home
