/*global module*/

module.exports ={
  "collectCoverageFrom": [
    "src/**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],
  globalSetup: '<rootDir>/setupTests.js',
}