import "./App.css";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AppRoutes } from "./AppRoutes";
import { muiTheme } from "./shared/styles/muiTheme";
import OptxSnackbarProvider from "./shared/components/OptxNotistack/OptxSnackbarProvider";
import { OptxNotistack } from "./shared/components/OptxNotistack/OptxNotistack";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    // This will run once when the component mounts remove this when actual login works.
    localStorage.setItem('token', 'true');
  }, []); // Empty dependency array means this effect runs only once


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
