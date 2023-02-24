const fs = require('fs')
const path = require('path')
const packages = fs.readdirSync(path.join(__dirname, '..'))

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ].concat(packages.filter(p => {
    try {
      const pPkg = require(`../${p}/package.json`)
      return !!pPkg.isReactModule
    } catch (err) {}
    return false
  })).map(p => `../${p}/dist/**/*.{js,ts,jsx,tsx}`),
  theme: {
    extend: {
      colors: {}
    },
  },
  plugins: [],
}