module.exports = {
  content: [
    "./src/produce.html" , 
    "./src/test.html" , 
    "./src/userMain.html",
    "./src/Login.html",
    "./src/jsTest.html",
    "./src/preview.html",
    "./src/cropper-test.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgStyle01' : "url('/img/fabric-1-light.png)",
      }
    },

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    minWidth: {
      '1/2' : '50%',
      '80' : '80px',
      '1/5' : '1/5'
    },
    translate: {
      '-1/2': "-50%"
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },

    fontFamily:{
      'base' : 'noto',
      'myeongjo': 'NanumMyeongjo',
      'Square' : 'NanumSquare',
      'SquareRound' : 'NanumSquareRound',
      'Maru' : 'MaruBuri',
      'sCore' : 'SCoreDream'
    },



  },
  plugins: [


    require('tailwind-scrollbar-hide')

  ],
}