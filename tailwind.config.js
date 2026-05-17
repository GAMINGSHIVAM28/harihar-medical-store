export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef9f3',
          100: '#d5f2e1',
          200: '#b8e9cc',
          300: '#8fd5ab',
          400: '#5cb88a',
          500: '#2f8c67',
          600: '#24734f',
          700: '#1e5d42',
          800: '#174834',
          900: '#11382a'
        },
        secondary: {
          50: '#eef8ff',
          100: '#d9ecff',
          200: '#b9dbff',
          300: '#8cc2ff',
          400: '#5a98f1',
          500: '#3f7ed2',
          600: '#3262a7',
          700: '#2b5384',
          800: '#243f63',
          900: '#1e334e'
        },
        accent: {
          50: '#f4fbea',
          100: '#e5f5cc',
          200: '#d2edab',
          300: '#b8dd7a',
          400: '#9ac14e',
          500: '#7fa52e',
          600: '#677f25',
          700: '#52651a',
          800: '#3e4f3f',
          900: '#2f3d34'
        }
      },
      boxShadow: {
        soft: '0 22px 60px rgba(13, 47, 36, 0.12)',
        glow: '0 28px 80px rgba(18, 83, 63, 0.12)',
        hover: '0 18px 45px rgba(17, 64, 52, 0.16)'
      },
      borderRadius: {
        xl: '2rem'
      }
    }
  },
  plugins: []
};
