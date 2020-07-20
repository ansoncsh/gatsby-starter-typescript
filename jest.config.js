module.exports = {
    transform: {
        "^.+\\.(tsx?|jsx?)$": `<rootDir>/jest-configs/jest-preprocess.js`,
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$",
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
        ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/jest-configs/__mocks__/file-mocks.js`,
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
    globals: {
        __PATH_PREFIX__: ``,
        __BASE_PATH__: ``,
    },
    setupFiles: [`<rootDir>/loadershim.js`],
}
