import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"

interface IndexPageProps {
    data: {
        site: {
            siteMetadata: {
                title: string
            }
        }
    }
}

const IndexPage = (props: IndexPageProps) => {
    return (
        <div>
            <h1>Hi people</h1>
            <p>
                Welcome to your new <strong>{props.data.site.siteMetadata.title}</strong> site.
            </p>
            <p>Now go build something great.</p>
            <Link to="/about/">Go to about page</Link>
        </div>
    )
}

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`
export default IndexPage
