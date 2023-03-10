module.exports = {
  mode: "jit",
  purge: ["./src/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "1.5rem",
      },
      screens: {
        DEFAULT: "75rem",
      },
    },
    fontFamily: {
      heading: ['"Maven Pro", sans-serif'],
      // display: ['"", '],
      body: ['"Montserrat", sans-serif'],
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease-in",
      },
      borderRadius: {
        "3xl": "1.25rem",
        "4xl": "1.5rem",
        "5xl": "2rem",
        "6xl": "2.5rem",
        "7xl": "3rem",
        "8xl": "3.75rem",
      },
      boxShadow: {
        "2xl": "0px 4px 20px rgba(0, 0, 0, 0.1)",
        "3xl": "0px 4px 30px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        gray: {
          900: "#1A1A1A",
          800: "#39383C",
          700: "#5C5B5F",
          600: "#66666D",
          500: "#7A7A7E",
          400: "#999999",
          300: "#B2B2B2",
          200: "#CCCCCC",
          100: "#E5E5E5",
          50: "#F7F7F7",
        },
        "primary-900": "#00274B",
        "primary-800": "#064D93",
        "primary-700": "#00ACE2",
        "primary-600": "#24ABE2",
        "primary-500": "#5FC3E2",
        // "primary-400": "",
        "primary-300": "#B8EAFF",
        //   "primary-200": "",
        "primary-100": "#F1FBFF",
        // "primary-50": "",

        // "secondary-900": "",
        // "secondary-800": "",
        // "secondary-700": "",
        "secondary-600": "#FF8500",
        // "secondary-500": "",
        // "secondary-400": "",
        // "secondary-300": "",
        // "secondary-200": "",
        // "secondary-100": "",
        // "secondary-50": "",
      },
      fontSize: {
        "2xs": ".625rem",
        sm: ["0.875rem", "1.5rem"],
        md: ".9375rem",
        base: ["1rem", "1.625rem"],
        lg: ["1.125rem", "1.625rem"],
        xl: ["1.25rem", "1.875rem"],
        "2xl": ["1.375rem", "2rem"],
        "3xl": ["1.5rem", "1.813rem"],
        "4xl": ["1.875rem", "2.313rem"],
        "5xl": ["2.25rem", "2.75rem"],
        "6xl": ["2.625rem", "3.188rem"],
        "7xl": ["3.25rem", "3.813rem"],
        "8xl": ["3.5rem", "4.25rem"],
        "mobile-lg": ["1rem", "1.75rem"],
        "mobile-xl": ["1.125rem", "1.625rem"],
        "mobile-2xl": ["1.375rem", "2rem"],
        "mobile-3xl": ["1.25rem", "1.5rem"],
        "mobile-4xl": ["1.563rem", "1.875rem"],
        "mobile-5xl": ["1.75rem", "2.125rem"],
        "mobile-6xl": ["2rem", "2.438rem"],
        "mobile-7xl": ["2.5rem", "3.063rem"],
        "mobile-8xl": ["3.5rem", "4rem"],
      },
      height: {
        "50vh": "50vh",
        "50vw": "50vw",
        "75vh": "75vh",
        "75vw": "75vw",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      letterSpacing: {
        wider: "0.08em",
        widest: "0.16em",
      },
      ringWidth: {
        3: "3px",
      },
      screens: {
        xs: "480px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        104: "26rem",
      },
      width: {
        "50vw": "50vw",
        "75vw": "75vw",
        "100vw": "100vw",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
