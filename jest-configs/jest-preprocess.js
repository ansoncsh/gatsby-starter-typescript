import { createTransformer } from "babel-jest"

const babelOptions = {
    presets: ["@babel/preset-react", "babel-preset-gatsby", "@babel/preset-typescript"],
}

module.exports = createTransformer(babelOptions)
