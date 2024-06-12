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
  typography: {
    fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    text: {
      primary: '#262626',
      secondary: '#2D2D2D'
    },
  },
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
          fontSize: 14,
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
            background: `${colorTheme.palette.secondary.main}`
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
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          // Controls default (unchecked) color for the thumb
          color: `${colorTheme.palette.common.white}`
        },
        colorPrimary: {
          "&.Mui-checked": {
            // Controls checked color for the thumb
            color: `${colorTheme.palette.primary.main}`
          }
        },
        track: {
          // Controls default (unchecked) color for the track
          opacity: 0.38,
          backgroundColor: `${colorTheme.palette.common.black}`,
          ".Mui-checked.Mui-checked + &": {
            // Controls checked color for the track
            opacity: 0.7,
            backgroundColor: `${colorTheme.palette.primary.light}`
          }
        }
      }
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          overflow: 'hidden',
        },
        filterForm: {
          gap: 20,
          padding: 20,
          paddingRight: 10
        },
        row: {
          fontSize: 16,
          cursor: 'pointer',
          '&.Mui-selected, &:hover': {
            '.MuiDataGrid-cell[data-field="options"] > div, .MuiDataGrid-cell:last-child > *': {
              opacity: 1,
              pointerEvents: 'auto',
            }
          },
          '.Mui-selected': {
            background: '#3684B026'
          }
        },
        cell: {
          color: '#262626',
          borderColor: '#E0E0E0',
          '&:focus, &:active, &:focus-within': {
            outline: 'none'
          },
          '&:first-child': {
            paddingLeft: 8,
            '&:not(.MuiDataGrid-cellCheckbox)': {
              padding: '8px 10px 8px 20px'
            }
          },
        },
        columnHeaderRow: {
          backgroundColor: '#F2F2F2 !important',
        },
        columnHeader: {
          padding: '0 8px',
          '&--sortable': {
            '&:first-child': {
              padding: '0 20px'
            }
          },
          '&:focus-within': {
            outline: 'none'
          },
          '&:last-child': {
            '.MuiDataGrid-columnSeparator': {
              display: 'none'
            }
          },
        },
        columnHeaderTitle: {
          fontWeight: 700,
          lineHeight: '19px',
          whiteSpace: 'normal',
          color: '#7B838A',
        },
        columnHeaderTitleContainer: {
          maxWidth: '100%',
        },
        checkboxInput: {
          color: '#BCBCBC',
          '&.Mui-checked': {
            color: '#0B5179'
          }
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "14px",
          color: `${colorTheme.palette.common.white}`,
          backgroundColor: `${colorTheme.palette.primary.main}`,
          '& .MuiTooltip-arrow': {
            color: `${colorTheme.palette.primary.main}`,
          },
        }
      }
    },
    MuiPickersToolbar: {
      styleOverrides: {
        root: {
          color: '#1565c0',
          borderRadius: '2px',
          borderWidth: '1px',
          borderColor: '#2196f3',
          border: '1px solid',
          backgroundColor: '#90caf9',
          fontSize: '16px'
        }
      }
    }
  },
});