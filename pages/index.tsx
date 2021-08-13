import Head from 'next/head'
import Link from 'next/link'
import PageTitle from '../components/atoms/PageTitle'

const Home = (): JSX.Element => {
  const pageList = ['animation', 'react-beautiful-dnd', 'pagination']

  return (
    <>
      <Head>
        <title>Next.js Playground</title>
      </Head>
      <PageTitle pageName={'ページ一覧'} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {pageList.map((page, index) => (
          <Link href={'/' + page} key={index}>
            <a>{page}</a>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Home
