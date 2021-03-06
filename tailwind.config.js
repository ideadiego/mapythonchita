/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}"
    ],
    theme: {
      extend: {
        fontFamily: {
          'inconsolata': ['Inconsolata'],
          'georama': ['Georama'],
          'bitter': ['Bitter'],
          'lobster': ['Lobster'],
          'lato': ['Lato'],
          'abril': ['"Abril Fatface"'],
        },
        height: {
          "10v": "10vh",
          "20v": "20vh",
          "30v": "30vh",
          "40v": "40vh",
          "50v": "50vh",
          "60v": "60vh",
          "70v": "70vh",
          "80v": "80vh",
          "90v": "90vh",
          "100v": "100vh",
        },
        width: {
          "10v": "10vw",
          "20v": "20vw",
          "30v": "30vw",
          "40v": "40vw",
          "50v": "50vw",
          "60v": "60vw",
          "70v": "70vw",
          "80v": "80vw",
          "90v": "90vw",
          "100v": "100vw",
        },
      },
    },
  daisyui:{
    themes: [
      {
        cyberdiego: {
          fontFamily: "georama",
          primary: "#5AF2FF",
          "primary-focus": "#5A8BEF",
          "primary-content": "#000",
          secondary: "#F33399",
          "secondary-focus": "#F433F3",
          "secondary-content": "#000",
          accent: "#FAD400",
          "accent-focus": "#FAB400",
          "accent-content": "#000",
          neutral: "#1C1348",
          "neutral-focus": "#100A53",
          "neutral-content": "#FFF",
          "base-100": "#000717",
          "base-200": "#142F67",
          "base-300": "#0B0632",
          "base-content": "#f8f8f8",
          "info": "#0CA5E9",
          "info-content": "#CCF0FF",
          "success": "#2DD4BF",
          "success-content": "#00332C",
          "warning": "#F4BF50",
          "warning-content": "#422D00",
          "error": "#FB7085",
          "error-content": "#47000B",
        },
        lemonade: {
          primary: "#519903",
          "primary-focus": "5A8BEF",
          "primary-content": "#DCFFB8",
          secondary: "#E9E92E",
          "secondary-focus": "#CBCB15",
          "secondary-content": "#383800",
          accent: "#F7F9CA",
          "accent-focus": "#EAF07A",
          "accent-content": "#575C00",
          neutral: "#191A3F",
          "neutral-focus": "#141533",
          "neutral-content": "#A9ACFF",
          "base-100": "#ffffff",
          "base-200": "#E6E6E6",
          "base-300": "#CFCFCF",
          "base-content": "#333333",
          info: "#C8E1E7",
          "info-content": "#09404E",
          success: "#DEF29F",
          "success-content": "#3F5200",
          warning: "#F7E589",
          "warning-content": "#4D4000",
          error: "#F2B6B5",
          "error-content": "#570100",
        },
        night: {
          fontFamily: "georama",
          "primary": "#38bdf8",
          "primary-focus": "#09A8EC",
          "primary-content": "#002B3D",
          "secondary": "#818CF8",
          "secondary-focus": "#394CF3",
          "secondary-content": "#00084D",
          "accent": "#F471B5",
          "accent-focus": "#EF2E92",
          "accent-content": "#470025",
          "neutral": "#1E293B",
          "neutral-focus": "#273449",
          "neutral-content": "#B3CCF5",
          "base-100": "#0F172A",
          "base-200": "#0E1525",
          "base-300": "#0C1322",
          "base-content": "#B3C5EF",
          "info": "#0CA5E9",
          "info-content": "#CCF0FF",
          "success": "#2DD4BF",
          "success-content": "#00332C",
          "warning": "#F4BF50",
          "warning-content": "#422D00",
          "error": "#FB7085",
          "error-content": "#47000B",
        },
      }, "valentine", "light", "wireframe", "dark", "cyberpunk"
    ]
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/aspect-ratio'),
    require("@tailwindcss/typography")
  ],
}
