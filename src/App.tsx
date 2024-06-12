import "./App.css";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AppRoutes } from "./AppRoutes";
import { muiTheme } from "./shared/styles/muiTheme";
import OptxSnackbarProvider from "./shared/components/OptxNotistack/OptxSnackbarProvider";
import { OptxNotistack } from "./shared/components/OptxNotistack/OptxNotistack";

function App() {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <OptxSnackbarProvider>
          <div className="App">
            <AppRoutes />
          </div>
          <OptxNotistack />
        </OptxSnackbarProvider>
      </LocalizationProvider>
    </MuiThemeProvider>
  );
}

export default App;
