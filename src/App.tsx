import "./App.css";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { AppRoutes } from "./AppRoutes";
import { muiTheme } from "./shared/styles/muiTheme";

function App() {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <div className="App">
        <AppRoutes />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
