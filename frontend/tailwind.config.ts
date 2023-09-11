import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        light2: {
          primary: '#1a3699',

          'primary-content': '#f3f4f6',

          accent: '#286aa5',

          neutral: '#2a323c',

          'base-100': '#fff',

          'base-200': '#f9fafb',

          'component-bg': '#fff',

          info: '#3abff8',

          success: '#00751f',

          warning: '#fbbd23',

          error: '#f87272',
        },
      },
      {
        dark2: {
          primary: '#103d88',

          accent: '#286aa5',

          neutral: '#2a323c',

          'base-100': '#1f1f1f',

          'base-200': '#313131',

          info: '#3abff8',

          success: '#36d399',

          warning: '#fbbd23',

          error: '#f87272',
        },
      },
    ],
  },
}
export default config
