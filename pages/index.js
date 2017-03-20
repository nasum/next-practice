import Head from 'next/head'
import Link from 'next/link'

export default () => (
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <p>Hello world!</p>
    <div>Click <Link href="/about"><a>here</a></Link> to read more</div>
  </div>
)
