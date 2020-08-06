import React, { ReactElement } from "react"
import Link from "gatsby-link"

const AboutPage = (): ReactElement => (
    <div>
        <p>Welcome to about page</p>
        <Link to="/">Go back to the homepage</Link>
    </div>
)

export default AboutPage
