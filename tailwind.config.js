const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text-color': '#12305B',
        'secondary-color': '#FC5959',
        'card-bg': '#FBF9F2;',
        highlighter: '#4D533C',
        'border-color': '#21384218',
      },
      backgroundImage: {},
      boxShadow: {
        shadowLight: '50px 50px 100px rgba(0, 0, 0, 0.145947)',
        cardShadow: '0px 100px 100px rgba(0, 0, 0, 0.145947)',
      },
    },
  },
  plugins: [],
}
export default config
