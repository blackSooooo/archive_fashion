import Layout from 'layouts/default'
import dynamic from 'next/dynamic'

export default function Page() {
  const Landing = dynamic(() => import('templates/landing'))

  return (
    <Layout>
      <Landing />
    </Layout>
  )
}
