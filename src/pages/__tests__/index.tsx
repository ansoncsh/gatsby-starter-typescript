import * as React from "react"
import * as renderer from "react-test-renderer"
import IndexPage from "../index"

describe("IndexPage", () => {
    it("renders correctly", () => {
        const data = {
            site: {
                siteMetadata: {
                    title: `Gatsby Typescript Starter`,
                },
            },
        }
        const tree = renderer.create(<IndexPage data={data} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
