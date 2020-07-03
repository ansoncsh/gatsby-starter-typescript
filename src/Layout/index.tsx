import * as React from 'react'
import Link from 'gatsby-link'
import { Helmet } from 'react-helmet'

import './index.css'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
    </div>
  </div>
)

interface LayoutProps {
  children: React.ReactNode
}

const Layout = (props: { children: LayoutProps }) => {
  return (
    <div>
      <Helmet
        title="Gatsby TypeScript Default Starter"
        meta={[
          { name: 'description', content: 'Gatsby TypeScript Default Starter' },
          { name: 'keywords', content: 'gatsby, typescript, template' },
        ]}
      />
      <Header />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {props.children}
      </div>
    </div>
  )
}

export default Layout
