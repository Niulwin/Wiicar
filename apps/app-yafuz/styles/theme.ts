import { createTheme } from '@mui/system'

export const lightTheme = {
    colors: {
        primary: '#2B4466',
        second: '#6779AB',
        create: '#109CF1',
        info: '#50A5F1',
        success: '#109CF1',
        danger: '#F58280',
        warning: '#F2B983',
        muted: '#6A7187',
        line: '#d2d2d2',
        rate: '#FDB233',
        genericLight: '#fff',
        errorColor: '#d60915',
        fileExcel: '#3CB371'
    },
    backgrounds: {
        dark: '#2A3042',
        light: '#ffffff',
        main: '#f0f0f0',
        general: '#f0f2f5'
    },
    text: {
        main: '#5c5057',
        light: '#ffffff',
        second: '#CBCAC8',
        black: '#000',
        white: '#ffffff',
        errorColor: 'red',
        gray: '#ABABAD', 
        FPCOLOR: '#A8A9AB',
        FSColor: '#a1a4ac'
    }
}

export const MuiTheme = createTheme({
    palette: {
        primary: {
            main: '#d60915'
        },
        secondary: {
            main: '#109CF1'
        }
    }
})

export type ThemeInterface = typeof lightTheme