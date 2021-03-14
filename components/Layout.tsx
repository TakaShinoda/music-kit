import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="apple-music-developer-token" content={process.env.NEXT_PUBLIC_DEVELOPER_TOKEN} />
      <meta name="apple-music-app-name" content="My Cool Web App" />
      <meta name="apple-music-app-build" content="yyyy.mm.dd" />
      <script src="https://js-cdn.music.apple.com/musickit/v1/musickit.js"></script>
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/search">
          <a>Search</a>
        </Link>{' '}
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
