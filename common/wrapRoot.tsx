import React, { ReactElement } from "react"
import { WrapRootElementBrowserArgs } from "gatsby"
import Layout from "../src/Layout"

const wrapRoot = (props: WrapRootElementBrowserArgs): ReactElement => {
    return (
        <Layout>
            <div>{props.element}</div>
        </Layout>
    )
}

export default wrapRoot
