import React, { ReactElement } from "react"
import { Helmet } from "react-helmet"
import Header from "./Header"

import "./index.css"

interface LayoutProps {
    children: ReactElement
}

const Layout = (props: LayoutProps): ReactElement => {
    return (
        <div>
            <Helmet
                title="Gatsby TypeScript Default Starter"
                meta={[
                    { name: "description", content: "Gatsby TypeScript Default Starter" },
                    { name: "keywords", content: "gatsby, typescript, template" },
                ]}
            />
            <Header />
            <div
                style={{
                    margin: "0 auto",
                    maxWidth: 960,
                    padding: "0px 1.0875rem 1.45rem",
                    paddingTop: 0,
                }}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout
