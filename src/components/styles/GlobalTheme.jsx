import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
    fontFamily: 'Roboto, sans-sarif',
    colors: {
        blue: '#009688',
        gray: '#c6c6c6',
        dark: '#353535',
    },
};

const GlobalStyle = createGlobalStyle`
body {
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 18px;
    margin: 0;
    padding-top: 40px;
    padding-left: 15px;
    padding-right: 15px;
}
`;

const GlobalTheme = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
    </ThemeProvider>
);

export default GlobalTheme;
