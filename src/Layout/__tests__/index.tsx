import * as React from "react"
import * as renderer from "react-test-renderer"

import Layout from "../index"

describe("Layout", () => {
    it("renders correctly", () => {
        const tree = renderer.create(<Layout>Test</Layout>).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
