import { blue } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const extraColor = {
    palette: {
        green: {
            'main': '#63d523',
            'light': '#e5f0da',
            'dark': '#c1eb98'
        },
        grey: {
            'light': '#efefef',
            'main': '#d8d8d8',
            'dark': '#333333',
        },
    }
};

export const colorTheme = createTheme({
    palette: {
        primary: {
            light: blue[300],
            main: blue[500],
            dark: blue[700],
        },
        secondary: {
            main: '#C3C3C3',
            light: '#F2F2F2',
            dark: '#7B838A',
        },
        common: {
            white: '#fff',
            black: '#000',
        },
    },
});

export const muiTheme = createTheme(colorTheme, {
    components: {
        MuiSelect: {
			styleOverrides: {
				select: {
					fontSize: 14,
					fontWeight: 400,
					color: `${colorTheme.palette.common.black}`,
					borderRadius: 0,
                    width: '180px',
                    display: 'flex'
				},
			},
		},
        MuiInputBase: {
            styleOverrides: {
                root: {
                    overflow: 'hidden',
                    fontSize: 12,
                    paddingTop: 0,
                    paddingBottom: 0,
                    fontWeight: 400,
                    border: 0,
                    borderBottom: `1px solid ${colorTheme.palette.secondary.main}`,
                    borderRadius: 0,
                    '&.Mui-disabled': {
                        background: `${colorTheme.palette.secondary.main}`,
                    },
                },
                input: {
                    background: `${colorTheme.palette.common.white}`,
                    color: `${colorTheme.palette.common.black}`,
                    borderRadius: 0,
                    '&.Mui-disabled': {
                        background: 'transparent',
                        '-webkit-text-fill-color': `${colorTheme.palette.primary.main}`,
                    },
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    color: `${extraColor.palette.grey.dark}`
                }
            }
        }
    },
});