import * as React from "react"
import * as renderer from "react-test-renderer"

import NotFoundPage from "../404"

describe("NotFoundPage", () => {
    it("renders correctly", () => {
        const tree = renderer.create(<NotFoundPage />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
