module.exports = {
    content: ['./src/**/*.{js,jsx}', './public/index.html'],
    theme: {
        extend: {
            colors: {
                'primary': '#000D1A',
                'gray_border': "#CCCFD1",
                'text': '#4D565F',
                'text_gray': '#80868C',
                'helper': '#B3B6BA',
                'white': "#FFFFFF",
                'error': "C84F4F",
                'blue': '#1fb6ff',
                'purple': '#7e5bef',
                'pink': '#ff49db',
                'orange': '#ff7849',
                'green': '#27AE60',
                'yellow': '#ffc82c',
                'gray': '#FAFAFA',
            },
            height: {
                "8px": "8px",
                "20px": '20px',
                "442px":"442px"
            },
            width: {
                "8px": "8px",
                "20px":'20px',
                "560px":"560px"
            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
                serif: ['Roboto', 'serif'],
            },
            spacing: {
                '1': '8px',
                '2': '12px',
                '3': '16px',
                '4': '24px',
                '5': '32px',
                '6': '48px',
            },
            extend: {
                borderRadius: {
                    "8px": "8px",
                    '4xl': '2rem',
                }
            },
            container: {
                screens: {
                    sm: '280px',
                    md: '408px',
                    lg: '664px',
                    xl: '920px',
                    '2xl': '1176px',
                  },
            },
        },
    },
    plugins: [],
};
